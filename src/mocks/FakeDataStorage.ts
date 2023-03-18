import { DataStorage } from "./DataStorage";
import { SessionDataStorage } from "./SessionDataStorage";
import { ProductSchema } from "./types";



const data: ProductSchema[] = [
  {
    id: crypto.randomUUID(),
    title: "apple",
    description: "this is an apple.",
    price: 2000,
  },
  {
    id: crypto.randomUUID(),
    title: "grape",
    description: "this is an grape.",
    price: 4000,
  },
  {
    id: crypto.randomUUID(),
    title: "orange",
    description: "this is an orange",
    price: 1200,
  },
];

export function initiateData(){
    sessionStorage.clear();
    const store = new SessionDataStorage("product");
    data.forEach((e)=>{
      store.addItem(e);
    });
}

export function getAccessToStore<T extends {id:string}>(schemaName:string):DataStorage<T>{
    return new SessionDataStorage<T>(schemaName);
}
