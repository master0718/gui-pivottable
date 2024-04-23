"use client"
import { HttpService } from "../httpservice"

export class FoodSearchService extends HttpService {

    private static classInstance?: FoodSearchService;

    constructor(token?: string) {
        super('http://localhost:8080', token);
    }

    public static getInstance(token?: string) {
        if (!this.classInstance) {
            this.classInstance = new FoodSearchService(token);
        }
        return this.classInstance;
    }

    // get all categories on page load
    public getCategoryListData = () => {
        // this.instance.get("/category/listAll").then(response => {
        //     if (response) {
        //         return response.data;
        //     }
        // })
        const searchItems = [
            { key: "CATEGORY", id: 1, label: "Category 1", status: 0 },
            { key: "CATEGORY", id: 2, label: "Category 2", status: 0 },
            { key: "CATEGORY", id: 3, label: "Category 3", status: 0 },
        ];
        return searchItems
    }

    // get all sub categories on page load
    public getSubCategoryListData = () => {
        
        const searchItems = [
            { key: "SUB_CATEGORY", id: 1, label: "Sub Category 1", status: 0 },
            { key: "SUB_CATEGORY", id: 2, label: "Sub Category 2", status: 0 },
            { key: "SUB_CATEGORY", id: 3, label: "Sub Category 3", status: 0 },
        ];
        return searchItems
    }

    // get all item names on page load
    public getItemNameListData = () => {
        
        const searchItems = [
            { key: "ITEM_NAME", id: 1, label: "Item 1", status: 0 },
            { key: "ITEM_NAME", id: 2, label: "Item 2", status: 0 },
            { key: "ITEM_NAME", id: 3, label: "Item 3", status: 0 },
        ];
        return searchItems
    }

    // get all macros on page load
    public getMacroListData = () => {
        
        const searchItems = [
            { key: "MACRO", id: 1, label: "Calories", status: 0 },
            { key: "MACRO", id: 2, label: "Protein", status: 0 },
            { key: "MACRO", id: 3, label: "Fat", status: 0 },
            { key: "MACRO", id: 4, label: "Carbs", status: 0 },
            { key: "MACRO", id: 5, label: "Omega", status: 0 },
        ];
        return searchItems
    }

    // get all ingredients on page load
    public getIngredientListData = () => {
        
        const searchItems = [
            { key: "INGREDIENT", id: 1, label: "Ingredient 1", status: 0 },
            { key: "INGREDIENT", id: 2, label: "Ingredient 2", status: 0 },
            { key: "INGREDIENT", id: 3, label: "Ingredient 3", status: 0 },
        ];
        return searchItems
    }

    // get all forms on page load
    public getFormListData = () => {
        
        const searchItems = [
            { key: "FORM", id: 1, label: "Form 1", status: 0 },
            { key: "FORM", id: 2, label: "Form 2", status: 0 },
            { key: "FORM", id: 3, label: "Form 3", status: 0 },
        ];
        return searchItems
    }

    // get all tags on page load
    public getTagListData = () => {
        
        const searchItems = [
            { key: "TAG", id: 1, label: "Tag 1", status: 0 },
            { key: "TAG", id: 2, label: "Tag 2", status: 0 },
            { key: "TAG", id: 3, label: "Tag 3", status: 0 },
        ];
        return searchItems
    }
}