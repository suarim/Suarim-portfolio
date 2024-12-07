import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      As a passionate third-year undergraduate student specializing in Data Science, I am
      deeply committed to exploring and gaining experience in the dynamic fields of
      Artificial Intelligence, Machine Learning, and DevOps. My enthusiasm for these
      cutting-edge domains drives me to not only utilize my skills but also to bridge the gap
      between theoretical understanding and real-world application through hands-on
      projects. I am dedicated to continuous learning, with a focus on staying abreast of
      the latest advancements, and am eager to contribute to the integration of AI/ML
      with DevOps practices. My goal is to foster innovation, improve efficiencies, and
      develop scalable solutions that address complex challenges in these rapidly evolving
      fields.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,'about');
