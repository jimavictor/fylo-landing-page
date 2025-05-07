import productivityIllustration from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";

function ProductivitySection() {
  return (
    <section className="mb-25 justify-center md:flex">
      <div className="max-w-5xl items-center md:flex">
        <div className="mb-2 max-w-2xl px-5">
          <img
            src={productivityIllustration}
            alt="illustration-stay-productive"
          />
        </div>
        <div className="space-y-3 px-5">
          <h2 className="text-[17px] font-bold md:w-90 md:text-3xl">
            Stay productive, wherever you are
          </h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <span className="CTA border-b-2 border-blue-200 pb-1 hover:border-white">
            <a className="text-cyan-300" href="#">
              See how Fylo works
              <img
                className="inline-block pl-1.5"
                src={arrowIcon}
                alt="icon-arrow"
              />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
export default ProductivitySection;
