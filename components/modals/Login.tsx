import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import {
  useForm,
  SubmitHandler,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useLoginModalStore from "@/app/hooks/useLoginModal";
import axios from "axios";
import Toaster from "../Toastify";
import { signIn } from "next-auth/react";

function LoginModal(): any {
  const [type, toggle] = useToggle(["login", "register"]);

  const [opened, { open, close }] = useDisclosure(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const closeModal = useLoginModalStore();

  // Form Hanbdling

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        // toast.success('Registered!');
        // registerModal.onClose();
        // loginModal.onOpen();
        console.log("Registered!");
      })
      .catch((error) => {
        // toast.error(error);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="absolute top-0 left-0 z-50 w-full h-full bg-black/80 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
        <div className="relative p-8 space-y-2 text-center text-black bg-white rounded-lg w-96 sm:w-[500px]  animate-jump-in animate-delay-100 animate-once ">
          <AiFillCloseCircle
            className="absolute text-base cursor-pointer top-4 right-4"
            onClick={closeModal.onClose}
          />
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-sm text-gray-400">Please enter your details</p>
          <div className="flex items-center justify-center pt-2 space-x-4">
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
          <div className="pt-8 divider">OR</div>

          <div className="pt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="" className="pb-1 text-xs text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="p-2 bg-transparent bg-gray-300 border rounded-md"
                  placeholder="Enter Your Name"
                  required
                  {...register("name")}
                />
                {errors.firstName && <span>This field is required</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pb-1 text-xs text-left">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="p-2 bg-transparent bg-gray-300 border rounded-md"
                  placeholder="Enter Your Email"
                  required
                  {...register("email")}
                />
                {errors.firstName && <span>This field is required</span>}
              </div>

              <div className="flex flex-col pb-6">
                <label htmlFor="" className="pb-1 text-xs text-left">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="p-2 bg-transparent bg-gray-300 border rounded-sm"
                  placeholder="Enter Your Password"
                  required
                  {...register("password")}
                />
                {errors.firstName && <span>This field is required</span>}
              </div>

              <button
                className="flex items-center justify-center w-full py-4 text-base text-white rounded-md bg-sky"
                type="submit"
              >
                Submit
              </button>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginModal;
