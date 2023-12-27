export default function Card({ imageUrl, name, role, position, linkedInUrl }) {
  return (
    <div class="card">
      <figure className="p-5">
        <img
          src={imageUrl}
          alt="Team member photo"
          class="rounded-full shadow-md h-48 ring ring-[#706FE5] ring-offset-base-100 ring-offset-4"
        />
      </figure>
      <div class="card-body w-full flex justify-center items-center text-center -mt-7">
        <h2 class="card-title ">{name}</h2>
        <h3 class="card-title text-black/60 text-lg">{position}</h3>
        <p className="text-black/60 text-md">{role}</p>
        <div class="card-actions justify-center">
          <a href={linkedInUrl} target="_blank" class=""><i class="fa-brands fa-linkedin fa-xl mt-3"></i> </a>
        </div>
      </div>
    </div>
  );
}
