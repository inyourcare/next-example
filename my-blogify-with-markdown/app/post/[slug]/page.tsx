import Blockquote from "@/components/Blockquote";
import PostHeader from "@/components/PostHeader";
import dayjs from "dayjs";
import Image from "next/image";
import getPostContent from "@/src/post/getPostContent";
import getPostMetadata from "@/src/post/getPostMetadata";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import PostPreview from "@/components/post/PostPreview";
import Markdown from "markdown-to-jsx";

export default function Home({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  const post = getPostContent(slug);
  const posts = getPostMetadata();
  const postsRelated = posts.filter(
    (item) => item.id !== post.data.id && item.tags.includes(post.data.tags[0])
  );
  const postPreviews = postsRelated.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <PostHeader
        title={post.data.title}
        tag={post.data.tags[0]}
        date={dayjs(post.data.date).format("DD MMMM , YYYY")}
        authorName={post.data.author}
        description={post.data.description}
      />

      <div className="my-10 mx-auto">
        <Image
          height="250"
          width="500"
          src={post.data.image}
          alt={post.data.imageAlt}
          className="mx-auto h-[72%] w-[1424px]"
        />
      </div>

      <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
        <Markdown>{post.content}</Markdown>
      </div>
      <div className="container my-40 p-20 flex flex-col justify-center mx-auto border-t-2">
        {postPreviews.length > 0 && (
          <>
            <h2 className="text-3xl font-light  text-gray-500 dark:text-gray-400">
              다른 관련 포스팅
            </h2>
            <Pagination postPreviews={postPreviews} />
          </>
        )}
      </div>
    </>
  );
}
