import { FC } from "react";

export const Details: FC = () => {
  return (
    <section className="flex w-full max-w-6xl flex-col justify-center gap-16 md:gap-28">
      <div className="flex flex-col gap-4">
        <div className="mt-4 flex flex-col gap-8 md:flex-row-reverse md:items-start">
          <img
            src="https://storage.googleapis.com/designare-prod/about/prithvi.png"
            alt="Prithvi Chakravarthy"
            className="mx-auto w-full max-w-sm rounded-lg object-cover md:w-[40%] md:max-w-none"
          />
          <div className="flex min-w-0 flex-col gap-6 md:gap-8">
            <span className="text-lg text-white md:text-xl">
              Few words about myself
            </span>
            <span className="text-sm leading-7 text-white md:text-base">
              Three-year veteran full-stack developer with a solid background in computer science. 
              ready to develop and showcase innovative digital experiences. 
              a lengthy history of using Python, React, Node.js, and PostgreSQL to design and develop scalable cloud-based solutions. 
              able to optimise performance, design APIs, and implement distributed architecture. 
              capable of using machine learning for practical analytics and forecasting tasks. 
              devoted to creating dependable, data-driven platforms that improve security and user experience.
            </span>
            <span className="mt-8 flex justify-center text-center text-2xl text-white md:text-3xl">
              Things i am good at
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              <div className="flex flex-col items-center gap-4">
                <img src="/code.svg" alt="" className="w-[50px] md:w-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Programming Languages</span>
                <span className="text-white text-center text-xs md:text-sm">
                  Rust, Scala, Python, Kotlin, Java, Typescript, Javascript , MATLAB and R
                  Programming.
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="/Database.svg" alt="" className="w-[50px] md:w-[60px]" />
                <span className="text-white text-center text-sm md:text-base">RDBMS</span>
                <span className="text-white text-center text-xs md:text-sm">
                  Postgresql, MySQL
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="/Cloud.svg" alt="" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Cloud Services</span>
                <span className="text-white text-center text-xs md:text-sm">Google Cloud</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="/Mobile.svg" alt="" className="w-[50px] md:w-[60px]" />
                <span className="text-white text-center text-sm md:text-base">
                  Mobile Technologies
                </span>
                <span className="text-white text-center text-xs md:text-sm">
                  Android, React-Native
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="/Web_code.svg" alt="" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Web Technologies</span>
                <span className="text-white text-center text-xs md:text-sm">
                  React, HTML & CSS, TailwindCSS, GSAP, Wordpress
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="/DevicesCode.svg" alt="" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Backend Services</span>
                <span className="text-white text-center text-xs md:text-sm">
                  Nodejs, firebase, typeorm, express js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
