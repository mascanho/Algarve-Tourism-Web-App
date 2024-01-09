import { useWindowSize } from "react-use";

const Demo = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};
