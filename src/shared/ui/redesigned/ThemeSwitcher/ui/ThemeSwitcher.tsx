import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../../Button';
import { Icon } from '../../Icon';

// eslint-disable-next-line baryshewww/layers-import
import { getUserJsonSettings, saveUserJsonSettings } from '@/entities/user';
import DarkThemeIcon from '@/shared/assets/newIcons/dark-theme-icon.svg';
import LightThemeIcon from '@/shared/assets/newIcons/light-theme-icon.svg';
import { Theme } from '@/shared/const/theme';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    /** 1. Сначала получаем тему (theme) из контекста */
    const { toggleTheme, theme } = useTheme();
    const dispatch = useAppDispatch();
    /** 2. Потом получаем тему (themeFromJsonSettings) для конкретного пользователя, из данных пришедших с бэкенда */
    const { theme: themeFromJsonSettings } = useSelector(getUserJsonSettings);

    /** 3. Устанавливаем для текущей темы сначала данные с бэкенда, а если их нет, то тогда из контекста */
    const [currentTheme, setCurrentTheme] = useState(themeFromJsonSettings || theme);

    /** toggleThemeHandler - Функция, которая устанавливает новую тему.
     *  Сначала отправляет их на бэкенд (асинхронная операция).
     *  И потом уже меняет стили у кнопки, чтобы toggle сдвинулся на соответсвующую иконку
     */
    const toggleThemeHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveUserJsonSettings({ theme: newTheme }));
            setCurrentTheme(newTheme);
        });
    }, [dispatch, toggleTheme]);

    const mods: Mods = {
        [cls.darkTheme]: currentTheme === Theme.DARK,
        [cls.lightTheme]: currentTheme === Theme.LIGHT,
    };

    return (
        <Button
            variant="themeSwitcher"
            onClick={toggleThemeHandler}
            className={classNames(cls.toggleTheme, mods, [className])}
        >
            <Icon
                className={cls.lightIcon}
                Svg={LightThemeIcon}
                width={20}
                height={20}
            />
            <Icon
                className={cls.darkIcon}
                Svg={DarkThemeIcon}
                width={20}
                height={20}
            />
        </Button>
    );
});
