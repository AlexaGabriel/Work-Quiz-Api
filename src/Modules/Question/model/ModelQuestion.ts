export interface IQuestion{
    statement: string,
    alternatives: string[],
    answer: string,
    difficulty: string,
    categoryId: string
}
export interface IQuestionRepo{
    create(question: IQuestion): Promise<IQuestion>
    createMany(questions: IQuestion[]): Promise<IQuestion[]>
    findByCategoryAndDifficulty(categoryId: string, difficulty: string): Promise<IQuestion[]>
    
}