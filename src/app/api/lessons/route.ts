import { prisma } from '@/lib/prisma';
import { Lesson } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const lessons = await prisma.lesson.findMany();

        const response = new Response(JSON.stringify(lessons), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods':
                    'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers':
                    'X-Requested-With, Content-Type, Authorization',
            },
        });

        return response;
    } catch (error) {
        throw new Error('Failed to get lessons');
    }
}

export async function POST(req: Request) {
    try {
        const body: Lesson = await req.json();

        const newLesson = await prisma.lesson.create({
            data: body,
        });

        const res = NextResponse.json(newLesson);

        res.headers.set('Access-Control-Allow-Origin', '*');
        res.headers.set('Content-Type', 'text/plain');
        res.headers.set(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        );
        res.headers.set(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-Type, Authorization'
        );

        return res;
    } catch (error) {
        throw new Error('Error while creating new lesson: ');
    }
}
