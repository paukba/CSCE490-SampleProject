
import { useState } from "react";

function AddProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    researcher: "",
    department: "",
    description: "",
    details: "",
    status: "In Progress"
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.researcher.trim() ||
      !formData.department.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onAddProject({
      ...formData,
      title: formData.title.trim(),
      researcher: formData.researcher.trim(),
      department: formData.department.trim(),
      description: formData.description.trim(),
      details: formData.details.trim(),
      id: crypto.randomUUID()
    });

    setFormData({
      title: "",
      researcher: "",
      department: "",
      description: "",
      details: "",
      status: "In Progress"
    });
  }

  return (
    <form className="add-project-form" onSubmit={handleSubmit}>
      <h2>Add Research Project</h2>

      <label htmlFor="project-title">Project Title</label>
      <input
        id="project-title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="project-researcher">Researcher</label>
      <input
        id="project-researcher"
        type="text"
        name="researcher"
        value={formData.researcher}
        onChange={handleChange}
        required
      />

      <label htmlFor="project-department">Department</label>
      <input
        id="project-department"
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <label htmlFor="project-description">Short Description</label>
      <textarea
        id="project-description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label htmlFor="project-details">Detailed Description</label>
      <textarea
        id="project-details"
        name="details"
        value={formData.details}
        onChange={handleChange}
      />

      <label htmlFor="project-status">Project Status</label>
      <select
        id="project-status"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="In Progress">In Progress</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit" className="add-project-button">
        Add Research Project
      </button>
    </form>
  );
}

export default AddProjectForm;
