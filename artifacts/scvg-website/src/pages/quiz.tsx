import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Trophy, BookOpen } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  // ── §4 Rank Structure ────────────────────────────────────────────────────
  {
    section: "Section 4 — Rank Structure",
    sectionId: "ranks",
    question: "Which rank gains access to all SCXV codeshare routes?",
    correct: "First Officer",
    options: ["Cadet", "Captain", "First Officer", "Executive Flight Crew"],
  },
  {
    section: "Section 4 — Rank Structure",
    sectionId: "ranks",
    question: "What rank unlocks Gemini Air Cargo routes?",
    correct: "Training Captain",
    options: ["Captain", "Executive Flight Crew", "First Officer", "Training Captain"],
  },
  // ── §5 Routes & Charter Ops ──────────────────────────────────────────────
  {
    section: "Section 5 — Routes & Charter Operations",
    sectionId: "routes",
    question: "What is the minimum rank required to fly charter flights at SCXV?",
    correct: "Executive Flight Crew",
    options: ["Captain", "Executive Flight Crew", "Training Captain", "First Officer"],
  },
  {
    section: "Section 5 — Routes & Charter Operations",
    sectionId: "routes",
    question: "Which aircraft is used exclusively for Sun Country charter operations?",
    correct: "Boeing 737-800",
    options: ["Airbus A320", "Boeing 757-200", "Boeing 737-800", "DC-10"],
  },
  {
    section: "Section 5 — Routes & Charter Operations",
    sectionId: "routes",
    question: "What is the maximum flight time allowed for a charter flight?",
    correct: "8 hours",
    options: ["6 hours", "10 hours", "12 hours", "8 hours"],
  },
  {
    section: "Section 5 — Routes & Charter Operations",
    sectionId: "routes",
    question: "What is the required callsign prefix for charter PIREPs?",
    correct: "SY8XXX",
    options: ["SY7XXX", "SY8XXX", "SC8XXX", "SX8XXX"],
  },
  // ── §6 Featured Flights ──────────────────────────────────────────────────
  {
    section: "Section 6 — Featured Flights",
    sectionId: "featured",
    question: "What bonus multiplier is awarded when both the Airport of the Month and Airline of the Month are completed on the same flight?",
    correct: "3x",
    options: ["2x", "1.5x", "2.5x", "3x"],
  },
  // ── §7 General Operating Procedures ─────────────────────────────────────
  {
    section: "Section 7 — General Operating Procedures",
    sectionId: "ops",
    question: "Which Infinite Flight server must all SCXV flights be conducted on?",
    correct: "Expert Server",
    options: ["Casual Server", "Training Server", "Expert Server", "Private Server"],
  },
  {
    section: "Section 7 — General Operating Procedures",
    sectionId: "ops",
    question: "What is the maximum number of flights that may be logged simultaneously using AP+?",
    correct: "2",
    options: ["1", "2", "3", "Unlimited"],
  },
  {
    section: "Section 7 — General Operating Procedures",
    sectionId: "ops",
    question: "If AP+ incorrectly tracks fuel or time, what may pilots use as a substitute?",
    correct: "SimBrief or Flightradar24 values",
    options: ["Discord estimates", "ATC calculations", "SimBrief or Flightradar24 values", "Manual guesses"],
  },
];

export function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentQ]: option }));
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQ(0);
    setAnswers({});
    setSubmitted(false);
  };

  let score = 0;
  if (submitted) {
    score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);
  }

  const isPassed = score === questions.length;

  const q = questions[currentQ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background flex flex-col items-center">
      <div className="container px-4 max-w-3xl w-full">

        {/* ── Start screen ── */}
        {!started && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white">Membership Quiz</h1>
            <p className="text-xl text-muted-foreground mb-8">
              To join SCXV, you must demonstrate a basic understanding of our rules and operations. Read the Pilot Handbook, then score 100% on this 10-question quiz to unlock Discord access.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setStarted(true)} className="px-8 py-6 text-lg h-auto">
                Start Quiz
              </Button>
              <Link href="/handbook">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg h-auto">
                  Read Handbook First
                </Button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* ── Question screen ── */}
        {started && !submitted && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              {/* Progress */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-muted-foreground font-medium text-sm">
                  Question {currentQ + 1} of {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-8 rounded-full transition-colors ${i < currentQ ? "bg-primary" : i === currentQ ? "bg-primary/70" : "bg-muted"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Section badge */}
              <div className="mb-3">
                <Link href={`/handbook#${q.sectionId}`}>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                    <BookOpen className="w-3 h-3" />
                    Find the answer in: {q.section}
                  </span>
                </Link>
              </div>

              <Card className="bg-card border-border shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold font-serif text-white mb-8">
                    {q.question}
                  </h2>
                  <div className="space-y-4">
                    {q.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(opt)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          answers[currentQ] === opt
                            ? "bg-primary/20 border-primary text-white"
                            : "bg-background border-border text-muted-foreground hover:bg-muted hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="mt-10 flex justify-end">
                    <Button
                      size="lg"
                      onClick={handleNext}
                      disabled={!answers[currentQ]}
                    >
                      {currentQ === questions.length - 1 ? "Submit Quiz" : "Next Question"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── Results screen ── */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full text-center"
          >
            {isPassed ? (
              <div className="space-y-8">
                <Trophy className="w-24 h-24 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Congratulations!</h2>
                <p className="text-xl text-muted-foreground">You scored 10/10. Welcome to the Sun Country Virtual Group.</p>
                <div className="mt-8 inline-block">
                  <a href="https://discord.gg/dbuFEQU8tS" target="_blank" rel="noreferrer">
                    <Button size="lg" className="px-8 py-6 text-lg h-auto gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white border-none">
                      <SiDiscord className="w-6 h-6" />
                      Join Our Discord
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-destructive font-bold text-6xl mb-2">{score}/{questions.length}</div>
                <h2 className="text-3xl font-bold font-serif text-white">Not quite ready.</h2>
                <p className="text-lg text-muted-foreground">You need 10/10 to pass. Review the sections below, then try again.</p>

                <div className="text-left mt-12 space-y-4">
                  <h3 className="text-xl font-bold border-b border-border pb-2">Review Your Answers</h3>
                  {questions.map((qItem, i) => {
                    const isCorrect = answers[i] === qItem.correct;
                    return (
                      <div key={i} className={`p-4 rounded-lg border ${isCorrect ? "border-green-500/20 bg-green-500/5" : "border-destructive/20 bg-destructive/5"}`}>
                        {/* Section badge */}
                        <div className="mb-2">
                          <Link href={`/handbook#${qItem.sectionId}`}>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                              <BookOpen className="w-2.5 h-2.5" />
                              {qItem.section}
                            </span>
                          </Link>
                        </div>
                        <p className="font-medium text-white mb-2">{i + 1}. {qItem.question}</p>
                        {isCorrect ? (
                          <div className="flex items-center gap-2 text-green-400 text-sm">
                            <CheckCircle2 className="w-4 h-4" /> Correct: {qItem.correct}
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-destructive text-sm">
                              <XCircle className="w-4 h-4" /> Your answer: {answers[i] || "None"}
                            </div>
                            <div className="flex items-center gap-2 text-green-400 text-sm">
                              <CheckCircle2 className="w-4 h-4" /> Correct answer: {qItem.correct}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex gap-4 justify-center">
                  <Button size="lg" onClick={handleRestart}>Try Again</Button>
                  <Link href="/handbook">
                    <Button variant="outline" size="lg">Read Handbook</Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
