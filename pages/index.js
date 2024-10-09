import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section
        id="about"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          ***** About *****
          <p>
            About my self How I`m ? my name is Ghulam Rauf Khan & I`m a Software
            Engineer.i`m also study nextjs & tailwind css from Governor House
            Sindh IT initiative program.
          </p>
        </h1>
      </section>
      <section id="blog" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>

      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{" "}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
    </div>
  );
}
