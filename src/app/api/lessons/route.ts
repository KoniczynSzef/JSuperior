import { prisma } from '@/lib/prisma';
import { Lesson } from '@prisma/client';

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const lessons = await prisma.lesson.findMany();

        const response = NextResponse.json(lessons);

        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Content-Type', 'application/json');
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
        throw new Error('Failed to get lessons');
    }
}

export async function POST(req: Request) {
    try {
        const body: Lesson = await req.json();

        const newLesson = await prisma.lesson.create({
            data: body,
        });

        const response = NextResponse.json(newLesson);

        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Content-Type', 'application/json');
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
        throw new Error('Error while creating new lesson: ');
    }
}
