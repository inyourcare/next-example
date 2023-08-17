import Image from "next/image";
import Link from "next/link";
// import { posts } from '../../../data/post';
import Header from "@/components/Header";
import Post from "@/components/Post";
import dayjs from "dayjs";
import Newsletter from "@/components/Newsletter";
import { PrismaClient, Post as PrismaPost } from "@prisma/client";

interface tagPageProps {
  tag: string;
  posts: {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    filter(arg0: (_: any, i: any) => boolean): unknown;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  }
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
export default async function Home({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany()
  return (
    <>
      <Header title='hidden' tag={`${slug}`} />

      <main className='container mx-auto flex flex-col p-3'>

        {
          posts.map(
            (item: PrismaPost) => {

              return <Post key={item.id}
                tag={item.tags}
                date={dayjs(item.createdAt).format("DD MMMM , YYYY")}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            }
          )
        }

      </main>

      <Newsletter />
    </>
  );
}
