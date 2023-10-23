import { prisma } from '@/lib/prisma';

export async function GET() {
    async function getLessons(
        resolve: (value: Response | PromiseLike<Response>) => void,
        reject: (reason?: unknown) => void
    ) {
        const lessons = await prisma.lesson.findMany();
        if (lessons) {
            resolve(new Response(JSON.stringify(lessons)));
        } else {
            reject('Error while fetching lessons');
        }
    }
    const res = new Promise<Response>((resolve, reject) => {
        try {
            getLessons(resolve, reject);
        } catch (error) {
            throw new Error('Error while fetching lessons');
        }
    });

    return res;
}
// }

// export async function POST(req: Request) {
//     try {
//         const body: Lesson = await req.json();

//         const newLesson = await prisma.lesson.create({
//             data: body,
//         });

//         const res = NextResponse.json(newLesson);

//         res.headers.set('Access-Control-Allow-Origin', '*');
//         res.headers.set('Content-Type', 'text/plain');
//         res.headers.set(
//             'Access-Control-Allow-Methods',
//             'GET, POST, PUT, DELETE, OPTIONS'
//         );
//         res.headers.set(
//             'Access-Control-Allow-Headers',
//             'X-Requested-With, Content-Type, Authorization'
//         );

//         return res;
//     } catch (error) {
//         throw new Error('Error while creating new lesson: ');
//     }
// }
