

const Home = () => {
    return ( 
        <div class="container mx-auto rounded-lg shadow-lg sm:px-12 px-4 py-24 bg-white min-h-screen flex flex-col" id="home" >
            <section class="text-center">
                <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p class="text-lg text-gray-700">I am a passionate developer ready to take on new challenges.</p>
            </section>

            <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
                <div class="bg-white rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">Project 1</h3>
                    <p class="text-gray-700">This is a description of Project 1.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">Project 2</h3>
                    <p class="text-gray-700">This is a description of Project 2.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">Project 3</h3>
                    <p class="text-gray-700">This is a description of Project 3.</p>
                </div>
            </section>

            <section class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Contact Me</h2>
                <p class="text-gray-700">Feel free to get in touch with me.</p>
                <div class="mt-4">
                    <a href="#contact" class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Contact</a>
                </div>
            </section>
        </div>

    );
}
 
export default Home;