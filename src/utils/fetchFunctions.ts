import { Lesson, Quiz as QuizType } from '@prisma/client';

export const fetchLesson = async (id: number) => {
    if (!id) throw new Error('id is required');

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
    const res = await fetch(`${process.env.BASE_NEXT_URL}/api/quiz/${id}`, {
        method: 'POST',
        body: JSON.stringify({ id }),
    });

    if (res.status !== 200) throw new Error('Error while fetching');

    const data: QuizType = await res.json();

    return data;
};
