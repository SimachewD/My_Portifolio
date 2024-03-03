import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";


function App() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 md:gap-4 bg-slate-50 ">
      <div className="sticky shadow-2xl top-0 md:row-span-2 md:col-span-1"><Navbar /></div>
      <div className="md:ml-4 md:col-span-3">
        <div><Home /></div>
        <div><About /></div>
        <div><Skills /></div>
        <div><Contact /></div>
      </div>
      <div className="col-span-3"><Footer /></div>
    </div>
  );
}

export default App;
