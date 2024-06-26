import { useTranslation } from 'react-i18next';

import { ArticleSortTypes, ArticleView } from '@/entities/article';
import { SortByFiltersArticleList } from '@/features/sortArticleList';
import { ToggleViewRedesigned } from '@/features/toggleViewArticleList';
import SearchIcon from '@/shared/assets/newIcons/search-icon.svg';
import { typedMemo } from '@/shared/const/typedMemo';
import { TypesOfOrders } from '@/shared/types/orderTypes';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Tabs, TabsItem } from '@/shared/ui/redesigned/Tabs';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps<T extends string> {
    className?: string;
    view: string;
    sort: ArticleSortTypes;
    order: TypesOfOrders;
    search: string | number;
    type: T;
    typesTabs: TabsItem<T>[];
    onClickView: (view: ArticleView) => void;
    onChangeSort: (value: ArticleSortTypes) => void;
    onChangeOrder: (value: TypesOfOrders) => void;
    onTabClick: (tab: TabsItem<T>) => void;
    onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = typedMemo(<T extends string>(props: ArticlesFiltersProps<T>) => {
    const {
        className,
        view,
        sort,
        order,
        search,
        type,
        typesTabs,
        onClickView,
        onChangeSort,
        onChangeOrder,
        onTabClick,
        onChangeSearch,
    } = props;
    const { t } = useTranslation();
    return (
        <>
            <CardUI gap="16" padding="16" borderRadius="16" className={cls.uiBlock}>
                <Input
                    labelElement={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Найти')}
                    iconInput={(
                        <Icon
                            Svg={SearchIcon}
                            width={22}
                            height={22}
                        />
                    )}
                />
                <VStack gap="8">
                    <Text ui={t('Выбор отображения')} variant="ui" />
                    <ToggleViewRedesigned view={view} onClickView={onClickView} />
                </VStack>
                <VStack gap="8">
                    <Text ui={t('Сортировать по')} variant="ui" />
                    <SortByFiltersArticleList
                        orderValue={order}
                        sortValue={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                </VStack>
            </CardUI>
            <CardUI gap="16" padding="16" borderRadius="16" className={cls.uiBlock}>
                <Tabs
                    tabs={typesTabs}
                    currentValue={type}
                    onTabClick={onTabClick}
                />
            </CardUI>
        </>
    );
});
