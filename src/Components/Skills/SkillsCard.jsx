const SkillsCard = ({skillName, percentage}) => {
  return (
    <div className=" sm:w-1/2 md:w-full lg:w-1/4 xl:w-full py-2">
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-semibold inline-block text-white ">
                    {skillName}
                  </span>
                </div>
                <div className="relative">
                  <span className="text-xs font-semibold inline-block text-gray-600 " >
                    {percentage}%
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className=" w-full bg-gray-200 rounded-full mr-2">
                  <div
                    className="h-2 bg-gradient-to-r from-[#DD00FF] to-[#9000FF] rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default SkillsCard;
