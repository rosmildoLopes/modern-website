import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* To do */}
    <div className="absolute w-[60%] h-[60%] z-0 -right-1/2 rounded-full blue__gradient"/>

    <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
      <h2 className={styles.heading2}>
        What people are <br className="hidden sm:block" />
        saying about us
      </h2>
      <div className="w-full mt-6 md:mt-0">
        <p className={`text-left max-w-[450px] ${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
);

export default Testimonials;
