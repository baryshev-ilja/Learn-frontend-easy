import { Story } from '@storybook/react';

// eslint-disable-next-line baryshewww/layers-import
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme, ThemeNewStory } from '@/shared/const/theme';

/**
 * ThemeNewDecorator - Декоратор, создающий вокруг <StoryComponent /> окружение,
 * в котором присутствуют ThemeProvider и дополнительная обертка, добавляющая
 * дополнительные отступы во viewport Storybook-a
 *
 * @param theme - Тема, для отображения <StoryComponent /> и фона
 */
export function ThemeNewDecorator(theme: ThemeNewStory) {
    let themeForProvider: Theme;
    // let colorTextForStory: string;

    switch (theme) {
    case ThemeNewStory.DARK:
        themeForProvider = Theme.DARK;
        break;
    case ThemeNewStory.LIGHT:
        themeForProvider = Theme.LIGHT;
        break;
    case ThemeNewStory.WHITE:
        themeForProvider = Theme.LIGHT;
        break;
    default:
        break;
    }

    return (StoryComponent: Story) => (
        <ThemeProvider initialTheme={themeForProvider}>
            <div
                className={`${themeForProvider}`}
                style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontFamily: 'Gilroy',
                    fontWeight: 500,
                    background: `${theme}`,
                    minHeight: '100vh',
                    padding: '25px 40px',
                    // color: `${colorTextForStory}`,
                }}
            >
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
}
