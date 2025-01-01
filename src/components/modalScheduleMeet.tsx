import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, type AnimationProps, motion } from "framer-motion";
import CalendarIcon from "../icons/calendar";

// Variants para las animaciones con framer-motion
const variants: { [key: string]: AnimationProps } = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: [0.19, 1, 0.22, 1], duration: 0.4 },
  },
  content: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { ease: [0.19, 1, 0.22, 1], duration: 0.4 },
  },
};

export const ModalScheduleMeet: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="group flex justify-center items-center bg-[#007bffb9] hover:bg-[#2872c2] text-white text-sm xl:text-base font-semibold rounded-2xl px-4 py-3 transition-colors duration-500">
        Agendar Reunión
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <AnimatePresence mode="popLayout">
          {open && (
            <Dialog.Overlay className="fixed top-0 left-0 h-full w-full">
              <motion.div
                className="fixed inset-0 bg-[#11111152]"
                {...variants.overlay}
              />
            </Dialog.Overlay>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {open && (
            <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[600px] xl:max-w-[670px]">
              <motion.div
                className="flex-col overflow-hidden rounded-3xl  border border-gray-3 bg-[#ffffff] sm:w-[600px] xl:w-[670px]"
                {...variants.content}
              >
                <Dialog.Title className="text-lg xl:text-xl text-center flex justify-center gap-x-2 items-center font-semibold my-4">
                  <CalendarIcon
                    className="size-5 text-[#2b2b2b]"
                    strokeWidth="2.2"
                  />
                  Agendar una Reunión
                </Dialog.Title>
                <iframe
                  src="https://calendly.com/francogilli10/reunion-de-30-minutos?locale=es"
                  width="100%"
                  height="600px"
                  className="xl:h-[700px]"
                  frameBorder="0"
                  title="Calendly Embed"
                ></iframe>
              </motion.div>
            </Dialog.Content>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
