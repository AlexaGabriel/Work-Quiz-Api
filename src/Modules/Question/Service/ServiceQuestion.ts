import { RepositoryQuestion } from "../Repository/RepositoryQuestion";
import { IQuestion, IQuestionRepo } from "../model/ModelQuestion";
import { SQuestion } from "../Schema/SchemaQuestion";

export class ServiceQuestion{
    private repository: IQuestionRepo;
    constructor(){
        this.repository = new RepositoryQuestion();
    }
    async create(question: IQuestion): Promise<IQuestion>{
        const validate = SQuestion.safeParse(question);
        if(!validate.success){
            throw new Error("Invalid question");
        }
        return await this.repository.create(question);
    }
    async createMany(questions: IQuestion[]): Promise<IQuestion[]>{
        return await this.repository.createMany(questions);
    }
    async findByCategoryAndDifficulty(categoryId: string, difficulty: string): Promise<IQuestion[]>{
        return await this.repository.findByCategoryAndDifficulty(categoryId, difficulty);
    }
}