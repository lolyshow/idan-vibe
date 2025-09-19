"use client";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import emailjs from "emailjs-com";

export default function SubscribeForm() {
  const formHandler = (event) => {
    event.preventDefault();
	emailjs.sendForm(
		process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
		event.target,
		process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
	  )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          event.target.reset(); // clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };
  return (
    <form className="w-full max-w-[35rem] lg:w-10/12" onSubmit={formHandler}>
      <div className="text-white">
        <label className="lock text-sm font-medium leading-6" htmlFor="email">
          Your email
        </label>
        <input
          className="block w-full bg-gray-800 rounded-md border-0 p-2.5 text-white shadow-sm ring-1 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-black sm:leading-0 text-xs"
          type="text"
          name="name"
          id="name"
        />

        <input
          className="block w-full bg-gray-800 rounded-md border-0 p-2.5 text-white shadow-sm ring-1 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-black sm:leading-0 text-xs"
          type="hidden"
          name="message"
          id="name"
		  value={"I will like to Subscribe to recieving updates from you please."}
        />
      </div>
      <div className="flex mt-3 lg:justify-end">
        <ButtonPrimary>Subscribe</ButtonPrimary>
      </div>
    </form>
  );
}
