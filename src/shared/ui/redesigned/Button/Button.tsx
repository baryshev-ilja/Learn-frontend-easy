import React, {
    ButtonHTMLAttributes, CSSProperties, memo, ReactNode,
} from 'react';

import { AdditionalCls, classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant =
    'clear'
    | 'primary'
    | 'auth'
    | 'themeSwitcher'
    | 'viewSwitcher'
    | 'select'
    | 'errorValidation'
    | 'userName';

type ButtonPadding = 'default' | '2' | '4' | '8' | '12' | '16';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    /**
     * variant - добавляет кнопке необходимый вид. Можно использовать только когда надо переопределить дефолтный вид
     */
    variant?: ButtonVariant;
    disabled?: boolean;
    children?: ReactNode;
    /**
     * tagName - В некоторых случаях нужно, чтобы кнопка сохранила внешний вид кнопки, но была семантически другим тегом
     */
    tagName?: keyof HTMLElementTagNameMap;
    fullWidth?: boolean;
    buttonPadding?: ButtonPadding;
    buttonWidth?: string | number;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'primary',
        disabled,
        tagName,
        fullWidth,
        buttonPadding = 'default',
        buttonWidth,
        ...otherProps
    } = props;

    const mapPaddingToButton = {
        default: 'paddingDefault',
        2: 'p2',
        4: 'p4',
        8: 'p8',
        12: 'p12',
        16: 'p16',
    };

    const paddingCls = mapPaddingToButton[buttonPadding];

    const styles: CSSProperties = {
        width: buttonWidth,
    };

    const modsCls: Mods = {
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls[paddingCls]]: buttonPadding,
    };

    const additionalCls: AdditionalCls = [
        className,
        cls[variant],
    ];

    const Tag = tagName;

    if (Tag) {
        return (
            <Tag
                data-testid="button-test"
                style={styles}
                className={classNames(cls.button, modsCls, additionalCls)}
            >
                {children}
            </Tag>
        );
    }

    return (
        <button
            data-testid="button-test"
            type="button"
            style={styles}
            className={classNames(cls.button, modsCls, additionalCls)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
