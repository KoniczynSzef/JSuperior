// import { prisma } from '@/lib/prisma';

// export async function GET(
//     req: Request,
//     { params }: { params: { id: string } }
// ) {
// try {
//     const lesson = await prisma.lesson.findUnique({
//         where: {
//             id: parseInt(params.id),
//         },
//     });

//     const lessonStr = JSON.stringify(lesson);

//     // Check if the first character of the JSON string is 'T' and if we are in production environment
//     if (lessonStr.charAt(0) === 'T') {
//         // If so, throw an error to prevent the Response object from being created
//         throw new Error('Failed to get lessons');
//     }

//     // Create a new Response object with the JSON string and headers
//     const response = new Response(lessonStr, {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Methods':
//                 'GET, POST, PUT, DELETE, OPTIONS',
//             'Access-Control-Allow-Headers':
//                 'X-Requested-With, Content-Type, Authorization',
//         },
//     });

//     // Return the Response object
//     return response;
// } catch (error) {
//     throw new Error('Something went wrong while finding a unique lesson');
// }

// return new Response('Hello world from lesson/id route');
// }

export async function GET(req: Request) {
    console.log(await req.text());

    return new Response('Hello world from lesson/id route', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, Content-Type, Authorization',
        },
    });
}
