import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

const register = (data: User): Promise<User | null> =>
{
    const user = prisma.user.create({
        data
    })
    return user
}
const login = async (data: User): Promise<User | null> =>
{
    try
    {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });
        return user;
    } catch (error)
    {
        // Handle errors here, such as logging or throwing an exception
        console.error(error);
        return null; // Or throw an error if appropriate for your use case
    }
};

export const adminService = {
    register,login
}