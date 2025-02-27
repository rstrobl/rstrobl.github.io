"use client";

import { useForm } from '@formspree/react';

export default function ClientsSection() {
  const [state, handleSubmit] = useForm("mldeplgr");
  if (state.succeeded) {
      return (
        <section id="contact">
          <div className="bg-primary full-width md:m-0 md:w-full text-white">
            <h2>Thank You!</h2>
            <p className="text-white">
            Thanks for getting in touch! I will get back to you as soon as possible.
            </p>
          </div>
        </section>
      );
  }
  return (
    <section id="contact" className="bg-primary-light full-width md:w-full md:flex md:flex-row md:justify-center">
      <div className="full-width full-inline md:w-3/4">
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" className="h-[150px]" placeholder="Your Message" required></textarea>
          <br />
          <button type="submit" className="btn-primary light" disabled={state.submitting}>Send Message</button>

          <div className="text-center">or</div>

          <a className="btn-primary" href="https://calendly.com/robertstrobl/30mins">Book an Appointment</a>

        </form>
      </div>
    </section>
  );
}