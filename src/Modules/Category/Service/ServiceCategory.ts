import RepositoryCategory from "../Repositories/RepositoriesCategory";
import { Icategory, IcategoryRepo } from "../model/ModelCategory";
import { SCategory } from "../Schema/SchemaCategory";

export default class ServiceCategory{
    private repository: IcategoryRepo;
    constructor(){
        this.repository = new RepositoryCategory();
    }
    async create(category: Icategory){
        const validate = SCategory.safeParse(category);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const create = await this.repository.create(category);
        return create;
    }
    async findAll(){
        const findAll = await this.repository.findAll();
        return findAll;
    }
    async findById(id: string){
        const findById = await this.repository.findById(id);
        return findById;
    }
}
