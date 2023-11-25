import { Quiz } from "../../types";
import { useState } from "react";
import ScorePage from "./ScorePage";

type QuizPageProps = {
  quizData: Quiz;
};

const QuizPage = ({ quizData }: QuizPageProps) => {
  const [question, setQuestion] = useState<number>(0);
  const [progressBar, setProgressBar] = useState<number>(10);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<String | undefined>("");
  const [score, setScore] = useState<number>(0);
  const [showNextQuestion, setShowNextQuestion] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  let currentQuestion = quizData.questions && quizData.questions[question];
  let numberOfQuestions = quizData.questions?.length;

  const handleSubmit = () => {
    if (selectedAnswer === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    if (selectedAnswer === currentQuestion?.answer) {
      setScore(score + 1);
    }
    setShowNextQuestion(true);
    setIsSubmitted(true);
  };

  const handleSelectedAnswer = (answer: String | undefined) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    setSelectedAnswer("");
    setQuestion(question + 1);
    setProgressBar(progressBar + 10);
    setShowNextQuestion(false);
  };

  return (
    <>
      {Number(question) === numberOfQuestions ? (
        <ScorePage
          score={score}
          title={quizData.title}
          icon={quizData.icon}
          iconbg={quizData.iconbg}
          numberOfQuestions={numberOfQuestions}
        />
      ) : (
        <section className="mt-8 px-6 sm:px-16 xl:flex xl:w-full xl:px-0">
          <div className="mb-10 xl:mb-0 xl:flex xl:h-[452px]  xl:w-1/2 xl:flex-col xl:justify-between">
            <div className="xl:w-[465px]">
              <p className="text-sm italic text-greyNavy dark:text-lightBluish sm:text-[20px]">
                Question {question + 1} of {numberOfQuestions}
              </p>
              <h2 className="text-[20px] font-medium sm:text-[36px]">
                {currentQuestion?.question}
              </h2>
            </div>
            <div className="mt-6 flex h-4 w-full items-center justify-start rounded-full bg-white px-1 dark:bg-navy xl:w-[465px]">
              <span
                className="h-2 rounded-[104px] bg-purple"
                style={{ width: `${progressBar}%` }}
              ></span>
            </div>
          </div>
          <div className="xl:w-1/2">
            <ul className="space-y-3 pb-3 sm:space-y-6 sm:pb-6">
              {currentQuestion?.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index); // 65 is the ASCII value for 'A'
                const isSelected = selectedAnswer === option;
                const isCorrect = currentQuestion?.answer === option;
                const bgColor = isSelected
                  ? isCorrect
                    ? "text-white bg-green"
                    : "bg-red text-white"
                  : "bg-lightGrey text-darkNavy";
                const borderColor =
                  isSelected && isSubmitted
                    ? isCorrect
                      ? "border-green dark:border-green"
                      : "border-red dark:border-red"
                    : "border-white dark:border-navy";
                return (
                  <li
                    key={index}
                    className={
                      isSubmitted
                        ? `min-h-14 sm:min-h-20 pointer-events-none flex h-auto w-full items-center justify-between gap-4 rounded-xl border-[3px] bg-white p-3 font-medium drop-shadow-sm dark:border-navy dark:bg-navy dark:text-white sm:rounded-3xl xl:min-h-[92px] xl:w-[564px] ${borderColor}`
                        : `min-h-14 sm:min-h-20 group flex h-auto w-full cursor-pointer items-center gap-4 rounded-xl border-[3px] bg-white p-3 font-medium drop-shadow-sm dark:border-navy dark:bg-navy dark:text-white sm:rounded-3xl xl:min-h-[92px] xl:w-[564px] ${
                            isSelected
                              ? "border-purple dark:border-purple"
                              : "border-white dark:border-navy"
                          }`
                    }
                    onClick={() => handleSelectedAnswer(option)}
                  >
                    <span
                      className={
                        isSubmitted
                          ? `flex h-10 w-10 items-center justify-center rounded-md text-[18px] uppercase text-greyNavy sm:h-14 sm:w-14 sm:rounded-xl sm:text-[28px] ${bgColor}`
                          : `flex h-10 w-10 items-center justify-center rounded-md bg-lightGrey text-[18px] uppercase text-greyNavy group-hover:bg-[#F6E7FF] group-hover:text-purple sm:h-14 sm:w-14 sm:rounded-xl sm:text-[28px] ${
                              isSelected
                                ? "bg-purple text-white group-hover:bg-purple group-hover:text-white"
                                : "bg-lightGrey"
                            }`
                      }
                    >
                      {letter}
                    </span>
                    <p className="w-[200px] text-base sm:w-[456px] sm:text-[28px] sm:leading-tight">
                      {option}
                    </p>
                    <span className="ml-auto h-8 w-8 sm:h-10 sm:w-10">
                      {isSelected && isSubmitted ? (
                        isCorrect ? (
                          <img
                            src="/icon-correct.svg"
                            alt="Correct"
                            className="h-8 w-8 sm:h-10 sm:w-10"
                          />
                        ) : (
                          <img
                            src="/icon-incorrect.svg"
                            alt="Incorrect"
                            className="h-8 w-8 sm:h-10 sm:w-10"
                          />
                        )
                      ) : isSubmitted && isCorrect ? (
                        <img
                          src="/icon-correct.svg"
                          alt="Correct"
                          className="h-8 w-8 sm:h-10 sm:w-10"
                        />
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
            {!showNextQuestion ? (
              <button
                className="bg-['linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #a729f5'] hover:bg-btnHover h-14
                  w-full rounded-xl bg-purple py-2 text-xs font-semibold text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px] xl:w-[564px]"
                onClick={handleSubmit}
              >
                Submit Answer
              </button>
            ) : (
              <button
                className="hover:bg-btnHover h-14 w-full rounded-xl bg-purple py-2 text-xs font-semibold text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px]"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
            {error ? (
              <p className="mt-3 flex items-center justify-center gap-2 text-[18px] text-red sm:text-2xl">
                <img src="/icon-incorrect.svg" alt="Please select an answer" />
                <span>Please select an answer</span>
              </p>
            ) : null}
          </div>
        </section>
      )}
    </>
  );
};

export default QuizPage;
