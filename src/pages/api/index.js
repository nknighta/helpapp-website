import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const users = await prisma.account.findUnique({
        where: {
            accountid: `${req.body.accountid}` || null
        }
    })
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' })
        return
    } else {
        res.status(200).json({
            users: users
        })
    }
}