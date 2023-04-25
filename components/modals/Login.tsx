import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction: () => void;
  secondaryLabel?: string;
}

function LoginModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="absolute">
        <Modal opened={opened} onClose={close} title="Authentication" centered>
          {/* Modal content */}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
            iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dolore quam fugiat, culpa illum officiis! Quae, voluptas ducimus?
            Nobis dolor repudiandae soluta dignissimos modi id ex cupiditate
            tempore, vitae odit minus voluptatum velit provident veniam quasi
            molestias est consequuntur atque error, enim eligendi nostrum
            repellendus distinctio. Architecto, quae ut, deleniti nostrum
            debitis explicabo voluptate dolorem, nihil quisquam libero qui
            possimus veritatis quas dolor in ipsa repellendus voluptatum nobis
            odit iure aut necessitatibus molestias iste? Natus consequuntur id
            inventore magnam delectus soluta ad iste debitis hic corporis nulla
            nihil quaerat veritatis pariatur illo doloremque rem, nemo iusto
            vero laborum! Porro facilis dolorem rem incidunt dolores
            exercitationem consequatur ut? Saepe voluptates voluptatum esse
            earum enim ea molestiae! Voluptates esse fugit ex totam et
            architecto deleniti voluptatem illum sint, distinctio adipisci
            voluptatibus itaque iure est expedita deserunt similique sunt iste
            hic sequi nemo aperiam voluptas repudiandae maiores! Voluptas odit
            rem reiciendis, vel minus maxime in sed distinctio tempora velit
            fuga ducimus ea, dolorum quidem libero, sequi explicabo iste? Nulla,
            aperiam doloremque dolores quidem natus amet maxime atque architecto
            delectus nemo molestiae impedit a sapiente quas nam cumque
            perferendis quia harum. Sint, illum dolores ipsa, inventore
            dignissimos sequi deleniti necessitatibus incidunt nam velit
            corporis.
          </p>
        </Modal>

        <Group position="center">
          <Button onClick={open}>Open centered Modal</Button>
        </Group>
      </section>
    </>
  );
}

export default LoginModal;
