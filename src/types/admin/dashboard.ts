export type CardType = {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}
export type Product = {
    id?: string;
    name: string;
    price: number;
    stock: string;
    action:"Manage" | "delete";
    email?: string;
    image:string
  }
export type Customer = {
    id?: string;
    image:string
    name: string;
    gender: "Male" | "Female" | "Other";
    email: string;
    Role: "User" | "Admin";
    action:"Manage" | "delete";
  }
export type Transaction = {
    id?: string;
    name: string;
    stock: string;
    discount:number;
    gender: "Male" | "Female" | "Other";
    email: string;
    status: "Pending" | "Success" | "Failed";
    action:"Manage" | "delete";
  }