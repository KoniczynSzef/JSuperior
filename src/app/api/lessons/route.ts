import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const lessons = await prisma.lesson.findMany();

        const response = NextResponse.json(lessons, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Methods':
                    'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers':
                    'X-Requested-With, Content-Type, Authorization',
            },
        });

        if (response.headers.get('Content-Type') !== 'text/plain') return;

        return response;
    } catch (error) {
        throw new Error('Error while fetching lessons: ');
    }
}

// export async function POST(req: Request) {
//     try {
//         const body: Lesson = await req.json();

//         const newLesson = await prisma.lesson.create({
//             data: body,
//         });

//         const res = NextResponse.json(newLesson);

//         res.headers.set('Access-Control-Allow-Origin', '*');
//         res.headers.set('Content-Type', 'text/plain');
//         res.headers.set(
//             'Access-Control-Allow-Methods',
//             'GET, POST, PUT, DELETE, OPTIONS'
//         );
//         res.headers.set(
//             'Access-Control-Allow-Headers',
//             'X-Requested-With, Content-Type, Authorization'
//         );

//         return res;
//     } catch (error) {
//         throw new Error('Error while creating new lesson: ');
//     }
// }
