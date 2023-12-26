import data from "./Data";

function Card({index, title}) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl mt-16">
      <figure className="">
        <img
          src={data[index].src}
          alt="Shoes"
          className="h-24 w-auto mx-auto"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-gray-700 text-lg md:text-lg h-32 -mt-8">{data[index].title}</h2>
        <p className="text-gray-500 mt-5 text-xs md:text-sm">{data[index].description}</p>
      </div>
    </div>
  );
}

export default Card;