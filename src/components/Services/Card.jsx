import data from "./Data";

function Card({index, title}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <figure className="px-10 pt-10">
        <img
          src={data[index].src}
          alt="Shoes"
          className="h-28 w-auto mx-auto"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-gray-700">{data[index].title}</h2>
        <p className="text-gray-500 mt-5">{data[index].description}</p>
      </div>
    </div>
  );
}

export default Card;