"use client";

import * as foodSearchFormActions from './features/food-search-form/actions';
import * as mealsAddSearchFormActions from './features/meals-add-search-form/actions';
import * as manageMacrosSearchFormActions from './features/manage-macros-search-form/actions';
import * as activitiesAddSearchFormActions from './features/activities-add-search-form/actions';
import * as exercisesAddSearchFormActions from './features/exercises-add-search-form/actions';
import * as overviewSearchFormActions from './features/overview-search-form/actions';
import * as shoppingListSearchFormActions from './features/shopping-list-search-form/actions';
import * as foodListSearchFormActions from './features/food-list-search-form/actions';
import * as supplementListSearchFormActions from './features/supplement-list-search-form/actions';
import * as modalsActions from './features/modals/actions';
import * as eventsActions from './features/events/actions';
import * as popupsActions from './features/popups/actions';

export const allActions = {
	foodSearchForm: foodSearchFormActions,
	mealsAddSearchForm: mealsAddSearchFormActions,
	manageMacrosSearchForm: manageMacrosSearchFormActions,
	activitiesAddSearchForm: activitiesAddSearchFormActions,
	exercisesAddSearchForm: exercisesAddSearchFormActions,
	overviewSearchForm: overviewSearchFormActions,
	shoppingListSearchForm: shoppingListSearchFormActions,
	foodListSearchForm: foodListSearchFormActions,
	supplementListSearchForm: supplementListSearchFormActions,
	modals: modalsActions,
	events: eventsActions,
	popups: popupsActions,
}