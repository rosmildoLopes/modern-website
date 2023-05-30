import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={` ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col
    rounded-[20px] bg-black-gradient-2 box-shadow `}>
    <div className="flex flex-col flex-1">
      <h2 className={` ${styles.heading2}`}>Let's try our service now</h2>
      <h2 className={` ${styles.paragraph} mt-5 max-w-[470px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </h2>
    </div>
    <div className={` ${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0mt-10`}> 
      <Button />
    </div>
  </section>
);

export default CTA;
