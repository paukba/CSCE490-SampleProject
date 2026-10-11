
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>

      <p>
        <strong>Researcher:</strong> {project.researcher}
      </p>

      <p>
        <strong>Department:</strong> {project.department}
      </p>

      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
