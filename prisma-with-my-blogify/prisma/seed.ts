import { PrismaClient } from "@prisma/client";
import { postData } from "./posts";
const prisma = new PrismaClient();
async function main() {
  // const posts = await prisma.post.createMany({
  //   data: postData,
  //   skipDuplicates: true,
  // });
  const posts = postData.map(
    async (post, i) =>
      await prisma.post.create({
        data: {
          ...post,
          tags: post.tags.join(",") || "",
          category: post.category.join(",") || "",
          imageAlt: "",
          contents: "",
        },
      })
  );
  console.log("posts", posts);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
