export type LatestProductType = {
    id:string;
    name:string;
    price:string;
    image:string;
    slug:string
}

export type Category = {
    id:string;
    categoryName:string;
    image:string;
    slug:string;
}

export type ProductDetails = {

}

export type ProductCardData = {
    freeDelivery:boolean
    keyFeatures:string
}

export type ProductProps = {
    productId:string;
    photo:string;
    name:string;
    price:number;
    stock:number;
    discount:number
    handler: () => void;
    // productDetails:ProductDetails
    // productCardData:ProductCardData
}
export type SingleGenderType = {
    label:"Male" | "Female" | "Other";
    value:"Male" | "Female" | "Other";
}
export type GenderType = SingleGenderType[]
