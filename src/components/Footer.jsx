import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-[#000000] px-8.75 py-8.75 w-full relative">
      <div className="xl:max-w-[1104px] p-5 xl:mx-auto xl:flex flex-col gap-[36px] xl:justify-between xl:items-center ">
        <span className="border-[#D87D4A] border-4 w-[100px] bg-[#D87D4A] absolute top-0 left-[15%]"></span>
        <div className="flex items-center justify-between w-full">
          <a href="index.html" className="inline-block">
            <img src="./logo.svg" alt="logo" />
          </a>

          <ul className="flex gap-[30px] items-center">
            <a className="text-white text-[13px] font-bold">{t('home')}</a>
            <a className="text-white text-[13px] font-bold">{t('headphones')}</a>
            <a className="text-white text-[13px] font-bold">{t('speakers')}</a>
            <a className="text-white text-[13px] font-bold">{t('earphones')}</a>
          </ul>
        </div>

        <div className='flex justify-between items-center w-full'>
          <div className="max-w-[540px] w-full">
            <p className="text-[15px] text-[#8e8e8e] mb-[32px]">{t('footerText')}</p>

            <p className="text-[15px] text-[#8e8e8e]">@ikromovic_dev 2026. All Rights Reserved</p>
          </div>

          <ul className="flex items-center gap-5">
            <li className='text-white text-[24px]'>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li className='text-white text-[24px]'>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li className='text-white text-[24px]'>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
