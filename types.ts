export type Quiz = {
  title: string;
  icon: string;
  iconbg: string;
  questions?: { question: string; options: String[]; answer: string }[];
};

export type Quizzes = Quiz[];
