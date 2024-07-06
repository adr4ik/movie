import React from "react";
import Carousel from "../components/carousel/Carousel";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";

export default function Homepage() {
  return (
    <main>
      <div>
        <Carousel />
        <Section2 />
        <Section3 />
      </div>
    </main>
  );
}
