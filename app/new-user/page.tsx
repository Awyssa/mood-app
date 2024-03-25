import { prisma } from "@/util/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface User {
  id: string;
  emailAddresses: [{ emailAddress: string }];
}

const createNewUser = async () => {
  const user: User = await currentUser();

  const match = await prisma.user.findUnique({ where: { clerkId: user.id } });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/journal')
};

const NewUser = async () => {
  await createNewUser();

  return <div></div>;
};

export default NewUser;
