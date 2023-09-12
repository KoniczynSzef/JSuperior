'use server';

import { Lesson } from '@prisma/client';
import { addLesson } from '../lib/lessons';

export async function addLessonOnServer(lesson: Lesson) {
    await addLesson(lesson);
}
