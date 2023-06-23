import { client } from "@/client/mongo";
import { NextRequest, NextResponse } from "next/server";

interface Message {
  email: string;
  name: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const { email, message, name }: Message = await request.json();
  if (!email || !message || !name) {
    return NextResponse.json(
      {
        message: "Invalid request params. email, name, message are required",
      },
      { status: 422 }
    );
  }
  const newMessage: Message = { email, message, name };

  try {
    await client.connect();

    await client.db().collection("messages").insertOne(newMessage);
  } catch (e: any) {
    return NextResponse.json(
      { message: "Could not save your data. " + e.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }

  return NextResponse.json({ message: newMessage });
}
