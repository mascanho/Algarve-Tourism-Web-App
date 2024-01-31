"use client";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const BookingDrawer = ({ url, title }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        size={"100%"}
        radius="md"
        className="overflow-hidden"
      >
        {/* CONTENT  */}

        <iframe
          src={url}
          width="100%"
          height="800px"
          title={title}
          className="h-[100vh] scrollbar-hide"
        />
      </Drawer>
      <span onClick={open} className="text-sm underline text-gray-700">
        {title}
      </span>
    </>
  );
};

export default BookingDrawer;
