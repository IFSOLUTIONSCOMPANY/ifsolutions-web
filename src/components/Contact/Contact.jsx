import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyyrgryb");

  function refreshPage() {
    window.location.reload(false);
  }

  if (state.succeeded) {
    return (
      <div role="alert" className="alert bg-gray-500/10 shadow-lg mt-12">
        <i class="fa-solid fa-circle-info text-[#706FE5]"></i>
        <span className="text-sm text-black/80">Thanks for your message, we'll get back to you shortly.<br /> If you want to send another message, please refresh the page.</span>
        <div>
          <button onClick={refreshPage} className="btn btn-md btn-primary bg-[#706FE5] hover:bg-[#706FE5]/80 border-0 shadow-md text-white">Refresh</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mx-auto p-5 mt-24"
      style={{
        backgroundImage: `url("/assets/images/contact/bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="text-center mb-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
          Contact
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Get In <span className="text-[#706FE5]">Touch</span>
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
        {/* Première partie du formulaire - Noms */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Champ Prénom */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 border border-gray-200 text-gray-700 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="firstName"
              placeholder="Jane"
            />
          </div>
          {/* Champ Nom */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="lastName"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Adresse e-mail */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              name="email"
              placeholder="********@*****.**"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Your Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              name="message"
              rows="10"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>

        {/* Bouton d'envoi */}
        <div className="flex justify-between w-full px-3 mt-5">
          <button
            className="shadow bg-[#706FE5] hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 rounded-xl"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
