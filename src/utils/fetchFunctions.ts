import { Lesson, Quiz as QuizType } from '@prisma/client';

export const fetchLesson = async (id: number) => {
    try {
        const res = await fetch(
            `${process.env.BASE_NEXT_URL}/api/lessons/${id}`
        );

        const text = await res.text();
        try {
            const data: Lesson | null = JSON.parse(text);
            return data;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            throw new Error('Failed to parse lesson data');
        }
    } catch (error) {
        throw new Error('Failed to get lesson');
    }
};

export const fetchQuiz = async (id: number) => {
    try {
        const res = await fetch(`${process.env.BASE_NEXT_URL}/api/quiz/${id}`, {
            method: 'POST',
            body: JSON.stringify({ id }),
        });

        const data: QuizType = await res.json();

        return data;
    } catch (error) {
        throw new Error('Error while fetching quiz');
    }
};
