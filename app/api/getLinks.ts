// pages/api/updateLinks.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import getSession from '@/lib/sesstion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const session = await getSession();
    if (!session.id) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await db.user.findUnique({
        where: { id: session.id },
        select: { admin: true },
    });

    if (!user || !user.admin) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const { instaLink, naverLink } = req.body;

    await db.user.update({
        where: { id: session.id },
        data: { instaLink, naverLink },
    });

    res.status(200).json({ message: 'Links updated successfully' });
}
