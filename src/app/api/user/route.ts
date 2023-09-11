import { $Enums } from '@prisma/client';
import { prisma } from '../../../../prisma/db';

type lesson = {
    id: string;
    category: $Enums.Category;
    hasQuiz: boolean;
};

export async function POST(req: Request) {
    const body = await req.json();

    console.log(body);
    return new Response(body);
}
