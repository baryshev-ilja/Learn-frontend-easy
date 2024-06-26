import { memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    content: ReactElement;
    header: ReactElement;
    sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        content,
        header,
        sidebar,
    } = props;
    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            <div className={cls.header}>
                {header}
            </div>
            <div className={cls.contentWrapper}>
                <div className={cls.contentInner}>
                    <div className={cls.content}>{content}</div>
                    <div className={cls.sidebar}>{sidebar}</div>
                </div>
            </div>
        </div>
    );
});
