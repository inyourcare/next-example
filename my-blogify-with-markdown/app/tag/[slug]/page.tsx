import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import dayjs from "dayjs";
import Newsletter from "@/components/Newsletter";
import getPostMetadata from "@/src/post/getPostMetadata";
import PostPreview from "@/components/post/PostPreview";
import Pagination from "@/components/Pagination";

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
  const postMetadata = getPostMetadata().filter(
    (item) => item.tags.filter((tag) => tag.includes(slug)).length >= 1
  );
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <Header title='hidden' tag={`${slug}`} />

      <main className='container mx-auto flex flex-col p-3'>

        {/* {
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
        } */}
        {/* {postPreviews} */}
        <Pagination postPreviews={postPreviews} />

      </main>

      <Newsletter />
    </>
  );
}
