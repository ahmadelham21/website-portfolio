import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function Home() {
  const [requestBody, requestBodySet] = useState({
    name: "Ahmad Ilham",
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default Home;
