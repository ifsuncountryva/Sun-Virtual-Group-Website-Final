import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "What is the primary hub for Sun Country Virtual operations?",
    correct: "MSP (Minneapolis)",
    options: ["MSP (Minneapolis)", "LAS (Las Vegas)", "LAX (Los Angeles)", "ORD (Chicago)"]
  },
  {
    question: "What aircraft does Allegiant Virtual primarily operate?",
    correct: "Airbus A319 and A320",
    options: ["Boeing 737 family", "Airbus A319 and A320", "Embraer E175", "Boeing 757"]
  },
  {
    question: "What is required before submitting a flight report?",
    correct: "Complete the flight log with all required fields",
    options: ["Complete the flight log with all required fields", "Get approval from a senior pilot", "Wait 24 hours after the flight", "Submit a photo of the flight"]
  },
  {
    question: "According to the code of conduct, how should pilots treat other members?",
    correct: "With respect and professionalism at all times",
    options: ["With respect and professionalism at all times", "Only senior pilots deserve respect", "Informally, it is a game", "Compete with other pilots for routes"]
  },
  {
    question: "What is required to advance in rank?",
    correct: "Complete real-world equivalent hours for each rank tier",
    options: ["Complete real-world equivalent hours for each rank tier", "Pay a monthly fee", "Fly only specific routes", "Win a monthly competition"]
  },
  {
    question: "Which hub does Allegiant Virtual use in Florida?",
    correct: "PIE (Tampa/St. Pete-Clearwater)",
    options: ["PIE (Tampa/St. Pete-Clearwater)", "MCO (Orlando International)", "MIA (Miami)", "TPA (Tampa International)"]
  },
  {
    question: "What does SCVG stand for?",
    correct: "Sun Country Virtual Group",
    options: ["Sun Country Virtual Group", "Simulated Commercial Virtual Gateway", "Sky Country Virtual Group", "Sun Continental Virtual Group"]
  },
  {
    question: "What is required for ATC communication during flights?",
    correct: "Proper ICAO phraseology",
    options: ["Proper ICAO phraseology", "Any language is acceptable", "Text chat only", "No ATC communication required"]
  },
  {
    question: "Which aircraft family does Sun Country Virtual operate?",
    correct: "Boeing 737 family",
    options: ["Boeing 737 family", "Airbus A320 family", "Boeing 777", "Embraer E-Jets"]
  },
  {
    question: "What should a pilot do if they experience a sim crash mid-flight?",
    correct: "File a PIREP and note the technical issue in the flight log",
    options: ["File a PIREP and note the technical issue in the flight log", "Ignore it and rebook the flight", "Contact the real airline", "Restart the sim and continue without reporting"]
  }
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
    score = questions.reduce((acc, q, i) => {
      return acc + (answers[i] === q.correct ? 1 : 0);
    }, 0);
  }

  const isPassed = score === questions.length;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background flex flex-col items-center">
      <div className="container px-4 max-w-3xl w-full">
        
        {!started && !submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white">Membership Quiz</h1>
            <p className="text-xl text-muted-foreground mb-8">
              To join SCVG, you must demonstrate a basic understanding of our rules and operations. Read the Pilot Handbook, then score 100% on this 10-question quiz to unlock Discord access.
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

        {started && !submitted && (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-muted-foreground font-medium">Question {currentQ + 1} of {questions.length}</span>
              <div className="flex gap-1">
                {questions.map((_, i) => (
                  <div key={i} className={`h-2 w-8 rounded-full ${i <= currentQ ? 'bg-primary' : 'bg-muted'}`} />
                ))}
              </div>
            </div>

            <Card className="bg-card border-border shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold font-serif text-white mb-8">
                  {questions[currentQ].question}
                </h2>
                <div className="space-y-4">
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        answers[currentQ] === opt 
                          ? 'bg-primary/20 border-primary text-white' 
                          : 'bg-background border-border text-muted-foreground hover:bg-muted hover:text-white'
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
                    {currentQ === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

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
                <p className="text-lg text-muted-foreground">You need 10/10 to pass. Please review the handbook and try again.</p>
                
                <div className="text-left mt-12 space-y-6">
                  <h3 className="text-xl font-bold border-b border-border pb-2">Review Your Answers</h3>
                  {questions.map((q, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg border border-border">
                      <p className="font-medium text-white mb-2">{i + 1}. {q.question}</p>
                      {answers[i] === q.correct ? (
                        <div className="flex items-center gap-2 text-green-500 text-sm">
                          <CheckCircle2 className="w-4 h-4" /> Correct: {q.correct}
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-destructive text-sm">
                            <XCircle className="w-4 h-4" /> Your answer: {answers[i] || 'None'}
                          </div>
                          <div className="flex items-center gap-2 text-green-500 text-sm">
                            <CheckCircle2 className="w-4 h-4" /> Correct answer: {q.correct}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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
