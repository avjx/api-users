import {z} from 'zod';

export const userSch = z.object({
    name: z.string().min(2, 'Name too short.'),
    email: z.string().email('Email not valid.')
})