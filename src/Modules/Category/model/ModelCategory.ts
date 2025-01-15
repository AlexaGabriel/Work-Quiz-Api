export interface Icategory{
    name: string
}
export interface IcategoryRepo{
    create(category: Icategory): Promise<Icategory>
    findAll(): Promise<Icategory[]>
    findById(id: string): Promise<Icategory | null>
}