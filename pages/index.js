import { useState } from "react";
import { Layout } from "../components/common";
import { ProjectsList, InputField } from "../components/Home";
import projectsData from "../data/projects.data.js";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const filteredProjectsData = getFilteredData(searchText, projectsData);

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <InputField searchText={searchText} setSearchText={setSearchText} />
        <ProjectsList projectsData={filteredProjectsData} />
      </div>
    </Layout>
  );
}

function getFilteredData(searchText, projectsData) {
  if (searchText === "") {
    return projectsData;
  } else {
    return projectsData.filter((project) => {
      if (
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText)
      ) {
        return true;
      }
      return false;
    });
  }
}
