<<<<<<< HEAD

export default function handler(req, res) {
    const userid = req.query.userid;

    try {
        if (req.method === 'POST') {
            res.status(200).json({
                method: 'POST',
                name: 'John Doe ' + userid
            })
        } else {
            res.status(200).json({ name: 'John Doe ' + userid })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
=======
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
>>>>>>> b135c5b821514521ada20edb974318d92aee787a
}