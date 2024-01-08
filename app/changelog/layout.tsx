export default function MDXLayout({ children }: any) {
  return (
    <section className="changelog text-black w-11/12 mx-auto space-y-4 max-w-7xl">
      {children}
    </section>
  );
}
