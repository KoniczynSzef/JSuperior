import { lessonProps } from '@/app/cms/CmsForm';
import { prisma } from '../../../lib/db';

export async function POST(req: Request) {
    const test = prisma;
    console.log(test);
    return new Response(JSON.stringify({ hello: 'world!' }));
}