import { FC } from "react";

export const WorkEx: FC = () => {
    return(
        <div className="w-[100%] mt-20 mb-20">
          <span className="text-white text-3xl flex justify-center">
            Work Experience
          </span>
          <div className="flex flex-col gap-4 mt-10">
            <span className="text-white">
              Full-stack Developer at Designare Studio (March 2022 - August 2025)
            </span>
            <span className="text-white">
              As a Full Stack Developer, I design, develop, and maintain
              end-to-end web applications. My responsibilities encompass both
              front-end and back-end development, ensuring seamless user
              experiences and robust server-side functionality. I work with
              various technologies and frameworks, implement responsive designs,
              optimize performance, and integrate third-party services.{" "}
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <span className="text-white">
              Mobile Application Developer Intern (Jul 2021 - Dec 2021)
            </span>
            <span className="text-white">
              Mobile Application Development using MVVM architecture, retrofit
              and Room Persistence library
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <span className="text-white">
              Machine Learning Intern (Apr 2020 - Jul 2020)
            </span>
            <span className="text-white">This internship involved:</span>
            <ul className="text-white list-decimal list-inside">
              <li>
                Similarity measuring between images and videos machine learning
                model.{" "}
              </li>
              <li>
                Sentiment Analysis to identify sentiment of users in social
                media.{" "}
              </li>
              <li>Identifying Image description from image analysis. </li>
            </ul>
          </div>
        </div>
    )
}