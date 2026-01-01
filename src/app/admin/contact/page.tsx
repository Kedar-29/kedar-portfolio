import { prisma } from "@/lib/prisma";
import { ContactTable } from "@/components/admin/contact-table";

export const dynamic = "force-dynamic";

async function getSubmissions() {
  return prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function AdminContactPage() {
  const submissions = await getSubmissions();

  return (
    <main className="min-h-screen px-6 pt-16 pb-10 md:px-10 lg:px-16 bg-background dark:bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <ContactTable submissions={submissions} />
      </div>
    </main>
  );
}
