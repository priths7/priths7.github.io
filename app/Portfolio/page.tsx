// import { GridCard } from "@/components/Cards/GridCard";
import { ProjectCard } from "@/components/Cards/ProjectCard";
import { Navbar } from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";
const Wall = dynamic(() => import('@/components/TextAnimations/Wall'), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <Navbar />
      <Wall />
      <div className="mt-20 w-full container px-4 sm:px-6 md:px-[15px] mx-auto">
        <div className="flex flex-col">
          <span className="text-white text-xl sm:text-2xl md:text-3xl flex justify-center text-center">
            Some projects i have worked on
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

            <ProjectCard
              link="https://deepstory.co/"
              img="./DeepS.png"
              title="Deepstory"
              desc=" As a Full stack Android developer, was responsible to design the
                architecture of the app for a social media app startup and
                develop it solely."
              delay={0.3}
              stacks={["Android", "PostgreSQL", "NodeJs", "GCP"]}
            />

            <ProjectCard 
            link="https://stayleisurely.com/"
            img="./Leisurely.png"
            title="Stay Leisurely"
            desc="Designed and developed a booking service management for a
              startup to book villas."
            delay={0.6}
            stacks={["React", "PostgreSQL", "NodeJs", "GCP"]}
            />

            <ProjectCard
              link="https://lyfsum.com/"
              title="Lyfsum"
              desc=" Designed and developed a robust appointment booking platform for
                patients for a healthcare startup. The system streamlined
                scheduling processes, enabling users to effortlessly find and
                book medical appointments."
              img="./Lyfsum.png"
              delay={0.9}
              stacks={["React", "PostgreSQL", "NodeJs", "GCP"]}
            />
            
          </div>
        </div>
        <div className="flex flex-col mt-20">
          <span className="text-white text-xl sm:text-2xl md:text-3xl flex justify-center text-center">
            Some Personal Projects i have worked on
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4">
            
            <ProjectCard
              img="./generate.png"
              title="Image Generation Model"
              desc="A stable diffusion model to generate images built on pytorch"
              link="https://github.com/priths7/ImageGenerationModel"
              delay={0.3}
              stacks={["Pytorch", "Python"]}
            />
            <ProjectCard
              img="./similar.png"
              title="Similar Image Recommender"
              desc="An image extractor engine which shows how similar an image is to
                other images"
              link="https://github.com/priths7/Similar-Images-Recommender"
              delay={0.6}
              stacks={["Tensorflow", "Python"]}

            />
             <ProjectCard
              img="./define.png"
              title="Image Description Generator"
              desc="A tensorflow based model to find description for a given image"
              link="https://github.com/priths7/Image-Description-Generator"
              delay={0.9}
              stacks={["Tensorflow", "Python"]}
            />

            <ProjectCard
              img="./graph.png"
              title="Motion Detection Graph"
              desc=" A simple motion detection time graph to show duration of face
                detected in camera using python and opencv"
              link="https://github.com/priths7/Motion_detection_graph"
              delay={0.3}
              stacks={["OpenCV", "Python"]}

            />
          </div>
        </div>
      </div>
    </div>
  );
}