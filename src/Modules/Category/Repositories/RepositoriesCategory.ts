import {prisma} from "../../../config/prisma";
import { Icategory, IcategoryRepo } from "../model/ModelCategory";

export default class RepositoryCategory implements IcategoryRepo{
    async create(category: Icategory): Promise<Icategory> {
        const create = await prisma.category.create({
            data: category
        });
        return create;
    }
    async findAll(): Promise<Icategory[]> {
        const findAll = await prisma.category.findMany()
        return findAll;
    }
    async findById(id: string): Promise<Icategory | null> {
        const findById = await prisma.category.findUnique({
            where:{
                id
            }
        });
        return findById;
    }
    
}