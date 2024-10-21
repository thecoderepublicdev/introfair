import Modal from './Modal';
import Flag from './Flag';
import { Fragment, useState } from 'react';
import classNames from 'classnames';
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


export default function LanguageSwitch({
    flagSize = "w-8 h-8"
}) {
    const { t, lang } = useTranslation("common");
    const [currentLanguage, setCurrentLanguage] = useState(lang);

    const AvailableLanguages = [
        {
            countryCode: "US",
            languageCode: "en",
            languageName: "English (U.S.)"
        },
        {
            countryCode: "TR",
            languageCode: "tr",
            languageName: "Türkçe (Türkiye)"
        },
        {
            countryCode: "RU",
            languageCode: "ru",
            languageName: "Русский (Russia)"
        },
    ];

    return (
        <Fragment>
            <Modal>
                <Modal.Button className='p-[16px] transition-all ease-in-out text-md hover:bg-[#034693]/10 rounded-full cursor-pointer text-black/50'>
                    <Flag 
                        title="Türkiye - TR"
                        country={AvailableLanguages.filter(lang => lang.languageCode === currentLanguage)[0].countryCode} 
                        className={flagSize}
                    />
                </Modal.Button>
                <Modal.Content>
                    <div className='grid mb-4'>
                        <label className='font-bold text-xl'>{t('localizationModal.title')}</label>
                        <p className='text-gray-500 text-md'>{t('localizationModal.description')}</p>
                    </div>
                    <div className='grid gap-4'>
                        {AvailableLanguages.map((language, index) => (
                            <button className={classNames(
                                "rounded-xl p-4 flex justify-between items-center outline-none content-center gap-4 bg-slate-50 hover:bg-slate-200", {
                                    ["text-black bg-green-50"]: currentLanguage === language.languageCode
                                } 
                            )} onClick={async () => {
                                await setLanguage(language.languageCode)
                                await setCurrentLanguage(language.languageCode)
                            }} key={index}>
                                <div className='flex gap-4 items-center content-center'>
                                    <Flag size="w-40 h-40" country={language.countryCode} title={language.languageName}/>
                                    <label>{language.languageName}</label>
                                </div>
                                {currentLanguage === language.languageCode && <CheckCircleIcon className='text-green-700 w-6 h-6'/>}
                            </button>
                        ))}
                    </div>
                </Modal.Content>
            </Modal>
        </Fragment>
    );
}
