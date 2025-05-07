import Profile1 from "../assets/images/profile-1.jpg";
import Profile2 from "../assets/images/profile-2.jpg";
import Profile3 from "../assets/images/profile-3.jpg";
import bgQuotes from "../assets/images/bg-quotes.png";

function TestimonialSection() {
  return (
    <section className="flex flex-col items-center space-y-10 px-5 md:flex-row md:justify-center md:items-baseline md:space-x-9">
        <div className="relative max-w-100 rounded bg-[#21293C] p-4">
          <img
            className="absolute top-[-30px] left-0 md:left-[-10px] md:top-[-35px] z-[-1]"
            src={bgQuotes}
            alt="quotes-icon"
          />
          <p className="pb-3">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex items-center">
            <img className="w-12 rounded-full pr-2" src={Profile1} alt="" />
            <span>
              <h2 className="font-bold">Satish Patel</h2>
              <p>Founder & CEO, Huddle</p>
            </span>
          </div>
        </div>
        <div className="max-w-100 rounded bg-[#21293C] p-4">
          <p className="pb-3">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex items-center">
            <img className="w-12 rounded-full pr-2" src={Profile2} alt="" />
            <span>
              <h2 className="font-bold">Bruce McKenzie</h2>
              <p>Founder & CEO, Huddle</p>
            </span>
          </div>
        </div>
        <div className="max-w-100 rounded bg-[#21293C] p-4">
          <p className="pb-3">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex items-center">
            <img className="w-12 rounded-full pr-2" src={Profile3} alt="" />
            <span>
              <h2 className="font-bold">Iva Boyd</h2>
              <p>Founder & CEO, Huddle</p>
            </span>
          </div>
        </div>
    </section>
  );
}

export default TestimonialSection;
