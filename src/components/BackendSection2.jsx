import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Atom } from 'react-loading-indicators';

export default function BackendSection2() {
  const { i18n, t } = useTranslation();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = 'hidden';

    fetch(`https://json-api.uz/api/project/multi-languages/${i18n.language}`)
      .then((res) => res.json())
      .then((res) => {
        setState(res);
        setLoading(false);
        document.body.style.overflow = 'auto';
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        document.body.style.overflow = 'auto';
      });
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
        <Atom color="#D87D4A" size="medium" />
      </div>
    );
  }

  const product = state.data[0];
  const includes = product.includes;

  return (
    <section className="pb-40">
      <div className="xl:max-w-[1104px] p-5 xl:mx-auto xl:flex xl:justify-between xl:items-center gap-[125px]">
        <div className='flex items-start gap-[125px]'>
          <div className='max-w-[630px]'>
            <h2 className="text-[32px] font-bold mb-[32px]">{t('features')}</h2>
            <p className="text-[15px] font-medium mb-[32px]">{product.features}</p>
          </div>
          <div>
            <h3 className="text-[32px] font-bold mb-[32px]">{t('inTheBox')}</h3>
            {includes.map((item, index) => (
              <p key={index} className="mb-2 text-[#5f5f5f]">
                <span className="font-bold mr-6 text-[#D87D4A]">{item.quantity}x</span>
                {item.item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
