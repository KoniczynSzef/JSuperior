// import { prisma } from '@/lib/prisma';
// import { Lesson } from '@prisma/client';

import { NextResponse } from 'next/server';

// export async function GET() {
//     try {
//         const lessons = await prisma.lesson.findMany();

//         return new Response(JSON.stringify(lessons));
//     } catch (error) {
//         throw new Error('Failed to get lessons');
//     }
// }

// export async function POST(req: Request) {
//     try {
//         const body: Lesson = await req.json();

//         const newLesson = await prisma.lesson.create({
//             data: body,
//         });

//         return new Response(JSON.stringify(newLesson));
//     } catch (error) {
//         throw new Error('Error while creating new lesson: ');
//     }
// }

export async function GET() {
    try {
        return new NextResponse('world!', {
            status: 200,
        });
    } catch (error) {
        throw new Error('Failed to get lessons');
    }
}
