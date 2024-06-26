import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

import { ThunkConfigApi } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeature: Partial<FeatureFlags>;
}

/**
 * updateFeatureFlags - AsyncThunk, который отправляет асинхронный запрос на бекенд
 * (с помощью rtk - updateFeatureFlagsMutation) и меняет у конкретного пользователя
 * в базе данных определенную фичу (newFeature).
 *
 * После этого, чтобы обновить данные на клиенте, выполняется принудительная перезагрузка страницы
 */
export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagsOptions, ThunkConfigApi<string>>(
    'user/saveUserJsonSettings',
    // eslint-disable-next-line
    async ({ userId, newFeature }, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        try {
            await dispatch(updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeature,
                },
            }));

            window.location.reload();
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
