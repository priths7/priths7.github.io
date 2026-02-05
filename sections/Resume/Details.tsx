import { FC } from "react";

export const Details: FC = () => {
  return (
    <div className="flex flex-col justify-center gap-20 md:gap-40">
      <div className="flex flex-col gap-4">
        <div className="flex gap-6 flex-col md:flex-row-reverse mt-4">
          <img
            src="https://storage.googleapis.com/designare-prod/about/prithvi.png"
            className="w-full md:w-[40%]"
          />
          <div className="flex flex-col gap-8">
            <span className="text text-white text-lg md:text-xl">
              Few words about myself
            </span>
            <span className="text-white text-sm md:text-md">
              Three-year veteran full-stack developer with a solid background in computer science. 
              ready to develop and showcase innovative digital experiences. 
              a lengthy history of using Python, React, Node.js, and PostgreSQL to design and develop scalable cloud-based solutions. 
              able to optimise performance, design APIs, and implement distributed architecture. 
              capable of using machine learning for practical analytics and forecasting tasks. 
              devoted to creating dependable, data-driven platforms that improve security and user experience.
            </span>
            <span className="text-white text-2xl md:text-3xl mt-30 flex justify-center">
              Things i am good at
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              <div className="flex flex-col items-center gap-4">
                <img src="./code.svg" className="w-[50px] md:w-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Programming Languages</span>
                <span className="text-white text-center text-xs md:text-sm">
                  Python, Kotlin, Java, Typescript, Javascript , MATLAB and R
                  Programming.
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="./Database.svg" className="w-[50px] md:w-[60px]" />
                <span className="text-white text-center text-sm md:text-base">RDBMS</span>
                <span className="text-white text-center text-xs md:text-sm">
                  Postgresql, MySQL
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="./Cloud.svg" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Cloud Services</span>
                <span className="text-white text-center text-xs md:text-sm">Google Cloud</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="./Mobile.svg" className="w-[50px] md:w-[60px]" />
                <span className="text-white text-center text-sm md:text-base">
                  Mobile Technologies
                </span>
                <span className="text-white text-center text-xs md:text-sm">
                  Android, React-Native
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="./Web_code.svg" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Web Technologies</span>
                <span className="text-white text-center text-xs md:text-sm">
                  React, HTML & CSS, TailwindCSS, GSAP, Wordpress
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="./DevicesCode.svg" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
                <span className="text-white text-center text-sm md:text-base">Backend Services</span>
                <span className="text-white text-center text-xs md:text-sm">
                  Nodejs, firebase, typeorm, express js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};