import React from "react";
import { styles } from "../styles/style";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        what is <span className="text-gradient">Learn BSV?</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure
          aperiam atque maiores beatae aliquam id quibusdam, eius unde incidunt
          rem debitis ipsum tenetur, alias itaque explicabo? Dolorum, quam
          voluptatibus?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure
          aperiam atque maiores beatae aliquam id quibusdam, eius unde incidunt
          rem debitis ipsum tenetur, alias itaque explicabo? Dolorum, quam
          voluptatibus?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure
          aperiam atque maiores beatae aliquam id quibusdam, eius unde incidunt
          rem debitis ipsum tenetur, alias itaque explicabo? Dolorum, quam
          voluptatibus?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure
          aperiam atque maiores beatae aliquam id quibusdam, eius unde incidunt
          rem debitis ipsum tenetur, alias itaque explicabo? Dolorum, quam
          voluptatibus?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure
          aperiam atque maiores beatae aliquam id quibusdam, eius unde incidunt
          rem debitis ipsum tenetur, alias itaque explicabo? Dolorum, quam
          voluptatibus?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure
          aperiam atque maiores beatae aliquam id quibusdam, eius unde incidunt
          rem debitis ipsum tenetur, alias itaque explicabo? Dolorum, quam
          voluptatibus?
        </p>
        <br />
        <span className="font-Cursive text-[22px]">Kumaraguru Ramanujam</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Learn BSV
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
