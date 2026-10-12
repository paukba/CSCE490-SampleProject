
import { useState } from "react";

function ProjectCard({
  project,
  onDeleteProject,
  onEditProject
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({ ...project });

  function handleChange(event) {
    const { name, value } = event.target;

    setEditData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  function handleSave(event) {
    event.preventDefault();

    if (
      !editData.title.trim() ||
      !editData.researcher.trim() ||
      !editData.department.trim() ||
      !editData.description.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onEditProject({
      ...editData,
      title: editData.title.trim(),
      researcher: editData.researcher.trim(),
      department: editData.department.trim(),
      description: editData.description.trim(),
      details: editData.details.trim()
    });

    setIsEditing(false);
  }

  function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.title}"?`
    );

    if (confirmed) {
      onDeleteProject(project.id);
    }
  }

  function startEditing() {
    setEditData({ ...project });
    setIsEditing(true);
  }

  function cancelEditing() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <form className="project-card edit-project-form" onSubmit={handleSave}>
        <h3>Edit Research Project</h3>

        <label htmlFor={`title-${project.id}`}>Project Title</label>
        <input
          id={`title-${project.id}`}
          name="title"
          value={editData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor={`researcher-${project.id}`}>Researcher</label>
        <input
          id={`researcher-${project.id}`}
          name="researcher"
          value={editData.researcher}
          onChange={handleChange}
          required
        />

        <label htmlFor={`department-${project.id}`}>Department</label>
        <input
          id={`department-${project.id}`}
          name="department"
          value={editData.department}
          onChange={handleChange}
          required
        />

        <label htmlFor={`description-${project.id}`}>
          Short Description
        </label>
        <textarea
          id={`description-${project.id}`}
          name="description"
          value={editData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor={`details-${project.id}`}>
          Detailed Description
        </label>
        <textarea
          id={`details-${project.id}`}
          name="details"
          value={editData.details ?? ""}
          onChange={handleChange}
        />

        <label htmlFor={`status-${project.id}`}>Status</label>
        <select
          id={`status-${project.id}`}
          name="status"
          value={editData.status ?? "In Progress"}
          onChange={handleChange}
        >
          <option value="In Progress">In Progress</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>

        <div className="project-actions">
          <button type="submit" className="save-button">
            Save Changes
          </button>

          <button
            type="button"
            className="cancel-button"
            onClick={cancelEditing}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

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

      <div className="project-actions">
        <button
          type="button"
          className="details-button"
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        <button
          type="button"
          className="edit-button"
          onClick={startEditing}
        >
          Edit Project
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          Delete Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
