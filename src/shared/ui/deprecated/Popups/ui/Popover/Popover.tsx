import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode } from 'react';

import clsPopup from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    children: ReactNode;
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        children,
        trigger,
        direction = 'bottomRight',
    } = props;

    return (
        <HPopover className={classNames(clsPopup.popup, {}, [className])}>
            <HPopover.Button className={clsPopup.btnTrigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, [cls[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
