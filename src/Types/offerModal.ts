interface ICategory{
    id:number
    categoryName:string
}

export interface IOffer{
    id:number;
    img:string;
    percent:number;
    productCategory:ICategory
    startTime:string;
    endTime:string;
}