import Image from "next/image";
import contents from "./contents/page.json";
import Link from "next/link";

export default function Home() {
  const content = contents;
  return (
    <main>
      <div className="flex items-center w-full py-14">
        <h3 className="text-5xl md:text-6xl font-semibold my-14 mx-auto">
          Coming Soon
        </h3>
      </div>

      <div className="flex flex-col items-center px-5 py-14 bg-slate-50">
        <h1 className="text-4xl sm:text-5xl font-semibold">{content.title}</h1>
        <p className="text-2xl sm:text-xl font-semibold text-center mt-5 text-muted-foreground">
          {content.subTitle}
        </p>
        <div className="bg-white max-w-[600px] p-5 rounded-md mt-6">
          <p className=" leading-relaxed">
            Greetings,
            <br />
            <br />
            We extend a warm welcome to all of you at UWT Reading, your premium
            destination for English lessons focused on both reading and writing.
            We are a team of{" "}
            <Link
              href={"https://www.uwtwriting.com/about"}
              className="text-blue-500"
            >
              passionate English educators
            </Link>{" "}
            with a shared commitment to enriching our students&apos; understanding of
            literary works.
            <br />
            <br />
            Our online school website is presently undergoing development and is
            scheduled for an official launch around Christmas 2023. In the
            meantime, we have already begun offering a variety of classes to
            eager students from across the globe. Below, you&apos;ll find our current
            course offerings.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-[2.2rem] mb-6">{content.description}</h2>
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
      </div>

      <div className="flex flex-col gap-4 items-center py-20">
        <p className="text-3xl">{content.remark}</p>
        <p className="">
          {content.contact} 
          <Link href="mailto:alexander@uwtwriting.com" className="text-blue-500">
            {content.mail}
          </Link>
        </p>
      </div>
    </main>
  );
}
