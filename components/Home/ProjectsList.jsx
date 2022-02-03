import Link from "next/link";

export function ProjectsList({ projectsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
      {projectsData.map((project) => {
        const { id, title, description, route, date } = project;
        return (
          <Link href={route} key={id}>
            <a className="flex flex-col border rounded p-4 bg-white drop-shadow hover:drop-shadow-xl relative">
              <div className="text-lg font-bold">{title}</div>
              <section className="flex flex-col justify-between h-full">
                <div className="mt-4 text-gray-700">{description}</div>
                <div className="text-sm mt-2 text-gray-500">
                  {date.toString()}
                </div>
              </section>
              <div></div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
