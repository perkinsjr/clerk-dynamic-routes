import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);
  if (!userId) {
    res.status(200).json({ message: "Generic " });
    return;
  }
  // retrieve data from your database
  res.status(200).json({ "message": `Hey there ${userId}` });
}
