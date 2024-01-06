import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import {
  useForm,
  SubmitHandler,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcClearFilters, FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import axios from "axios";
import Toaster from "../Toastify";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { compileMailTemplate, sendMail } from "@/libs/NodeMailer";
import { registerEmailTemplate } from "@/libs/MailTemplate";

function LoginModal({ currenUser }: any) {
  const [type, toggle] = useToggle(["login", "register"]);

  const [opened, { open, close }] = useDisclosure(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const closeModal = useLoginModalStore();

  const registeredModal = useRegisteredModalStore();

  // Form Hanbdling

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    const sendTheEmail = async (message: any) => {
      if (!message || message === null) {
        await sendMail({
          to: data.email,
          subject: "Welcome to Algarve Wonders 🎊",
          body: registerEmailTemplate(data.email, data.password),
          name: "Algarve Wonders",
          bcc: "mascanho@sapo.pt",
        });
      }
    };

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("You Have Been Registered!");
        sendTheEmail(null);
      })
      .catch((error) => {
        toast.error(error.message);
        sendTheEmail(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        closeModal.onClose();
        // registeredModal.onOpen();
      });
  };

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-full bg-black/30 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
        <div className="relative p-8 space-y-2 text-center text-black bg-white rounded-lg w-[85%] sm:w-[500px]  animate-jump-in animate-delay-100 animate-once ">
          <AiFillCloseCircle
            className="absolute text-base cursor-pointer top-4 right-4"
            onClick={closeModal.onClose}
          />
          <h2 className="text-2xl font-bold">Register</h2>
          <p className="text-sm text-gray-400">
            Please enter your details to create an account
          </p>

          <div className="pt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="" className="pb-1 text-xs text-left">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="p-2 bg-transparent bg-gray-300 border rounded-md"
                  placeholder="Enter Your Email"
                  {...register("email")}
                  required
                />
              </div>

              <div className="flex flex-col pb-4">
                <label htmlFor="" className="pb-1 text-xs text-left">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="p-2 bg-transparent bg-gray-300 border rqounded-sm"
                  placeholder="Enter Your Password"
                  {...register("password")}
                  required
                />
              </div>

              <button
                className="flex items-center justify-center w-full py-4 pb-4 text-base text-white rounded-md bg-sky"
                type="submit"
              >
                Submit
              </button>
              <section className="pt-1">
                <div className="py-2  divider">OR</div>
              </section>
            </form>
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-sm text-gray-400">
              You can login using your social accounts
            </p>
            <div className="flex items-center justify-center pt-6 pb-4 space-x-4">
              <button
                onClick={() => signIn("google")}
                className="flex items-center justify-center w-full px-3 py-2 border rounded-md "
              >
                <FcGoogle className="mr-2" />
                Google
              </button>
              <button
                onClick={() => signIn("github")}
                className="flex items-center justify-center w-full px-3 py-2 border rounded-md "
              >
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginModal;
