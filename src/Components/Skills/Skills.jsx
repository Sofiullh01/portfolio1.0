import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div id="skills" className=" my-16 md:mx-4 mx-8 font-poppins">
      <div className="text-center text-gray-400 mb-8">
        <h3 className="text-lg font-bold text-custom-500 mb-3 text-gradient-to-r from-[#DD00FF] to-[#9000FF] uppercase">
          my skills
        </h3>
        <p className=" text-lg lg:w-1/2 mx-auto text-gray-400 ">
          Skills Here are some of my skills on which I have been working on for
          the past 2 years.
        </p>
      </div>
      <div className="flex  flex-col justify-around items-center gap-5 md:flex-row">
        <div className="shadow-xl bg-gray-900 rounded-lg p-8 mx-4">
          <h3 className="text-center text-gray-400 text-3xl font-bold mb-2">
            Front-End
          </h3>
          <p className="text-center text-gray-400">
            With this technology, <br /> I create amazingly user-friendly
            websites!
          </p>
          <SkillsCard skillName="HTML" percentage="95" />
          <SkillsCard skillName="CSS" percentage="90" />
          <SkillsCard skillName="JavaScript" percentage="80" />
          <SkillsCard skillName="React" percentage="80" />
        </div>
        <div className="shadow-xl bg-gray-900 rounded-lg p-8">
          <h3 className="text-center text-gray-400 text-3xl font-bold mb-2">
            Back-End
          </h3>
          <p className="text-center text-gray-400">
          With this technology, <br /> I create amazing user-security
            websites!
          </p>
          <SkillsCard skillName="Node.js" percentage="70" />
          <SkillsCard skillName="Express.js" percentage="50" />
          <SkillsCard skillName="Mongodb" percentage="50" />
          <SkillsCard skillName="Firebase" percentage="70" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 ">
        <div className=" w-96  shadow-xl bg-gray-900 rounded-lg p-8">
          <h3 className="text-center text-gray-400 text-3xl font-bold mb-2">
            Others
          </h3>
          <p className="text-center text-gray-400">
            Generally, I feel like comfortable <br /> with this technology ||
            applications .
          </p>
          <SkillsCard skillName="Tailwind CSS" percentage="90" />
          <SkillsCard skillName="Git/GitHub" percentage="80" />
          <SkillsCard skillName="Figma" percentage="50" />
          <SkillsCard skillName="Vercel" percentage="70" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
