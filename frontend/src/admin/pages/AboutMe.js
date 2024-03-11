import { useState, useEffect } from 'react';

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editForms, setEditForms] = useState({});

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const response = await fetch("http://localhost:10000/sime/api");
      if (!response.ok) {
        throw new Error('Failed to fetch about sections');
      }
      const data = await response.json();
      const abouts = await data.about;
      const about = abouts[0];
      setAboutMe(about);
      // Initialize editForms state
      const initialEditForms = {};
      Object.keys(about).forEach(key => {
        initialEditForms[key] = false;
      });
      setEditForms(initialEditForms);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleEditForm = (key) => {
    setEditForms(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const handleFormSubmit = async (key) => {
    try {
      const response = await fetch(`http://localhost:10000/sime/api/about/${key}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [key]: aboutMe[key] }),
      });
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      toggleEditForm(key);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) return <p className='text-center text-3xl'>Loading...</p>;
  if (error) return <p className='text-center text-3xl'>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-24 pt-8">
      {Object.keys(aboutMe).map(key => (
        key !== '_id' && key !== '__v' && (
          <div key={key} className="bg-white rounded-lg overflow-hidden shadow-md mb-4 md:mx-auto md:w-2/3">
            <div className="px-6 py-4">
              <h2 className="text-3xl text-center mb-12 text-blue-700 font-bold">{key}</h2>
              {editForms[key] ? (
                <form className="text-center" onSubmit={(e) => { e.preventDefault(); handleFormSubmit(key); }}>
                  <textarea 
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" 
                    rows="5"
                    value={aboutMe[key]}
                    onChange={(e) => setAboutMe({...aboutMe, [key]: e.target.value})}
                  />
                  <div className="mt-4 flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Save
                    </button>
                    <button type="button" onClick={() => toggleEditForm(key)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2">
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between'>
                  <p className="text-center lg:text-left text-gray-700 text-base mb-4 lg:mb-0">{aboutMe[key]}</p>
                  <button onClick={() => toggleEditForm(key)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 lg:mt-0">
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default AboutMe;
