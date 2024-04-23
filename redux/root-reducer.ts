"use client";

import { reducer as foodSearchFormReducer } from './features/food-search-form/reducer';
import { reducer as mealsAddSearchFormReducer } from './features/meals-add-search-form/reducer';
import { reducer as manageMacrosSearchFormReducer } from './features/manage-macros-search-form/reducer';
import { reducer as activitiesAddSearchFormReducer } from './features/activities-add-search-form/reducer';
import { reducer as exercisesAddSearchFormReducer } from './features/exercises-add-search-form/reducer';
import { reducer as overviewSearchFormReducer } from './features/overview-search-form/reducer';
import { reducer as shoppingListSearchFormReducer } from './features/shopping-list-search-form/reducer';
import { reducer as foodListSearchFormReducer } from './features/food-list-search-form/reducer';
import { reducer as supplementListSearchFormReducer } from './features/supplement-list-search-form/reducer';
import { reducer as modalsReducer } from './features/modals/reducer';
import { reducer as eventsReducer } from './features/events/reducer';
import { reducer as popupsReducer } from './features/popups/reducer';

export const reducers = {
  foodSearchForm: foodSearchFormReducer,
  mealsAddSearchForm: mealsAddSearchFormReducer,
  manageMacrosSearchForm: manageMacrosSearchFormReducer,
  activitiesAddSearchForm: activitiesAddSearchFormReducer,
  exercisesAddSearchForm: exercisesAddSearchFormReducer,
  overviewSearchForm: overviewSearchFormReducer,
  shoppingListSearchForm: shoppingListSearchFormReducer,
  foodListSearchForm: foodListSearchFormReducer,
  supplementListSearchForm: supplementListSearchFormReducer,
  modals: modalsReducer,
  events: eventsReducer,
  popups: popupsReducer,
}