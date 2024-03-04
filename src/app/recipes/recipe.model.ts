import { Indgredient } from "../shared/ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Indgredient[];

    constructor(name:string, description:string, imagePath: string, ing:Indgredient[])
    {
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients=ing;
    }

}