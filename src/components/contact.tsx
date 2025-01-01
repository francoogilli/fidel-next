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
  publicidad: Yup.string().required("El mensaje es requerido"),
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
    publicidad: "",
  });
  const handleSubmit = async (values: Contact) => {
    try {
      const result = await createHubSpotContact({ ...values });
      if (result.success) {
        setToastType("success");
        setToastMessage("Tu mensaje se ha enviado correctamente.");
      } else {
        setToastType("warning");
        setToastMessage(result.message || "Hubo un error");
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
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
      {toastVisible && (
        <div
          className={`flex fixed shadow-xl top-0 right-0 m-4 flex-grow flex-row w-[27rem] py-3 px-4 gap-x-1 rounded-[20px] items-center ${
            toastType === "success"
              ? "text-[#1ee474] bg-[#02140A]"
              : toastType === "warning"
              ? "text-[#66AAF9] bg-[#000C19]"
              : "text-[#f54141] bg-[#180202]"
          } z-50`}
        >
          <div
            className={`flex-none relative ml-1 size-[3rem] rounded-full grid place-items-center ${
              toastType === "success"
                ? "bg-[#095028] border border-[#166438]"
                : toastType === "warning"
                ? "bg-[#002E62] border border-[#21538c]"
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
          <div className="flex items-center rounded-full bg-[#333333] px-4 xl:px-5 py-2 animation-1">
            <MailIcon className="size-4 md:size-5 text-[#f5f5f5]" />
            <h2
              className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
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
      <h3 className="font-sans animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-3 md:my-8 pb-1 tracking-tight">
        ¿Tenes preguntas?
        <span className="font-instrument italic text-4xl md:text-[3.25rem] xl:text-[3.5rem] tracking-wide">
          {" "}
          Contáctanos
        </span>
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[45rem] xl:w-[50rem] mx-auto pb-0 md:pb-4"
        style={{ fontFamily: "Satoshi" }}
      >
        <span className="hidden md:inline">
          ¿Tenes alguna duda sobre el sistema o queres consultar algo en
          general?
        </span>{" "}
        Completa el formulario y te respondemos en un plazo de 2 días hábiles.
      </h4>

      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col mx-auto max-w-[45rem] xl:max-w-[52rem] pt-7 justify-center gap-y-5 px-4">
            <div className="flex justify-center">
              <ModalScheduleMeet />
            </div>
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
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
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
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
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
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
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
                  rows={4}
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                  name="publicidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.publicidad}
                  placeholder="Hola, quisiera saber más sobre..."
                />
              </div>
              {errors.publicidad && touched.publicidad && (
                <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                  {errors.publicidad}
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="group flex justify-center items-center bg-[#abff98] hover:bg-[#87fa6d] w-full text-[#000000] text-sm xl:text-base font-semibold rounded-xl px-5 py-3.5 transition-colors duration-500"
              >
                Enviar mensaje
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
