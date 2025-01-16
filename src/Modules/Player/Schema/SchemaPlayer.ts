import z from "zod";

export const SPlayer = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
})