import React from "react";
import bgBanner from "/assets/images/banner/bg-banner.png";
import rightImage from "/assets/images/banner/right-img.png";
import VideoModal from "./VideoModal";

function Banner() {
  return (
    <div
      className="flex flex-col md:flex-row"
      style={{
        backgroundImage: `url(${bgBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-2/3 mb-10">
        <div className="flex flex-col text-center">
          <div className="font-bold text-5xl text-gray-600 mt-20 drop-shadow-md">
            <span className="text-[#706FE5]">I</span>&
            <span className="text-[#706FE5]">F</span> SOLUTIONS
          </div>
          <div className="font-bold text-5xl text-gray-600 mt-5 drop-shadow-md">
            Votre Allié <span className="text-[#706FE5]">Numérique</span>
          </div>
          <div className="text-gray-700 md:w-2/3 w-5/6 mx-auto mt-5">
            Offrant création de sites web, formations SEO et partage d'expertise
            technologique, nous sommes votre allié pour une présence digitale
            réussie et une maîtrise approfondie des outils numériques.
          </div>
          <div className="flex justify-center space-x-10 mt-10">
            <button className="bg-[#706FE5] text-white px-8 py-2 rounded-xl text-sm shadow-md btn hover:bg-[#706FE5]/80 border-0">
              Contact Us
            </button>
            <div className="flex items-center">
                <i onClick={() => document.getElementById("my_modal_4").showModal()} className="btn border-0 fa-solid fa-play text-[#706FE5] px-5 bg-[#706FE5]/20 hover:bg-[#706FE5] hover:text-white transition-all rounded-full text-xs shadow-md cursor-pointer"></i>
                <div className="ml-3 flex flex-col text-left space-y-1">
                    <span className="text-gray-950 text-xs font-medium">Watch our</span>
                    <span className="text-gray-950 text-xs font-medium">introduction video</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex items-center justify-center mx-auto text-center">
        <img src={rightImage} alt="right-img" className="md:w-full md:h-auto h-64 mt-8 md:mt-0" />
      </div>
      <VideoModal />
    </div>
  );
}

export default Banner;
