// @ts-nocheck
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Contact() {
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2, "Name at last 2 Characters").required(),
      email: yup.string().email().required(),
      message: yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div className="pt-40 mb-12">
      <div className="justify-center w-[80%] grid lg:grid-cols-1 xl:grid-cols-2 mx-auto min-w-[320px]">
        {/* left side  */}
        <div className="mb-12">
          <div className="min-w-[300px] rounded-2xl shadow-xl p-2 mr-6 max-[1440px]:mr-0 bg-gradient-to-r from-gray-200 to-gray-100">
            <a href="#" title="Contact Me">
              <img
                src="./image/handshack.jpg"
                alt="Contact Me"
                className="h-[580px] w-[100%]"
              />
            </a>
            {/* <h1 className="text-3xl font-bold text-[#0652DD] pt-6 mb-2">
              Eyasin Sheikh Rony
            </h1>
            <h1 className="text-lg font-bold text-gray-500 border-b-2 pb-2 border-gray-400">
              Full Stack Web Developer
            </h1>
            <h2 className="text-gray-700 font-medium text-sm mt-4">
              Are You Looking For Your Business Online Presence? I am here.
            </h2>
            <div className="flex flex-col mt-4">
              <h1 className="text-gray-700 font-bold text-xl border-b-2 border-gray-400 w-[32%] mb-1 pb-1">
                Contact With Me
              </h1>
              <a
                href="https://www.facebook.com/EyasinSheikhRony"
                className="flex items-center my-1 font-medium text-base text-gray-600"
                title="Facebook"
                target="_blank">
                <i className="fa-brands fa-facebook text-blue-500 text-xl"></i>
                <span className="ml-2">Eyasin Sheikh Rony</span>
              </a>

              <a
                href="mailto:skrony2573@gmail.com"
                className="flex items-center my-1 font-medium text-base text-gray-600"
                title="Email"
                target="_blank">
                <i class="fa-solid fa-envelope text-purple-500 text-xl"></i>
                <span className="ml-2">skrony2573@gmail.com</span>
              </a>

              <a
                href="https://join.skype.com/invite/vJ24tJSl2PxH"
                className="flex items-center my-1 font-medium text-base text-gray-600"
                title="Skype"
                target="_blank">
                <i class="fa-brands fa-skype text-sky-500 text-2xl"></i>
                <span className="ml-2">live:.cid.481a4c5e1729c82b</span>
              </a>

              <p
                className="flex items-center my-1 font-medium text-base text-gray-600"
                title="WhatsApp">
                <i class="fa-brands fa-whatsapp text-green-500 text-2xl"></i>
                <span className="ml-2">+8801306333764</span>
              </p>
            </div> */}
          </div>
        </div>
        {/* right side  */}
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col min-[1440px]:ml-4 rounded-lg shadow-xl px-20 py-[50px] bg-gradient-to-r from-gray-100 to-gray-50">
            <h1 className="flex justify-center max-[1024px]:text-3xl mb-8 font-extrabold text-5xl bg-gradient-to-r from-orange-400 to-purple-700 text-transparent bg-clip-text">
              Contact Me
            </h1>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold text-xl mr-2 mb-1">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none rounded-md border-[2px] border-gray-600 pl-2 py-1"
                placeholder="Eyasin Sheikh Rony"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.values.name && formik.touched.name && (
                <span className="text-red-600">{formik.errors.name}</span>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="font-bold text-xl mr-2 mb-1">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="outline-none rounded-md border-[2px] border-gray-600 pl-2 py-1"
                placeholder="example@gmail.com"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.values.email && formik.touched.email && (
                <span className="text-red-600">{formik.errors.email}</span>
              )}
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="font-bold text-xl mr-2 mb-2">
                Message
                <span className="text-gray-600 text-sm ml-1">(optional)</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="outline-none rounded-md border-[2px] border-gray-600 pl-2 py-1"
                placeholder="Your Message Here..."
                value={formik.values.message}
                onChange={formik.handleChange}
                cols="30"
                rows="5"></textarea>
              {formik.values.message && formik.touched.message && (
                <span className="text-red-600">{formik.errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              onSubmit={formik.handleSubmit}
              className="flex justify-center w-[100%] mt-12 px-2 py-1 border-2 border-gray-600 outline-none rounded-lg bg-gray-600 font-bold text-xl duration-700 text-white hover:bg-gray-700 hover:border-gray-700">
              Sent Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
