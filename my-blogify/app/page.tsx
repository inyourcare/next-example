import Header from "@/components/Header";
import Image from "next/image";
import { posts } from "../data/post";
import dayjs from "dayjs";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import Newsletter from "@/components/Newsletter";

interface homePageProps {
  posts: {
    map: any;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  };
}

interface itemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  category: string[];
  id: string;
}
export default function Home() {
  return (
    <>
      <Header />

      <main className="container mx-auto flex flex-col p-3">
        <p className="my-16 ml-0 inline text-left text-4xl  font-bold leading-[normal] text-[rgba(35,46,82,1)] sm:ml-0 md:ml-10  lg:ml-10 xl:ml-10 2xl:ml-24">
          All posts
        </p>

        {posts?.map((item: itemProps) => {
          let GetDate = dayjs(item.date).format("DD-MMM , YYYY");

          return (
            <Post
              key={item.id}
              tag={item.tags[0]}
              date={GetDate.toString()}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}

        <Pagination />
      </main>

      <Newsletter />
    </>
  );
}
