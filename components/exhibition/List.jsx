import { useState, useEffect } from 'react';
import Exhibitions from "@data/Exhibitions";
import useFilterByYear from "hooks/useFilterByYear";
import ExhibitionBox from "@components/shared/ExhibitionBox";
import useTranslation from "next-translate/useTranslation";
import IconBox from '@components/shared/IconBox';

export default function ExhibitionList({ year }) {
    const { t, lang } = useTranslation('exhibition-calendar');
    const list = useFilterByYear(Exhibitions, year).filter((c) => c.isActive)

    return (
        <div className="grid gap-4">
            <IconBox
                icon='calendar-days'
                subtitle={t('exhibitionListSection.subtitle', {count: list.length})}
                title={t('exhibitionListSection.title', {year: year})}
            />
            <div className="grid gap-4">
                {list.map((exhibition, index) => (
                    <ExhibitionBox
                        key={index}
                        logo={exhibition.logo}
                        description={exhibition.description[lang]}
                        name={exhibition.name}
                        date={exhibition.date}
                        country={exhibition.country}
                    />
                ))}
            </div>
        </div>
    );
}