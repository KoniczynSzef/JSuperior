// import { prisma } from '@/lib/prisma';

import { NextResponse } from 'next/server';

// export async function GET(
//     req: Request,
//     { params }: { params: { id: string } }
// ) {
//     try {
//         const lesson = await prisma.lesson.findUnique({
//             where: {
//                 id: parseInt(params.id),
//             },
//         });

//         return new Response(JSON.stringify(lesson));
//     } catch (error) {
//         throw new Error('Something went wrong while finding a unique lesson');
//     }
// }

export async function GET() {
    try {
        return new NextResponse(JSON.stringify({ hello: 'world!' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        throw new Error('Failed to get lessons');
    }
}
