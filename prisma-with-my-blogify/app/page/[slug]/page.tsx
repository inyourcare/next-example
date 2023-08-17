import Blockquote from "@/components/Blockquote";
import PostHeader from "@/components/PostHeader";
import Post from "@/components/Post";
// import { posts as data } from "@/data/post";
import dayjs from "dayjs";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export default async function Home({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const prisma = new PrismaClient();
  const data = await prisma.post.findMany()
  const posts = data.filter((_, i) => i < 3)
  const post = data.filter((item) => item.title.toLowerCase().replaceAll(" ", "-") === slug)[0]
  return (
    <>
      <PostHeader
        title={post.title}
        tag={post.tags[0]}
        date={dayjs(post.createdAt).format("DD MMMM , YYYY")}
        authorName={post.author}
      />

      <div className="mx-auto my-10">
        <Image
          height="250"
          width="500"
          src={post.image}
          alt={post.title}
          className="mx-auto h-[72%] w-[1424px]"
        />
      </div>

      <div className="prose prose-stone mx-auto my-12 lg:prose-lg">
        <p className="mb-3 font-light text-gray-500 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:uppercase first-line:tracking-widest dark:text-gray-400 dark:first-letter:text-gray-100">
          Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and
          changes.
        </p>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work,
          eliminate toil, and deploy changes with ease, with a complete audit
          trail for every change.
        </p>

        <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
          {`Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.

                    Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.

                    The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread?
                `}
        </p>

        <div className="rounded-bl-[10px] rounded-br-[10px] bg-[rgba(235,242,254,1)] py-3.5 text-left font-normal text-[rgba(35,46,82,1)]">
          <img
            height="324px"
            width="1424px"
            className="cover"
            alt="Alt for images"
            src="https://source.unsplash.com/random/100x100"
          />
          <p className="text-center text-xs uppercase leading-normal">
            Image caption or credit
          </p>
        </div>

        <p className="font-light text-gray-500 dark:text-gray-400">
          {`The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread? Not so fast, I'd say, there are some redeeming factors in favor
          of greeking text, as its use is merely the symptom of a worse problem
          to take into consideration. Design comps, layouts, wireframes—will
          your clients accept that you go about things the facile way?
          Authorities in our business will tell in no uncertain terms that Lorem
          Ipsum is that huge, huge no no to forswear forever.`}
        </p>

        <Blockquote />

        <p className="font-light text-gray-500 dark:text-gray-400">
          {`Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever. The toppings you may chose for that TV dinner pizza
          slice when you forgot to shop for foods, the paint you may slap on
          your face to impress the new boss is your business. But what about
          your daily bread? Not so fast, I'd say, there are some redeeming
          factors in favor of greeking text, as its use is merely the symptom of
          a worse problem to take into consideration. Not so fast, I'd say,
          there are some redeeming factors in favor of greeking text, as its use
          is merely the symptom of a worse problem to take into
          consideration.esign comps, layouts, wireframes—will your clients
          accept that you go about things the facile way? Authorities in our
          business will tell in no uncertain terms that Lorem Ipsum is that
          huge, huge no no to forswear forever.`}
        </p>
      </div>
      <div className="container mx-auto my-20 flex flex-col justify-center">
        <h2 className="text-3xl font-light  text-gray-500 dark:text-gray-400">
          Other interesting posts
        </h2>

        {posts.map((item) => {
          let GetDate = dayjs(item.createdAt).format("DD-MMM , YYYY");

          return (
            <Post
              key={item.id}
              tag={item.tags}
              date={GetDate.toString()}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
}
