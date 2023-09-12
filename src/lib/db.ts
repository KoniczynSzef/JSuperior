import { PrismaClient } from '@prisma/client';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface Global {}
    }
}

interface CustomNodeJSGlobal extends NodeJS.Global {
    prisma: PrismaClient;
}

declare const global: CustomNodeJSGlobal;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;
