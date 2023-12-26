import ListItem from "./ListItem";
import ResponsiveCard from "./ResponsiveCard";

function About() {
  return (
    <div className="mt-44">
      <h2 className="text-center text-3xl font-bold text-gray-600">
        À PROPOS DE NOUS{" "}
        <i class="text-[#706FE5] fa-solid fa-calendar ml-2"></i>
      </h2>
      <p className="text-center text-gray-400 mt-5 text-xs md:text-sm">
        De passionnés indépendants à entrepreneurs, découvrez notre chemin vers
        la création d'une entreprise innovante.
      </p>
      <ul className="timeline timeline-vertical md:block hidden mt-10">
        <ListItem index={0} />
        <ListItem index={1} />
        <ListItem index={2} />
        <ListItem index={3} />
        <ListItem index={4} />
      </ul>
      <div className="md:hidden flex flex-col justify-center items-center space-y-16 mt-10">
        <ResponsiveCard index={0} />
        <ResponsiveCard index={1} />
        <ResponsiveCard index={2} />
        <ResponsiveCard index={3} />
      </div>
    </div>
  );
}

export default About;
