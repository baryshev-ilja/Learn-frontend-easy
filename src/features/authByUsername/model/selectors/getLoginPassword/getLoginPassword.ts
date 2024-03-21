import { createSelector } from '@reduxjs/toolkit';

import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = createSelector(
    getLoginState,
    (loginFormState) => loginFormState?.password || '',
);