import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    useDynamicModuleLoad({
        reducers: initialReducers,
        removeAfterUnmount: true,
    });

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const labelUsername = t('Введите логин >');
    const labelPassword = t('Введите пароль >');

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text description={t('Вы неправильно ввели логин или пароль')} theme={ThemeText.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                value={username}
                onChange={onChangeUsername}
                labelElement={labelUsername}
                autofocus
                id="username"
            />
            <Input
                type="text"
                className={cls.input}
                value={password}
                onChange={onChangePassword}
                labelElement={labelPassword}
                id="password"
            />
            <Button
                className={cls.btn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
