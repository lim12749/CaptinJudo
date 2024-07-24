// pages/api/checkLogin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import getSession from '@/lib/sesstion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession();

    if (session.id) {
        res.status(200).json({ loggedIn: true });
    } else {
        res.status(200).json({ loggedIn: false });
    }
}
