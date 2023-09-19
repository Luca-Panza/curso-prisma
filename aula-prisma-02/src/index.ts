import prisma from "./database/database";

(async () => {
  const posts = await prisma.posts.findMany();
  console.log("Database search results for posts:", posts);
})();
