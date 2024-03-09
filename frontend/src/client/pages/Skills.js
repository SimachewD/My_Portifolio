import { useEffect, useState } from "react";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";

const Skills = () => {


    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const response = await fetch("http://localhost:10000/sime/api/");
            const json = await response.json();

            if (response.ok) {
                const skillsData = json.skills;
                setSkills(skillsData);
            } else {
                console.error("Failed to fetch projects:", json);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);


    return (
        <div className="container mx-auto pt-8" id="skills">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-12">
                <h2 className="text-center text-2xl font-bold mb-8 text-blue-700">Skills & Abilities</h2>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skills && skills.map(skill=>(
                            <div key={skill._id} className="bg-slate-50 rounded-lg shadow-md p-6 flex items-center"><FaHtml5 className="w-8 h-8"/><p className="ml-5">{skill.title}</p></div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;
