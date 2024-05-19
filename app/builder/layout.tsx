import BuilderHeader from "./components/header";

const BuilderLayout = ({ children }: any) => {
  return (
    <div className="relative min-h-screen">
      <BuilderHeader />
      {children}
    </div>
  );
};

export default BuilderLayout;
