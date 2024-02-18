import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article } from 'entities/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view: ArticleView;
    isLoading?: boolean;
}

const getArticleSkeletons = (view: ArticleView) => new Array(view === 'LIST' ? 3 : 10)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton view={view} key={index} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                {getArticleSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (item: Article) => <ArticleListItem key={item.id} article={item} view={view} />;

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
        </div>
    );
});
