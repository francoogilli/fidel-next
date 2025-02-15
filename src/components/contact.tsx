"use client";

import { Formik, Form } from "formik";
import MailIcon from "../icons/email";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";
import * as Yup from "yup";
import { useState } from "react";
import UsersIconIndividual from "../icons/user";
import PhoneIcon from "../icons/phone";
import MessageIcon from "../icons/message";
import { ModalScheduleMeet } from "./modalScheduleMeet";
import { Contact } from "@/api/types";
import { createHubSpotContact } from "@/api/hubspot";
import CheckToast from "@/icons/checkToast";
import Exclamation from "@/icons/exclamation";
import ExclamationError from "@/icons/exclamationError";
interface Props {
  viewPage?: boolean;
}

const validationSchema = Yup.object({
  firstname: Yup.string().required("El nombre es requerido"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  phone: Yup.string().required("El teléfono es requerido"),
  text: Yup.string().required("El mensaje es requerido"),
});

export default function ContactSection({ viewPage }: Props) {
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<"success" | "warning" | "error">(
    "success"
  );

  const [values] = useState<Contact>({
    firstname: "",
    email: "",
    phone: "",
    publicidad: "Reel Joa",
    text: "",
  });
  const handleSubmit = async (
    values: Contact,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { firstname, email, phone, publicidad } = values;
    try {
      const result = await createHubSpotContact({
        firstname,
        email,
        phone,
        publicidad,
      });
      if (result.success) {
        setToastType("success");
        setToastMessage("Tu mensaje se ha enviado correctamente.");
        resetForm();
      } else {
        setToastType("warning");
        setToastMessage(result.message || "Hubo un error");
        resetForm();
      }
    } catch (error: unknown) {
      setToastType("error");

      if (error instanceof Error) {
        setToastMessage(error.message);
      } else {
        setToastMessage("Ha ocurrido un error desconocido.");
      }
    }

    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 7000);
  };

  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-16 xl:mb-28 mx-auto px-4 md:px-3">
      {toastVisible && (
        <div
          className={`flex fixed shadow-xl top-0 right-0 m-4 flex-grow flex-row w-[27rem] py-3 px-4 gap-x-1 rounded-[20px] items-center ${
            toastType === "success"
              ? "text-[#1ee474] bg-[#02140A]"
              : toastType === "warning"
              ? "text-[#ffffff] bg-[#000C19]"
              : "text-[#f54141] bg-[#180202]"
          } z-50`}
        >
          <div
            className={`flex-none relative ml-1 size-[3rem] rounded-full grid place-items-center ${
              toastType === "success"
                ? "bg-[#095028] border border-[#166438]"
                : toastType === "warning"
                ? "bg-[#27272A] border border-[#49494d]"
                : "bg-[#610707] border border-[#751d1d]"
            } shadow-sm`}
          >
            {toastType === "success" && (
              <CheckToast className="fill-current size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
            {toastType === "warning" && (
              <Exclamation className="fill-current size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
            {toastType === "error" && (
              <ExclamationError className="fill-current size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>
          <div className="flex flex-col h-full min-h-14 ms-2 flex-grow justify-center items-start">
            <div className="text-base pl-2 font-sans w-full font-medium leading-5 text-inherit">
              {toastMessage}
            </div>
          </div>
        </div>
      )}

      {!viewPage ? (
        <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
          <GradientLine weight="1.5px" direction="left" />
          <ThreeStripesLeft />
          <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
            <MailIcon className="size-4 md:size-5 text-[#121212]" />
            <h2
              className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Contacto
            </h2>
          </div>
          <ThreeStripesRight />
          <GradientLine weight="1.5px" direction="right" />
        </div>
      ) : (
        <div className="pt-10"></div>
      )}

      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className=" text-black font-sans flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start py-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl  xl:text-[3.25rem] font-bold leading-tight">
                    Pregunta todo lo que tengas en mente
                  </h1>
                  <p className="text-[#5c5c5c] text-lg">
                    Si tiene preguntas o está listo para hablar sobre su
                    negocio, estamos aquí para ayudarlo. Comuníquese con
                    nosotros hoy mismo.
                  </p>
                </div>

                <div className="space-y-4 ">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="var(--token-8c14519b-b926-46e8-8772-9a05cbede172, rgba(255, 255, 255, 0.7))"
                      className="select-none size-6 inline-block fill-[rgba(33,33,33,0.7)] text-[rgba(28,28,28,0.7)] flex-shrink-0"
                    >
                      <g color="var(--token-8c14519b-b926-46e8-8772-9a05cbede172, rgba(255, 255, 255, 0.7))">
                        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                      </g>
                    </svg>
                    <a
                      href="mailto:admin@fidel.com"
                      className="text-zinc-600 hover:text-[#B5B3AD]"
                    >
                      admin@fidel.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="var(--token-8c14519b-b926-46e8-8772-9a05cbede172, rgba(255, 255, 255, 0.7))"
                      className="select-none size-6 inline-block fill-[rgba(33,33,33,0.7)] text-[rgba(28,28,28,0.7)] flex-shrink-0"
                    >
                      <g color="var(--token-8c14519b-b926-46e8-8772-9a05cbede172, rgba(255, 255, 255, 0.7))">
                        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                      </g>
                    </svg>
                    <a
                      href="tel:(969)819-8061"
                      className="text-zinc-600 hover:text-[#B5B3AD]"
                    >
                      (969) 819-8061
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="var(--token-8c14519b-b926-46e8-8772-9a05cbede172, rgba(255, 255, 255, 0.7))"
                      className="select-none size-6 inline-block fill-[rgba(33,33,33,0.7)] text-[rgba(28,28,28,0.7)] flex-shrink-0"
                    >
                      <g color="var(--token-8c14519b-b926-46e8-8772-9a05cbede172, rgba(255, 255, 255, 0.7))">
                        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                      </g>
                    </svg>
                    <span className="text-zinc-600 hover:text-[#B5B3AD]">
                      43 Roselle St. Nueva York
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <ModalScheduleMeet />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-xs xl:text-sm font-medium mb-2.5">
                    Nombre y Apellido
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <UsersIconIndividual
                        className="size-[1.1rem] text-[#A0A0A0]"
                        strokeWidth="2"
                      />
                      <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#ffffff] border border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                      placeholder="Nombre y Apellido"
                    />
                  </div>
                  {errors.firstname && touched.firstname && (
                    <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                      {errors.firstname}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-xs xl:text-sm font-medium mb-2.5">
                    Email
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <MailIcon
                        className="size-[1.1rem] text-[#A0A0A0]"
                        strokeWidth="2"
                      />
                      <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#ffffff] border border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="nombre@correo.com"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-xs xl:text-sm font-medium mb-2.5">
                    Telefono
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <PhoneIcon
                        className="size-[1.1rem] text-[#A0A0A0]"
                        strokeWidth="2"
                      />
                      <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#ffffff] border border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      placeholder="Numero de telefono"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-xs xl:text-sm font-medium mb-2.5">
                    Contanos sobre tu negocio
                  </label>
                  <div className="relative w-full">
                    <div className="absolute pt-[.9375rem] left-3 flex items-center">
                      <MessageIcon
                        className="size-3 md:size-4 text-[#A0A0A0]"
                        strokeWidth="2.2"
                      />
                      <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                    </div>
                    <textarea
                      rows={1}
                      className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                      name="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                      placeholder="Hola, quisiera saber más sobre..."
                    />
                  </div>
                  {errors.publicidad && touched.publicidad && (
                    <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                      {errors.publicidad}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="group flex justify-center items-center bg-[#d2fac9] hover:bg-[#87fa6d] w-full text-[#000000] text-sm xl:text-base font-semibold rounded-xl px-5 py-3.5 transition-colors duration-500"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
