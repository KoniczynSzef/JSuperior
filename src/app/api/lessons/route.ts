// import { prisma } from '@/lib/prisma';
// import { Lesson } from '@prisma/client';
// import { NextResponse } from 'next/server';

export async function GET() {
    return new Response('Hello world', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, Content-Type, Authorization',
        },
    });
    // try {
    //     const lessons = await prisma.lesson.findMany();

    //     const lessonStr = JSON.stringify(lessons);

    //     // Check if the first character of the JSON string is 'T' and if we are in production environment
    //     if (lessonStr.charAt(0) === 'T') {
    //         // If so, throw an error to prevent the Response object from being created
    //         throw new Error('Failed to get lessons');
    //     }

    //     // Create a new Response object with the JSON string and headers
    //     const response = new Response(lessonStr, {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Methods':
    //                 'GET, POST, PUT, DELETE, OPTIONS',
    //             'Access-Control-Allow-Headers':
    //                 'X-Requested-With, Content-Type, Authorization',
    //         },
    //     });

    //     // Return the Response object
    //     return response;
    // } catch (error) {
    //     // If an error occurs, throw a new error with a message
    //     throw new Error('Failed to get lessons');
    // }
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
