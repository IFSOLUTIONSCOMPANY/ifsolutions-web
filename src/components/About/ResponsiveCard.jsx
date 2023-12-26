import aboutData from "./AboutData";

function ResponsiveCard({index}) {
  return (
    <div class="w-96 bg-base-100 ">
      <figure>
        <img
          src={aboutData[index].src}
          alt="Shoes"
          className=" mx-auto rounded-full h-32 w-32 ring ring-4 ring-[#706FE5] ring-offset-base-100"
        />
      </figure>
      <div class="card-body">
        <div className="block text-center max-w-80">
          <h2 className="text-xl font-bold text-gray-600">
            {aboutData[index].date}
          </h2>
          <h3 className="text-gray-500 text-lg">{aboutData[index].title}</h3>
          <p className="text-gray-500 text-xs mt-2">
            {aboutData[index].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCard;
