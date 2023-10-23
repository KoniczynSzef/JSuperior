import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json('Hello world', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, Content-Type, Authorization',
        },
    });

    return response;
}
// }

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
