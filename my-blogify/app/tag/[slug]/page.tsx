import Image from "next/image";
import Link from "next/link";
import { posts } from '../../../data/post';
import Header from "@/components/Header";
import Post from "@/components/Post";
import dayjs from "dayjs";
import Newsletter from "@/components/Newsletter";

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
export default function Home({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return (
    <>
      <Header title='hidden' tag={`${slug}`} />

      <main className='container mx-auto flex flex-col p-3'>

        {
          posts.map(
            (item: itemProps) => {

              return <Post key={item.id}
                tag={item.tags[0]}
                date={dayjs(item.date).format("DD MMMM , YYYY")}
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
