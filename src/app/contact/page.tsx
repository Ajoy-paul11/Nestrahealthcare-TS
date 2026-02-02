"use client";
import { useState } from "react";
import {
  IconCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconSend,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

interface FormData {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // const sheetAPI =
  //   "https://script.google.com/macros/s/AKfycbzGCI2uo5A8LEtpDJMXO4JuEYQwyigVYUpV1tlaYshRx1GrXIypukJDhUFTHpFw-oQbDQ/exec";

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);

      // const formBody = new URLSearchParams(data as any).toString();

      await fetch("https://api.web3forms.com/submit", {
        // mode: "no-cors",
        // headers: {
          //   "Content-Type": "application/x-www-form-urlencoded",
          // },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      reset();

      toast.success("Message sent successfully!", {
        duration: 5000,
        position: "top-center",
      });
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen ">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Take the <br />
            <span className="">First Step Together</span>
          </h1>
          <p className="lg:text-xl text-emerald-50 max-w-3xl mx-auto">
            We're here to answer your questions and help you find the perfect
            care solution
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className=" py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className=" overflow-hidden">
              <h2 className=" text-2xl lg:text-4xl font-bold  mb-8 text-center">
                Get In Touch
              </h2>
              <p className=" text-sm lg:text-lg mb-12 leading-relaxed">
                Have questions about our services? Want to schedule a visit?
                We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 green-shade-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <IconPhoneCall className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-highlight text-sm lg:text-lg mb-2">
                      Phone
                    </h3>
                    <Link
                      href="tel:+919902368800"
                      className=" text-accent text-sm lg:text-lg"
                    >
                      +91-9902368800
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 green-shade-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <IconMail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-highlight text-sm lg:text-lg mb-2">
                      Email
                    </h3>
                    <Link
                      href="mailto:info@nestrahealthcare.com"
                      className=" text-accent text-sm lg:text-lg"
                    >
                      info@nestrahealthcare.com
                    </Link>
                  </div>
                </div>
                <Link
                  href="https://maps.app.goo.gl/p78Hdj7wVSgkEHFR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 green-shade-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <IconMapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-highlight text-sm lg:text-lg mb-2">
                        Location
                      </h3>
                      <p className=" text-accent text-sm lg:text-lg">
                        Nestra Health Care Private Limited
                        <br />
                        #1201, Shiv Enclave, 26th cross, 5th block, Aswathnagar,
                        HBR Layout, Bengaluru 560043
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-center text-xl lg:text-3xl font-bold text-highlight mb-6">
                  Send us a Message
                </h3>

                {isSubmitting ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconCheck className="text-emerald-600" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Thank You!
                    </h4>
                    <p className="text-gray-700 text-lg">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <input
                      type="hidden"
                      value={process.env.NEXT_PUBLIC_FORM_API_KEY}
                      {...register("access_key")}
                    />
                    <input type="hidden" {...register("subject")} />
                    <input
                      type="hidden"
                      value="Nestra Health Care Website"
                      {...register("from_name")}
                    />
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className=" w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className=" w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder=" Your Mobile Number"
                        required
                        className=" w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number",
                          },
                        })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        placeholder="Tell Us How can we help you..."
                        rows={3}
                        required
                        className="  w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        {...register("message", {
                          required: "Message is required",
                        })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-fit mx-auto bg-[#2F9D94] text-white font-semibold px-4 py-2 rounded-4xl flex items-center justify-center cursor-pointer text-sm md:text-base"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <IconSend className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-2xl lg:text-4xl font-bold text-highlight mb-8 text-center">
            Visit Us
          </h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4413.274159484599!2d77.6281769!3d13.040741099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1713839491a1%3A0x50ca1d716263feb1!2sNestra%20Health%20Care!5e1!3m2!1sen!2sin!4v1767244743309!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2F9D94]/90 to-[#2F9D94]/70 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className=" text-2xl lg:text-4xl font-bold mb-6">
            At Nestra Healthcare, Your Family is Our Family
          </h2>
          <p className="text-sm lg:text-xl text-emerald-50 mb-8">
            Reach out today — we're here to help every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919902368800"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#2F9D94] text-[#2F9D94] hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <IconSend size={24} />
              <span>Call Us Now</span>
            </a>
            <a
              href="mailto:info@nestrahealthcare.com"
              className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white text-white hover:text-[#2F9D94] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 border-2 border-white"
            >
              <IconMail size={24} />
              <span>Send an Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
