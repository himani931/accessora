import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";

const questions = [
  {
    question: "React is primarily used for?",
    options: ["Database", "UI", "Backend only", "Compiler"],
    answer: "UI",
  },
  {
    question: "Node.js runs on which engine?",
    options: ["V8", "SpiderMonkey", "Java VM", "Ruby VM"],
    answer: "V8",
  },
  {
    question: "MongoDB is a?",
    options: ["SQL DB", "NoSQL DB", "Compiler", "IDE"],
    answer: "NoSQL DB",
  },
];

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[index];

  const handleAnswer = (option) => {
    if (option === current.answer) {
      setScore((s) => s + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-20">
        {!done ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h1 className="text-3xl font-bold">{current.question}</h1>

            <div className="mt-8 space-y-4">
              {current.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full rounded-2xl bg-white/5 p-4 text-left hover:bg-indigo-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h1 className="text-5xl font-bold text-green-400">
              Quiz Completed 🎉
            </h1>

            <p className="mt-5 text-2xl">
              Score: {score}/{questions.length}
            </p>

            <div className="mt-10 rounded-3xl bg-indigo-500/20 p-8">
              <h2 className="text-3xl font-bold">Certificate Earned 🏆</h2>

              <p className="mt-3 text-slate-300">
                Accessora Learning Certificate
              </p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
