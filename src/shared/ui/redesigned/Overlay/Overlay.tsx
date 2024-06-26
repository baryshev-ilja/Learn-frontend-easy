import { Interpolation } from '@react-spring/web';
import { WithAnimated } from '@react-spring/web/dist/declarations/src/animated';
import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

type StyleAttr = Omit<CSSProperties, 'display' | 'opacity'>;

// TODO
// Понять для чего эти свойства в интерфейсе
interface StyleAttrForSpringLib extends StyleAttr {
    display?: Interpolation<number, 'none' | 'block'>
    opacity?: Interpolation<number, 0 | 1>;
}

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    // TODO
    // Выяснить для чего этот параметр
    as?: ReturnType<WithAnimated>;
    style?: StyleAttrForSpringLib;
}

export const Overlay = memo((props: OverlayProps) => {
    const {
        className,
        onClick,
        as,
        style,
    } = props;

    // TODO
    // Выяснить как это работает
    if (as) {
        const Tag = as;
        return (
            <Tag
                className={classNames(cls.overlay, {}, [className])}
                onClick={onClick}
                style={style}
            />
        );
    }

    return (
        <div
            className={classNames(cls.overlay, {}, [className])}
            onClick={onClick}
        />
    );
});
