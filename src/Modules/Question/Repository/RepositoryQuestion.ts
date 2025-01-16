import { IQuestion, IQuestionRepo } from "../model/ModelQuestion";
import { prisma } from "../../../config/prisma";

export class RepositoryQuestion implements IQuestionRepo {
    async create(question: IQuestion): Promise<IQuestion> {
        const create = await prisma.question.create({
            data: question
        })
        return create
    }
    async createMany(questions: IQuestion[]): Promise<IQuestion[]> {
        await prisma.question.createMany({
            data: questions
        });
        return questions;
    }
    async findByCategoryAndDifficulty(categoryId: string, difficulty: string): Promise<IQuestion[]> {
        const find = await prisma.question.findMany({
            where: {
                categoryId: categoryId,
                difficulty: difficulty
            }
        });
        return find;
    }
    
}