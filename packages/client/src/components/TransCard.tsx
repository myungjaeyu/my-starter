import React from 'react'

import { useTranslation } from 'react-i18next'

import Button from '@components/atoms/Button'

interface ITransCardProps {}

const TransCard = ({}: ITransCardProps) => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => i18n.changeLanguage(lng)

    return (
        <div>
            <p>{t('hi')}</p>

            <p>{t('a.b')}</p>

            <Button onClick={() => changeLanguage('ko')}>ko</Button>
            <Button onClick={() => changeLanguage('mn')}>mn</Button>
        </div>
    )
}

export default TransCard
