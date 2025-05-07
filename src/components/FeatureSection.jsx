import accessAnywhereImage from "../assets/images/icon-access-anywhere.svg";
import securityImage from "../assets/images/icon-security.svg";
import collaborationImage from "../assets/images/icon-collaboration.svg";
import anyFileImage from "../assets/images/icon-any-file.svg";

function FeatureSection() {
  return (
    <section className="mb-25 flex justify-center">
      <div className="grid w-4/5 grid-cols-[repeat(auto-fit,_320px)] place-content-center gap-20">
        <div className="max-w-90 text-center">
          <div className="flex justify-center">
            <img src={accessAnywhereImage} alt="icon-access-anywhere" />
          </div>
          <h2 className="font-bold mb-2 mt-7">Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="max-w-90 text-center">
          <div className="flex justify-center">
            <img className="h-[78px]" src={securityImage} alt="icon-security" />
          </div>
          <h2 className="font-bold mb-2 mt-7">Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="max-w-90 text-center">
          <div className="flex justify-center">
            <img  src={collaborationImage} alt="icon-collaboration" />
          </div>
          <h2 className="font-bold mb-2 mt-7">Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="max-w-90 text-center">
          <div className="flex justify-center">
            <img className="h-[71px]" src={anyFileImage} alt="icon-any-file" />
          </div>
          <h2 className="font-bold mb-2 mt-7">Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
