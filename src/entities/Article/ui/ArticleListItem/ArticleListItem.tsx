import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = 'GRID',
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const articleTags = article.type.join(', ');
    const views = (
        <span className={cls.metaViewInner}>
            <Text className={cls.metaViewNumber} description={String(article.views)} />
            <EyeIcon className={cls.metaViewIcon} />
        </span>
    );

    const onButtonReadHandler = useCallback(() => {
        navigate(`${RoutePaths.article_details}${article.id}`);
    }, [article.id, navigate]);

    if (view === 'LIST') {
        const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;

        return (
            <div className={classNames(cls.articleList_item, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.articleHeaderList}>
                        <div className={cls.articleHeader_listInner}>
                            <Avatar
                                className={cls.avatar}
                                size={30}
                                src={article.user.avatar}
                                alt={article.user.username}
                            />
                            <Text className={cls.username} description={article.user.username} />
                            <Text className={cls.date} description={article.createdAt} />
                        </div>
                        <Text className={cls.title} title={article.title} size={TextSize.L} />
                        <Text className={cls.metaTags} description={articleTags} />
                    </div>
                    <div className={cls.imageWrapper}>
                        <img className={cls.img} src={article.img} alt={article.title} />
                    </div>
                    <div className={cls.description}>
                        {textBlock && <ArticleTextBlockComponent block={textBlock} /> }
                    </div>
                    <div className={cls.footer}>
                        <Button
                            className={cls.readArticle}
                            onClick={onButtonReadHandler}
                        >
                            {t('читать статью')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleList_item, {}, [className, cls[view]])}>
            <Card onClick={onButtonReadHandler}>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text className={cls.date} description={article.createdAt} />
                </div>
                <div className={cls.titleWrapper}>
                    <div className={cls.metaInner}>
                        <Text className={cls.metaTags} description={articleTags} />
                        {views}
                    </div>
                    <Text className={cls.title} description={article.title} />
                </div>
            </Card>
        </div>
    );
});
