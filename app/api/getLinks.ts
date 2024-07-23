// pages/api/getLinks.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import getSession from '@/lib/sesstion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession();
    if (!session.id) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await db.user.findUnique({
        where: {
            id: session.id,
        },
        select: {
            instaLink: true,
            naverLink: true,
        },
    });

    if (user) {
        return res.status(200).json({ instaLink: user.instaLink, naverLink: user.naverLink });
    } else {
        return res.status(404).json({ message: 'User not found' });
    }
}
