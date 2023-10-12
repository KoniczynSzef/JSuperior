import { Lesson, Quiz as QuizType } from '@prisma/client';

export const fetchLesson = async (id: number) => {
    try {
        const res = await fetch(
            `${
                process.env.NODE_ENV === 'development'
                    ? process.env.BASE_NEXT_URL
                    : process.env.SITE_URL
            }/api/lessons/${id}`
        );

        if (
            process.env.NODE_ENV === 'production' &&
            res.headers.get('Content-Type') !== 'application/json'
        ) {
            console.log('Here');

            throw new Error('Invalid response from server');
        }

        const data: Lesson | null = await res.json();
        return data;
    } catch (error) {
        throw new Error('Failed to get lesson');
    }
};

export const fetchQuiz = async (id: number) => {
    try {
        const res = await fetch(
            `${
                process.env.NODE_ENV === 'development'
                    ? process.env.BASE_NEXT_URL
                    : process.env.SITE_URL
            }/api/quiz/${id}`,
            {
                method: 'POST',
                body: JSON.stringify({ id }),
            }
        );

        const data: QuizType = await res.json();

        return data;
    } catch (error) {
        throw new Error('Error while fetching quiz');
    }
};
