// Use client only for Next.js pages
// import { useClient } from "react-query/client";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, rem } from "@mantine/core";

function AffixScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  console.log(scroll, "this is the scroll");

  return (
    <>
      <Affix
        position={{ bottom: 350, right: 50 }}
        className="hidden sm:block opacity-70"
      >
        <Transition
          transition="slide-up"
          mounted={scroll.y !== undefined && scroll.y > 7300}
        >
          {(transitionStyles: React.CSSProperties) => (
            <Button
              className="bg-sky"
              // leftSection={
              //   <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              // }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default AffixScrollToTop;
