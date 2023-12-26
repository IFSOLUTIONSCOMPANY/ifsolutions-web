import Card from "./Card";

function Services() {
  return (
    <div className="mt-24 flex flex-col">
      <h2 className="text-center text-3xl font-bold text-gray-600">
        Nos services
      </h2>
      <div class="h-1 bg-gray-300 w-12 mx-auto my-10"></div>
      <div className="w-4/6 text-center flex mx-auto text-gray-400">
        Découvrez nos prestations incluant la création de sites web sur mesure,
        adaptés à vos besoins d'entreprise, des formations SEO pour optimiser
        votre visibilité en ligne et améliorer le classement de votre site,
        ainsi que des cours informatiques variés pour développer vos compétences
        techniques, de la programmation à la sécurité informatique.
      </div>
      <div className="flex flex-wrap justify-center gap-12 mt-12">
        <Card index={0} className="flex-auto md:flex-initial md:w-1/3" />
        <Card index={1} className="flex-auto md:flex-initial md:w-1/3" />
        <Card index={2} className="flex-auto md:flex-initial md:w-1/3" />
      </div>
    </div>
  );
}

export default Services;
