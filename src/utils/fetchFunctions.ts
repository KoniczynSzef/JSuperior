import { Lesson, Quiz as QuizType } from '@prisma/client';

export const fetchLesson = async (id: number) => {
    try {
        const res = await fetch(
            `${process.env.BASE_NEXT_URL}/api/lessons/${id}`,
            {
                body: JSON.stringify({ id }),
                method: 'POST',
            }
        );

        const data: Lesson = await res.json();

        return data;
    } catch (error) {
        console.error(error);
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
