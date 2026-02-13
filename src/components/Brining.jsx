import { useTranslation } from 'react-i18next';
import boyImg from '../assets/the-boy.svg';

export default function Brining() {
  const { i18n, t } = useTranslation();

  return (
    <section className='pb-40'>
      <div className="xl:max-w-[1104px] p-5 xl:mx-auto xl:flex xl:justify-between xl:items-center gap-[125px]">
        <div className="max-w-[445px] w-full">
          <h2 className="text-[40px] mb-[32px]">
            {t('bringingYouThe')} <span className="text-[#D87D4A]">{t('bestAudioGear')}</span>
          </h2>
          <p className="text-[15px] font-medium text-[#6e6e6e]">{t('bringingDescription')}</p>
        </div>

        <img src={boyImg} alt="boy" />
      </div>
    </section>
  );
}
