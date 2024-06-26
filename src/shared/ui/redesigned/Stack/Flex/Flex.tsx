import { ReactNode } from 'react';

import { AdditionalCls, classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '2' | '4' | '8' | '12' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    2: cls.gap2,
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

export interface FlexProps {
    className?: string;
    children?: ReactNode;
    /** justify - Управляет свойством justify-content */
    justify?: FlexJustify;
    /** align - Управляет свойством align-items */
    align?: FlexAlign;
    /** direction - Управляет свойством flex-direction */
    direction: FlexDirection;
    /** max - Растягивает элемент на всю ширину */
    max?: boolean;
    /** gap - Управляет свойством gap */
    gap?: FlexGap;
    /** tagName - Делает флекс-контейнером любой переданный сюда тег. По дефолту стоит div */
    tagName?: keyof HTMLElementTagNameMap;
    'data-testid'?: string;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align,
        direction = 'row',
        max,
        gap,
        tagName = 'div',
        'data-testid': dataTestId = '',
    } = props;

    const Tag = tagName;

    const mods: Mods = {
        [cls.max]: max,
    };

    const classes: AdditionalCls = [
        className,
        justifyClasses[justify],
        align && alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    return (
        <Tag
            className={classNames(cls.flex, mods, classes)}
            data-testid={dataTestId}
        >
            {children}
        </Tag>
    );
};
