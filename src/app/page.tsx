import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <h3 className="text-3xl md:text-2xl font-semibold">Coming Soon</h3>
      <h1 className="text-4xl sm:text-5xl font-semibold">UWT Reading</h1>
      <p className="font-semibold text-center ">Your dedicated online Enligh Literature Classes</p>
      <h2 className="text-[1.6rem] lg:text-4xl font-semibold">Courses currently offered</h2>
      <p className="text-center ">
        The site is currently under construction. For more information taking
        our courses, please contact Alex at alexande@uwtwriting.com
      </p>
    </main>
  );
}
