import { useEffect } from "react";
import { useState } from "react";

const Hero = () => {
  const [heroimg, setheroimg] = useState("");
  const [herotxt, setherotxt] = useState("")
  useEffect(() => {
    fetch("http://localhost:4000/hero")
      .then((response) => response.json())
      .then((data) => {
        console.log("i Hero")
        setheroimg(data.image);
        setherotxt(data.headline)
      });
  }, []);
  return (
    <section className="hero">
      <img src={heroimg} alt="" />
      <p className="headline">{herotxt}</p>
    </section>
  );
};

export default Hero;
