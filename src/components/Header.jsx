import bars from '../assets/bars.svg';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    title: 'Uzbek',
    code: 'uz',
  },
  {
    title: 'English',
    code: 'en',
  },
  {
    title: 'Korean',
    code: 'ko',
  },
  {
    title: 'Russian',
    code: 'ru',
  },
  {
    title: 'Chinese',
    code: 'zh',
  },
  {
    title: 'Turkish',
    code: 'tr',
  },
  {
    title: 'Spanish',
    code: 'es',
  },
];

export default function Header() {
  const { t, i18n } = useTranslation();

  function handleChange(evt) {
    const value = evt.target.value;
    i18n.changeLanguage(value); 
  }
  return (
    <header className="bg-[#000000] px-8.75 py-8.75 fixed w-full">
      <div className="xl:max-w-[1104px] p-5 xl:mx-auto xl:flex xl:justify-between xl:items-center">
        {/* logo */}
        <a href="index.html" className="inline-block">
          <img src="./logo.svg" alt="logo" />
        </a>

        <ul className="flex gap-[30px] items-center">
          <a className="text-white text-[13px] font-bold">{t('home')}</a>
          <a className="text-white text-[13px] font-bold">{t('headphones')}</a>
          <a className="text-white text-[13px] font-bold">{t('speakers')}</a>
          <a className="text-white text-[13px] font-bold">{t('earphones')}</a>
        </ul>

        <div className="flex items-center gap-2">
          <img src={t('flag')} alt="flag" className="w-6 h-4 object-cover rounded" />

          <select
            onChange={handleChange}
            className="px-3 py-2 bg-transparent border border-white/20 rounded text-white text-sm font-bold uppercase cursor-pointer hover:border-[#D87D4A] focus:outline-none focus:border-[#D87D4A] transition-colors"
          >
            {languages.map(({ title, code }, index) => {
              return (
                <option
                  value={code}
                  key={index}
                  style={{ backgroundColor: '#1a1a1a', color: 'white' }}
                >
                  {title}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Burger menu (unchanged) */}
      {/* 
      <label
        htmlFor="bars"
        className="absolute right-5 top-5 peer-checked:[&~.burger-menu]:translate-x-0 duration-800 sm:hidden"
      >
        <img src={bars} alt="bars" />
      </label>
      <input className="peer" type="checkbox" id="bars" hidden />
      <label htmlFor="bars" className="peer-checked:block fixed inset-0 hidden"></label>

      <div className="burger-menu z-30 sm fixed top-0 left-0 w-[300px] -translate-x-full opacity-0 peer-checked:translate-x-0 peer-checked:opacity-100 transition-all duration-500 ease-in-out shadow-black h-screen bg-[rgba(58,48,84,1)] flex flex-col gap-[30px] pl-5 pr-5 pt-10 pb-10 rounded-r-xl">
        <nav className="flex flex-col gap-7.5">
          <ul className="flex flex-col gap-7.5">
            <a href="#" className="text-[20px] text-white font-bold active:border-b-red-500">
              Features
            </a>
            <a href="#" className="text-[20px] text-white font-bold active:border-b-red-500">
              Pricing
            </a>
            <a href="#" className="text-[20px] text-white font-bold active:border-b-red-500">
              Resources
            </a>
          </ul>

          <hr className="bg-[rgba(158,154,168,1)] w-full h-0.5" />

          <div className="flex flex-col  gap-7.5">
            <a href="#" className="text-white text-[18px] font-bold">
              Login
            </a>
            <a
              href="#"
              className="text-white inline-block text-[18px] font-bold rounded-[28px] bg-[rgba(43,208,208,1)] pt-2.5 pb-2.5 pl-5"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div> */}
    </header>
  );
}
