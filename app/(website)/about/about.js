import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">Welcome to my World.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/about`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
        My name Is Mugai Chege, a passionate writer and introvert who loves to express himself through words. Writing has been my escape, and through my blog, I hope to create a safe space for introverts like me to share their thoughts and feelings.
        </p>
        <p>
        My writing focuses on various topics, from mental health and self-care to personal growth and relationships. With each post, I hope to inspire and encourage my readers to embrace their unique selves and live life on their own terms.
        </p>
        <p>
        When I'm not writing, you can find me curled up with a good book or exploring the great outdoors. If you'd like to connect with me or have any questions, feel free to reach out!
        </p>
        <p>
        <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
