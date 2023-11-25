type ScorePageProps = {
  score: number;
  title: string;
  icon: string;
  iconbg: string;
  numberOfQuestions: number;
};

const ScorePage = ({
  title,
  icon,
  iconbg,
  score,
  numberOfQuestions,
}: ScorePageProps) => {
  return (
    <section className="mt-8 px-6 sm:px-16 xl:mt-0 xl:flex xl:px-0">
      <div className="xl:w-1/2">
        <h2 className="text-[40px] font-extralight leading-none sm:text-[64px]">
          Quiz completed
        </h2>
        <h3 className="text-[40px] font-medium leading-snug sm:text-[64px]">
          You scored...
        </h3>
      </div>
      <div className="xl:w-1/2 xl:space-y-8">
        <section className="mb-3 mt-10 flex flex-col items-center rounded-xl bg-white p-8 drop-shadow-sm dark:bg-navy sm:p-12 xl:mb-0 xl:mt-0 xl:w-[564px]">
          <div className="flex h-[72px] items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14"
                style={{ backgroundColor: iconbg }}
              >
                <img
                  src={icon}
                  alt={title}
                  className="h-7 w-7 sm:h-10 sm:w-10"
                />
              </div>
              <h1 className="text-[18px] font-medium sm:text-[28px]">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[88px] font-medium sm:text-[144px]">{score}</h4>
            <h5 className="text-lg font-light dark:text-lightBluish sm:text-2xl">
              out of {numberOfQuestions}
            </h5>
          </div>
        </section>
        <button
          className="hover:bg-btnHover h-14 w-full rounded-xl bg-purple py-2 text-[18px] font-medium text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px] xl:w-[564px]"
          onClick={() => (window.location.href = "/")}
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default ScorePage;
