import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const lesson = await prisma.lesson.findUnique({
            where: {
                id: parseInt(params.id),
            },
        });

        const response = NextResponse.json(lesson);

        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Content-Type', 'text/plain');
        response.headers.set(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        );
        response.headers.set(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-Type, Authorization'
        );

        return response;
    } catch (error) {
        throw new Error('Something went wrong while finding a unique lesson');
    }
}
