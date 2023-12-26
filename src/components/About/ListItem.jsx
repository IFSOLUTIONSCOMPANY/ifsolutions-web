import aboutData from "./AboutData";

function ListItem({ index }) {
  // Check if index is pair or impair

  return (
    <>
      {(index != 4) & (index % 2 === 0) ? (
        <li className="h-64">
          {index === 0 ? null : <hr className="bg-[#706FE5]" />}
          <div className="timeline-start timeline-box border-0 shadow-none">
            <div className="block text-right max-w-72 mr-7">
              <h2 className="text-xl font-bold text-gray-600">
                {aboutData[index].date}
              </h2>
              <h3 className="text-gray-500 text-lg">
                {aboutData[index].title}
              </h3>
              <p className="text-gray-500 text-xs mt-2">
                {aboutData[index].description}
              </p>
            </div>
          </div>

          <div className="timeline-middle">
            <img
              src={aboutData[index].src}
              alt="macintosh"
              className="w-32 h-32 object-cover rounded-full ring ring-4 ring-[#706FE5] ring-offset-base-100"
            />
          </div>
          <hr className="bg-[#706FE5]" />
        </li>
      ) : null}

      {(index != 4) & (index % 2 === 1) ? (
        <li className="h-64">
          <hr className="bg-[#706FE5]" />
          <div className="timeline-middle">
            <img
              src={aboutData[index].src}
              alt="macintosh"
              className="w-32 h-32 object-cover rounded-full ring ring-4 ring-[#706FE5] ring-offset-base-100 "
            />
          </div>
          <div className="timeline-end timeline-box border-0 shadow-none ml-7">
            <div className="block text-left max-w-72">
              <h2 className="text-xl font-bold text-gray-600">
                {aboutData[index].date}
              </h2>
              <h3 className="text-gray-500 text-lg">
                {aboutData[index].title}
              </h3>
              <p className="text-gray-500 text-xs mt-2">
                {aboutData[index].description}
              </p>
            </div>
          </div>
          <hr className="bg-[#706FE5]" />
        </li>
      ) : null}

      {index == 4 ? (
        <li className="h-64">
          <hr className="bg-[#706FE5]" />
          <div className="timeline-middle">
            <h2 className="text-sm  font-semibold text-white rounded-full shadow-lg bg-[#706FE5] p-5">
              {aboutData[index].title}
            </h2>
          </div>
          
        </li>
      ) : null}
    </>
  );
}

export default ListItem;
