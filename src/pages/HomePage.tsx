import React from "react";
import Carousel from "../components/carousel/Carousel";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4";
import Section5 from "../components/section5/Section5";
import Section6 from "../components/section6/Section6";

export default function Homepage() {
  return (
    <main>
      <div>
        <Carousel />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </main>
  );
}
