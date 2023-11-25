import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import data from "../data.json";
import { Quizzes, Quiz } from "../types";
import QuizPage from "./components/QuizPage";

function App() {
  const quizzes: Quizzes = data.quizzes;
  const [quizData, setQuizData] = useState<Quiz>({
    title: "",
    icon: "",
    iconbg: "",
    questions: [],
  });
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    () => (localStorage.getItem("themeMode") as "light" | "dark") || "light",
  );

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const handleThemeMode = () => {
    setThemeMode((prevThemeMode) =>
      prevThemeMode === "light" ? "dark" : "light",
    );
  };

  return (
    <>
      <Navbar
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        handleThemeMode={handleThemeMode}
        title={quizData.title}
        icon={quizData.icon}
        iconbg={quizData.iconbg}
      />
      <Routes>
        <Route
          path="/"
          element={<Home quizzes={quizzes} setQuizData={setQuizData} />}
        />
        <Route path="/quiz" element={<QuizPage quizData={quizData} />} />
      </Routes>
    </>
  );
}

export default App;
