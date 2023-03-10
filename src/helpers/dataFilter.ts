import { Item } from "../types/Item"
export const getCurrentMonth = () => {
    let now = new Date ();
    return `${now.getFullYear()} - ${now.getMonth()+1}`
}

export const filteredListByMonth = (list:Item[],date:string): Item[] => {
    let newList:Item[] = [];

    return newList;
}