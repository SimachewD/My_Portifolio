


const About = () => {
    return (
        <div className="container mx-auto pt-8" id="about">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-12">
                <h2 className="text-center text-2xl font-semibold mb-4">About Me</h2>
                <div className="flex items-center mb-4 border-b-2 rounded-s-lg p-3 ">
                    <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Profile" />
                    <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <p className="text-gray-600">Frontend Developer</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Personal Statement</h4>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Objective</h4>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Communication</h4>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Leadership</h4>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>

            </div>
        </div>
    );
}

export default About;
