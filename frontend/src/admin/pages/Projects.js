

import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:10000/sime/api/");
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      const projects = await data.projects;
      setProjects(projects);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await fetch(`http://localhost:10000/sime/api/projects/${projectId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      setProjects(projects.filter(project => project._id !== projectId));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddProject = async () => {
    try {
      const response = await fetch(`http://localhost:10000/sime/api/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
      });
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
      const newProjectData = await response.json();
      setProjects([...projects, newProjectData]);
      setNewProject({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p className='text-center text-3xl'>Loading...</p>;
  if (error) return <p className='text-center text-3xl'>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-24 pt-8">
      <h2 className="text-3xl text-center mb-8 text-blue-700 font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project._id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover object-center" src={project.imageUrl} alt={project.title} />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="px-6 py-4">
              <button onClick={() => handleDeleteProject(project._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl text-center mt-8 mb-4">Add New Project</h2>
      <form onSubmit={handleAddProject} className="max-w-3xl mx-auto p-24 border-8 mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="form-input mt-1 block w-full h-12"
            placeholder="Enter project title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="form-textarea mt-1 block w-full"
            rows="3"
            placeholder="Enter project description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL:
          </label>
          <input
            id="imageUrl"
            type="text"
            value={newProject.imageUrl}
            onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
            className="form-input mt-1 block w-full h-12"
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default Projects;
