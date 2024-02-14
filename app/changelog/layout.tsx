export default function MDXLayout({ children }: any) {
  return (
    <section className="changelog text-black w-11/12 mx-auto sm:pt-10 space-y-4 max-w-7xl">
      {children}
    </section>
  );
}
