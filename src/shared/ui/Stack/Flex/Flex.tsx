import { AdditionalCls, classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end' | 'between';
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
    between: cls.alignBetween,
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
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    max?: boolean;
    gap?: FlexGap;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        max,
        gap,
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    const classes: AdditionalCls = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
};
