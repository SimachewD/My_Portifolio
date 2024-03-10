import { useEffect, useState } from 'react';
import profilePic from '../../img/profile.jpg';

const AdminDashboard = () => {
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const countData = async () => {
    try {
      const response = await fetch("http://localhost:10000/sime/api/");
      if (response.ok) {
        const data = await response.json();
        setTotalData(data);
      } else {
          setError("Failed to fetch data");
      }
    } catch (error) {
        setError("Failed to fetch data:::::>>>>>>>" + error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    countData();
  }, []);

  const handleEditProfile = () => {
    // Handle profile editing functionality here
  };

  if (loading) return <p className='text-center text-3xl'>Loading...</p>;
  if (error) return <p className='text-center text-3xl'>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-8">
        <div className="ml-60">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome, Admin!</p>
        </div>
        <div className="flex items-center mr-32">
          <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <button onClick={handleEditProfile} className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Edit
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Projects</h2>
            <p className="text-xl">{totalData.projects.length}</p>
          </div>
          <div className="bg-green-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Skills</h2>
            <p className="text-xl">{totalData.skills.length}</p>
          </div>
          <div className="bg-yellow-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Messages</h2>
            <p className="text-xl">{totalData.messages.length}</p>
          </div>
          <div className="bg-pink-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">About Me</h2>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
