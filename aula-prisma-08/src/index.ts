import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
  });
  console.log(students);
})();

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    where: { jobId: null },
    orderBy: { _count: { id: "desc" } },
  });
  console.log(students);
})();
