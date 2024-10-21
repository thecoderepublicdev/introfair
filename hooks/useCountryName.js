import { useEffect, useState } from "react";
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import trLocale from 'i18n-iso-countries/langs/tr.json';
import ruLocale from 'i18n-iso-countries/langs/ru.json';
import useTranslation from "next-translate/useTranslation";

export default function useCountryName(countryCode) {
    const { lang } = useTranslation();
    const [countryName, setCountryName] = useState('[Unknown Country :(]');

    useEffect(() => {
        if (!countryCode || !lang) return;  // Hem countryCode hem de locale kontrolü ekledik

        // Locale'leri kaydet
        countries.registerLocale(enLocale);
        countries.registerLocale(trLocale);
        countries.registerLocale(ruLocale);

        // Dil veya varsayılan dil ile ülke adını al
        const name = countries.getName(countryCode, lang) || countries.getName(countryCode, lang);
        
        // Ülke ismini state'e yerleştir
        setCountryName(name || '[Unknown Country :(]');
    }, [countryCode, lang]); // Bağımlılıklar: countryCode ve locale

    return countryName;
}