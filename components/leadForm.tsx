"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

import { RxCross1 } from "react-icons/rx";
import { IconSend } from "@tabler/icons-react";

interface FormData {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface LeadFormProps {
  setOpenLeadForm: React.Dispatch<React.SetStateAction<boolean>>;
}
function LeadForm({ setOpenLeadForm }: LeadFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // const sheetAPI =
  //   "https://script.google.com/macros/s/AKfycbzGCI2uo5A8LEtpDJMXO4JuEYQwyigVYUpV1tlaYshRx1GrXIypukJDhUFTHpFw-oQbDQ/exec";

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      console.log(data);

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
      setOpenLeadForm(false);

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
    <section className=" relative w-full h-screen flex justify-end items-center backdrop-blur-xs z-100">
      <div className=" blue-shade-bg absolute bottom-1 border-1 rounded-3xl w-[70vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] p-4 m-2 md:m-6 pt-12">
        <div className=" green-shade-bg p-1 rounded-2xl absolute right-2 top-2 cursor-pointer">
          <RxCross1
            className="h-4 w-4 text-white float-right cursor-pointer"
            onClick={() => setOpenLeadForm(false)}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
          <div className="grid grid-cols-1 gap-3 text-sm lg:text-base">
            <input
              type="text"
              placeholder="Your Name"
              required
              className=" bg-[#F7f6F2] p-1.5 md:p-2  rounded-2xl outline-none "
              {...register("name", {
                required: "Name is required",
              })}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className=" bg-[#F7f6F2] p-1.5 md:p-2 rounded-2xl outline-none "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <input
              type="tel"
              placeholder=" Your Mobile Number"
              required
              className=" bg-[#F7f6F2] p-1.5 md:p-2 rounded-2xl outline-none "
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            <textarea
              placeholder="Your Message"
              rows={2}
              required
              className=" bg-[#F7f6F2] p-1.5 md:p-2 rounded-2xl outline-none"
              {...register("message", {
                required: "Message is required",
              })}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit mx-auto bg-[#2F9D94] text-white font-semibold px-3 py-1.5 rounded-4xl flex items-center justify-center cursor-pointer text-xs md:text-sm"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <IconSend className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LeadForm;
