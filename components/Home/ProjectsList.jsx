import Link from "next/link";

export function ProjectsList({ projectsData }) {
  return (
    <div className="flex flex-col">
      {projectsData.map((project) => {
        const { id, title, description, route, date } = project;
        return (
          <Link href={route} key={id}>
            <a className="flex flex-col border rounded p-4 bg-white drop-shadow hover:drop-shadow-xl relative">
              <div className="text-lg font-bold">{title}</div>
              <div className="mt-4 text-gray-700">{description}</div>
              <div className="text-sm mt-2 text-gray-500">
                {date.toString()}
              </div>
              <div></div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
