import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 m,b-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex items-center justify-start flex-row m-3 sm:items-center sm:mx-auto ss:mt-6`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
