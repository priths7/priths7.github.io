// import { GridCard } from "@/components/Cards/GridCard";
import { ProjectCard } from "@/components/Cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Page() {
  const professional = projects.filter((p) => p.type === "professional");
  const personal = projects.filter((p) => p.type === "personal");
  return (
    <div className="min-h-screen bg-cover bg-center">
      <main className="container mx-auto mt-10 w-full px-4 pb-20 sm:mt-16 sm:px-6 md:px-[15px]">
        <div className="flex flex-col">
          <span className="flex justify-center text-center text-xl text-white sm:text-2xl md:text-3xl">
            Some projects i have worked on
          </span>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {professional.map((project, i) => (
              <ProjectCard
                key={project.slug}
                link={project.link}
                linkLabel={project.linkLabel}
                img={project.img}
                title={project.title}
                desc={project.shortDesc}
                sourceNote={project.sourceNote}
                delay={(i + 1) * 0.3}
                stacks={project.stacks}
                slug={project.slug}
                youtubeLink={project.youtubeLink}
                repoStatus={project.repoStatus}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col sm:mt-20">
          <span className="flex justify-center text-center text-xl text-white sm:text-2xl md:text-3xl">
            Some Personal Projects i have worked on
          </span>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {personal.map((project, i) => (
              <ProjectCard
                key={project.slug}
                img={project.img}
                title={project.title}
                desc={project.shortDesc}
                link={project.link}
                linkLabel={project.linkLabel}
                sourceNote={project.sourceNote}
                delay={(i + 1) * 0.3}
                stacks={project.stacks}
                slug={project.slug}
                youtubeLink={project.youtubeLink}
                repoStatus={project.repoStatus}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}