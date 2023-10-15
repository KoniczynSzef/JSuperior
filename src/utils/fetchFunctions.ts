import { Quiz as QuizType } from '@prisma/client';

export const fetchLesson = async (id: number) => {
    try {
        const res = await fetch(
            `${
                process.env.NODE_ENV === 'development'
                    ? process.env.BASE_NEXT_URL
                    : process.env.SITE_URL
            }/api/lessons/${id}`
        );

        const data = await res.text();
        return JSON.parse(data);
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
