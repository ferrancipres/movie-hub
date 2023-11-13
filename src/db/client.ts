// Tenemos que crear el cliente para PRISMA
// NEW PRISMA 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;