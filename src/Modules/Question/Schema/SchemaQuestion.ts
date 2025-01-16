import z from "zod";

export const SQuestion = z.object({
    statement: z.string(),
    alternatives: z.string().array(),
    answer: z.string(),
    difficulty: z.string(),
    categoryId: z.string(),
});