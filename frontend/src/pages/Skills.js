import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="container mx-auto pt-8" id="skills">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-12">
                <h2 className="text-center text-2xl font-bold mb-4">Skills & Abilities</h2>
                <ul className="list-disc pl-4">
                    <li>Java</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>PHP</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>SQL</li>
                    <li>Git</li>
                    <li>jQuery</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                </ul>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-slate-50 rounded-lg shadow-md p-6 flex items-center"><FaHtml5 className="w-8 h-8"/><p className="ml-5">HTML5</p></div>
                        <div className="bg-slate-50 rounded-lg shadow-md p-6 flex items-center"><FaCss3 className="w-8 h-8"/><p className="ml-5">HTML5</p></div>
                        <div className="bg-slate-50 rounded-lg shadow-md p-6 flex items-center"><FaNodeJs className="w-8 h-8"/><p className="ml-5">HTML5</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
