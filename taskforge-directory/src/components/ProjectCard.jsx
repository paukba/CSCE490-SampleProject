
import { useState } from "react";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

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

      {showDetails && (
        <div className="project-details">
          <h3>Project Details</h3>

          <p>{project.details}</p>

          <p>
            <strong>Status:</strong> {project.status}
          </p>
        </div>
      )}

      <button
        type="button"
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
        aria-expanded={showDetails}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
}

export default ProjectCard;
