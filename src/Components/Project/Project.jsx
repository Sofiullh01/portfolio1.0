import resIgm from "../../assets/project111.png";
import drgIgm from "../../assets/project222.png";
import assIgm from "../../assets/project333.png";
import sociIgm from "../../assets/project444.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="project" className="">
      <div className="text-center text-gray-400 mb-3">
        <h3 className="text-lg font-bold text-custom-500 mb-3 text-gradient-to-r from-[#DD00FF] to-[#9000FF] uppercase">
          my recent Project
        </h3>
        <p className=" text-lg lg:w-1/2 mx-auto text-gray-400 ">
          Skills Here are some of my skills on which I have been working on for
          the past 2 years.
        </p>
      </div>
      <div className="mb-10 flex md:flex-row flex-col justify-around items-center">
        <ProjectCard
          proImg={assIgm}
          title="Students assignments"
          text="Through this website teachers can create assignments for students and students can submit assignments."
          live="https://brief-zoo.surge.sh/"
          code="https://github.com/Sofiullh01/assignment-network"
        />
        <ProjectCard
          proImg={sociIgm}
          title="Sociol Media"
          text="We will usually post on this website.  One can also like and share comments on each other's posts."
          live="https://email-pass-project-b7e9f.web.app/"
          code="https://github.com/Sofiullh01/social-site-client"
        />
      </div>
      <div className="mb-16 flex md:flex-row flex-col justify-around items-center">
        <ProjectCard
          proImg={drgIgm}
          title="Online News System"
          text="There is something different about this website compared to other online news sites. "
          live="https://brief-zoo"
          code="https://github.com/Sofiullh01/react-dragon-news-auth"
        />
        <ProjectCard
          proImg={resIgm}
          title="Restaurant Management Website."
          text="You can manage all restaurant activities, including order payment, on this website."
          live="https://email-pass-project-b7e9f.web.app/"
          code="https://github.com/Sofiullh01/BISTRO-BOSS"
        />
      </div>
    </div>
  );
};

export default Project;
