import {z} from "zod";

export const SCategory = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
})