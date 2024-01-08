"use client";
import { useRegisteredModalStore } from "@/app/hooks/useLoginModal";
import RegisteredModal from "@/components/modals/Registered";
import { Button } from "@mantine/core";
import React from "react";

const LoginButton = () => {
  const registeredModal = useRegisteredModalStore();

  return (
    <Button
      variant="outline"
      radius="sm"
      size="md"
      onClick={() => {
        registeredModal.onOpen();
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
