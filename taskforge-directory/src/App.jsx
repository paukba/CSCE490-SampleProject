// Main interface, contains elements similar to HTML

import { useState } from "react"
import { initialProjects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import AddProjectForm from "./components/AddProjectForm";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const departments = ["All",
    ...new Set(projects.map((project) => project.department))
  ];

  const filteredProjects = projects.filter((project) => {
    const searchTerm = search.toLowerCase().trim();

    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm) ||
      project.department.toLowerCase().includes(searchTerm) ||
      project.researcher.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm);

    const matchesDepartment =
      selectedDepartment === "All" ||
      project.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  function handleAddProject(newProject) {
    setProjects((currentProjects) => [...currentProjects, newProject]);
    setSearch("");
    setSelectedDepartment("All");
  }
  
  return (
    <div className="app">
      <header>
        <h1>TaskForge Research Directory</h1>
        <p>Explore university research projects.</p>
      </header>

      <main>
        <h2>Research Projects</h2>
      <input
        type="text"
        placeholder="Search research projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-container">
        <label htmlFor="department-filter">
          Filter by Department:
        </label>

        <select
          id="department-filter"
          value={selectedDepartment}
          onChange={(event) =>
            setSelectedDepartment(event.target.value)
          }
        >
          {departments.map((department) => (
            <option key={department} value={department}>
              {department === "All"
                ? "All Departments"
                : department}
            </option>
          ))}
        </select>
      </div>

      <p>{filteredProjects.length} projects found</p>

        <div className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <AddProjectForm onAddProject={handleAddProject} />
      </main>
    </div>
  );
}

export default App;
