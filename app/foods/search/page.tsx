"use client"

import React, { useEffect } from "react"
import { getFoodSearchForm } from "@/redux/features/food-search-form/reducer"
import { SelectOnly } from "@/components/search-filter"
import { SelectFilter } from "@/components/search-filter"
import { Search, X } from "lucide-react"
import { useActions } from "@/redux/hooks/use-actions"
import { useTypedSelector } from "@/redux/hooks/use-typed-selector"

import { FoodSearchService } from "@/service/foods/food-search-service"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import FoodItem from "@/components/page-components/food-search/food-item"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"


const SearchFoods = () => {

  const {
    setCategoryItems,
    setSubCategoryItems,
    setItemNameItems,
    setMacroItems,
    setIngredientItems,
    setFormItems,
    setTagItems
  } = useActions('foodSearchForm');

  const [isOpenSearchFilterPopup, setIsOpenSearchFilterPopup] = React.useState(false);

  const foodSearchForm = useTypedSelector(getFoodSearchForm);
  const foodSearchService = FoodSearchService.getInstance("token");

  // call api which get all categories
  const loadCategoryListData = () => {
    const categoryItems = foodSearchService.getCategoryListData();
    setCategoryItems(categoryItems);
  }

  // call api which get all sub categories
  const loadSubCategoryListData = () => {
    const subCategoryItems = foodSearchService.getSubCategoryListData();
    setSubCategoryItems(subCategoryItems);
  }

  // call api which get all item names
  const loadItemNameListData = () => {
    const itemNameItems = foodSearchService.getItemNameListData();
    setItemNameItems(itemNameItems);
  }

  // call api which get all macros
  const loadMacroListData = () => {
    const macroItems = foodSearchService.getMacroListData();
    setMacroItems(macroItems);
  }

  // call api which get all ingredients
  const loadIngredientListData = () => {
    const ingredientItems = foodSearchService.getIngredientListData();
    setIngredientItems(ingredientItems);
  }

  // call api which get all forms
  const loadFormListData = () => {
    const formItems = foodSearchService.getFormListData();
    setFormItems(formItems);
  }

  // call api which get all tags
  const loadTagListData = () => {
    const tagItems = foodSearchService.getTagListData();
    setTagItems(tagItems);
  }

  const toggleSearchFilterPopup = () => {
    setIsOpenSearchFilterPopup(!isOpenSearchFilterPopup);
  }

  useEffect(() => {
    loadCategoryListData();
    loadSubCategoryListData();
    loadItemNameListData();
    loadMacroListData();
    loadIngredientListData();
    loadFormListData();
    loadTagListData();
  }, [])

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex md:shrink-0 justify-between h-full gap-4 mt-4">
        <Card className="hidden lg:block">
          <CardHeader className="p-2">
            <Button className="h-8">{"Click Here to Search"}</Button>
          </CardHeader>
          <CardContent className="flex flex-col hidden lg:block p-2">
            <div className="flex flex-col gap-2">
              <SelectOnly props={foodSearchForm.searchingForField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.categoryField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.subCategoryField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.itemNameField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.macroField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.ingredientField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.formField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.tagField} module={'foodSearchForm'} />
            </div>
          </CardContent>
        </Card>
        <div className="lg:hidden relative">
          <Button variant="outline" className="absolute top-8 w-14 h-14" onClick={() => toggleSearchFilterPopup()}>
            <Search className="w-full" />
          </Button>
          {/* Background Overlay */}
          <div
            id="menu-overlay"
            className={`fixed top-0 left-0 w-full h-full bg-[hsl(var(--foreground))] opacity-60 z-40 ${isOpenSearchFilterPopup ? '' : 'hidden'} lg:hidden`}
            onClick={() => setIsOpenSearchFilterPopup(false)}
          ></div>
          <div
            id="menu-modal"
            className={`absolute top-0 left-0 w-96 rounded-sm border bg-[hsl(var(--background))] z-50 ${isOpenSearchFilterPopup ? '' : 'hidden'}`}
          >
            <Button variant="outline" className="absolute top-1 right-1 flex items-center p-2 space-x-2 rounded" onClick={() => setIsOpenSearchFilterPopup(false)}>
              <X />
            </Button>
            {/* Modal content here */}
            <div className="p-4">
              <SelectOnly props={foodSearchForm.searchingForField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.categoryField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.subCategoryField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.itemNameField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.macroField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.ingredientField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.formField} module={'foodSearchForm'} />
              <SelectFilter props={foodSearchForm.tagField} module={'foodSearchForm'} />
            </div>
          </div>
        </div>
        <div className="flex-2 flex flex-col">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="select-all" />
                  <Label htmlFor="select-all">Select all</Label>
                </div>
                <div className="flex justify-end gap-2">
                  <Button className="h-8">{"Deselect"}</Button>
                  <Button className="h-8">{"Add to compare"}</Button>
                  <Button className="h-8">{"Delete selected"}</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 mt-4">
                <FoodItem />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  );
};

export default SearchFoods;