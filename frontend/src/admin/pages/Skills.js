

import { useState, useEffect } from 'react';

const AdminSkills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ title: '', iconUrl: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:10000/sime/api/");
      if (!response.ok) {
        throw new Error('Failed to fetch skills');
      }
      const data = await response.json();
      const skills = await data.skills;
      setSkills(skills);
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
      setSkills(skills.filter(project => project._id !== projectId));
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
        body: JSON.stringify(newSkill)
      });
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
      const newSkillData = await response.json();
      setSkills([...skills, newSkillData]);
      setNewSkill({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p className='text-center text-3xl'>Loading...</p>;
  if (error) return <p className='text-center text-3xl'>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-24 pt-8">
      <h2 className="text-3xl text-center mb-8 text-blue-700 font-bold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills && skills.map(skill=>(
                <div key={skill._id} className="justify-between bg-slate-50 rounded-lg shadow-md p-6 flex items-center"><p className="ml-5">{skill.title}</p>
                    <button onClick={() => handleDeleteProject(skill._id)} className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
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
            value={newSkill.title}
            onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
            className="form-input mt-1 block w-full h-12"
            placeholder="Enter project title"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
            Icon URL:
          </label>
          <input
            id="imageUrl"
            type="text"
            value={newSkill.iconUrl}
            onChange={(e) => setNewSkill({ ...newSkill, iconUrl: e.target.value })}
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

export default AdminSkills;
