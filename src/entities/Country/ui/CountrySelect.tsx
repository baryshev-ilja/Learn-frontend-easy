import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraina, content: Country.Ukraina },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const selectChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Country);
        }
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            onChange={selectChangeHandler}
            label={t('Выберите страну')}
            options={options}
            readonly={readonly}
        />
    );
};