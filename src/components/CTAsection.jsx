import { useState } from "react";

function CTAsection() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!re.test(email)) {
      setError("Please add a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="relative top-30 m-5 flex max-w-[850px] flex-col items-center justify-center space-y-3 rounded bg-[#1B2330] p-4 py-8 text-center">
        <h2 className="font-raleway text-[20px] font-bold">
          Get early access today
        </h2>
        <p className="max-w-[650px]">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 md:w-fit md:flex-row md:space-y-0"
        >
          <div className="text-start">
            <input
              className="min-w-[200px] rounded-4xl bg-white px-3 py-2 text-[#1B2330] outline-none md:min-w-[300px]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              placeholder="email@example.com"
            />
            <p className="pt-1 pl-3 text-sm text-red-400 md:text-base">
              {error}
            </p>
          </div>
          <button
            className="max-h-10 cursor-pointer rounded-4xl bg-[#47BED4] px-8 py-2 font-[raleway] font-bold hover:bg-[#8CDBE2] md:ml-4"
            type="submit"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTAsection;
