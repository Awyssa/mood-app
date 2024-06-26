import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkID();

  try {
    const entry = await prisma.journalEntry.create({
      data: {
        userId: user.id,
        content: "Write about your day!",
      },
    });

    return NextResponse.json({ success: true, data: entry });
  } catch (error) {
    return NextResponse.json({ error: true, msg: `Entry failed: ${error}` });
  }
};
