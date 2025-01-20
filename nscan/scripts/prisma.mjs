import { PrismaClient } from '@prisma/client';

if(Process.env.NODE_ENV === 'production') {
  prisma = newPrismaClent();
} else {
    const globalWithPrisma = global;
    if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = new PrismaClient();
    }
    prisma = globelWithPrisma.prisma;
}

export default prisma;