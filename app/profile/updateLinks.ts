// /actions/updateLinks.ts
"use server";

import { PrismaClient } from '@prisma/client';
import getSession from '@/lib/sesstion'

const prisma = new PrismaClient();

export async function updateLinks(instaLink: string, naverLink: string) {
    const session = await getSession();
    if (!session) {
        throw new Error('Unauthorized');
    }

    const user = await prisma.user.findUnique({
        where: { id: session.id },
    });

    // @ts-ignore
    if (!user || !user.admin) {
        throw new Error('Forbidden');
    }

    await prisma.user.update({
        where: { id: user.id },
        data: {
            instaLink,
            naverLink,
        },
    });

    return { instaLink, naverLink };
}
