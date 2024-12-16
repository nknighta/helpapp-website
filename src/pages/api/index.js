import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  // POSTリクエストの処理
  const { accountid } = req.body;

  // データの検証
  if (!accountid) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  const data = await prisma.account.findUnique({
    where: {
      accountid: accountid,
    },
  }).then((data) => {
    return data;
  });
  res.status(200).json(data);
}