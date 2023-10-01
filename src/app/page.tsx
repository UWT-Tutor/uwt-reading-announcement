import Image from "next/image";
import contents from "./contents/page.json";
import Link from "next/link";

export default function Home() {
  const content = contents;
  return (
    <main>
      <div className="flex items-center w-full py-14 bg-slate-100">
        <h3 className="text-5xl md:text-6xl font-semibold my-14 mx-auto">
          Coming Soon
        </h3>
      </div>

      <div className="flex flex-col items-center py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          {content.title}
        </h1>
        <p className="text-2xl sm:text-xl font-semibold text-center mt-3 text-muted-foreground">
          {content.subTitle}
        </p>
        <h2 className="text-[2.2rem] mt-10 mb-6">
          {content.description}
        </h2>
        <div className="flex flex-wrap justify-center gap-5 max-w-[900px]">
          {content.images.map((image, index) => {
            return (
              <Image
                className="rounded-md"
                key={index}
                src={image}
                alt="Course image"
                width={200}
                height={400}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center py-20 bg-slate-100">
        <p className="text-3xl">{content.remark}</p>
        <p className="">
          {content.contact}{" "}
          <Link 
            href="mailto:alexande@uwtwriting.com"
            className="text-blue-500"
          >
            {content.mail}
          </Link>
        </p>
      </div>
    </main>
  );
}
