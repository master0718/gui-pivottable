"use client"

import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allActions } from '@/redux/root-actions'

export const useActions = (module) => {
	const dispatch = useDispatch();
	const actions = allActions[module];

	if (!actions) {
		console.error(`Module ${module} not found in allActions`);
		return {};
	}

	return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
}