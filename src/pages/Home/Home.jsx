import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

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
