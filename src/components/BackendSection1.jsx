import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import img from '../assets/hero.svg';

export default function BackendSection1() {
  const { i18n, t } = useTranslation();
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(`https://json-api.uz/api/project/multi-languages/${i18n.language}`)
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      })
      .catch((err) => console.log(err));
  }, [i18n.language]);

  if (!state) return <p>Loading...</p>;

  const product = state.data[0];

  return (
    <section className="pt-[260px] pb-40">
      <div className="xl:max-w-[1104px] p-5 xl:mx-auto xl:flex xl:justify-between xl:items-center gap-[125px]">
        <img src={img} alt="hero-img" />

        <div>
          <h1 className="text-[40px] mb-[32px] font-bold text-[#000000]">{product.name}</h1>
          <p className="text-[15px] mb-[32px] font-medium text-[#616161]">{product.description}</p>

          <h3 className="text-[18px] mb-[48px] font-bold text-[#000000]">${product.price}</h3>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-between w-[120px] h-12 bg-[#F1F1F1] px-4">
              <button className="text-gray-400 hover:text-[#D87D4A] font-bold text-xl transition-colors">
                −
              </button>
              <span className="font-bold text-black text-sm">1</span>
              <button className="text-gray-400 hover:text-[#D87D4A] font-bold text-xl transition-colors">
                +
              </button>
            </div>
            <button className="flex items-center justify-center w-[160px] h-12 text-white text-[13px] bg-[#D87D4A] px-4">
              {t('addToCart')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
