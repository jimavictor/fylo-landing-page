import heroImage from "../assets/images/illustration-intro.png";

function HeroSection () {
  return (
    <section className="mb-25 flex w-full flex-col items-center p-6">
      <div className="max-w-xl">
        <img src={heroImage} alt="Hero image" />
      </div>
      <div className="mb-6 max-w-xl space-y-7 text-center">
        <h1 className="text-3xl font-bold">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-base">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <button className="cursor-pointer rounded-3xl bg-blue-400 px-13 py-2 hover:bg-blue-300">
        Get Started
      </button>
    </section>
  );
};
export default HeroSection;