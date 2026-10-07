import React, { useState, useMemo, memo } from 'react';
import { Language, Product } from '../types';
import { getTranslation } from '../i18n';
import { Icon } from './ui/Icon';

interface ExportLogisticsProps {
  products: Product[];
  lang: Language;
  onOpenRfq: () => void;
}

export const ExportLogisticsSection: React.FC<ExportLogisticsProps> = memo(({
  lang,
  onOpenRfq,
}) => {
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';

  const [containerType, setContainerType] = useState<'40hc' | '20reefer'>('40hc');
  const [packFormat, setPackFormat] = useState<'retail_400g' | 'bulk_10kg' | 'bulk_20kg'>('retail_400g');
  const [loadingMethod, setLoadingMethod] = useState<'floor' | 'palletized'>('floor');
  const [destinationRegion, setDestinationRegion] = useState<'europe' | 'gulf' | 'usa' | 'asia'>('europe');

  const { cartons, netWeightMT } = useMemo(() => {
    let c = 0;
    let net = 0;

    if (containerType === '40hc') {
      if (packFormat === 'retail_400g') {
        c = loadingMethod === 'floor' ? 2800 : 2300;
        net = (c * 8) / 1000;
      } else if (packFormat === 'bulk_10kg') {
        c = loadingMethod === 'floor' ? 2500 : 2100;
        net = (c * 10) / 1000;
      } else {
        c = loadingMethod === 'floor' ? 1250 : 1050;
        net = (c * 20) / 1000;
      }
    } else {
      if (packFormat === 'retail_400g') {
        c = loadingMethod === 'floor' ? 1300 : 1050;
        net = (c * 8) / 1000;
      } else if (packFormat === 'bulk_10kg') {
        c = loadingMethod === 'floor' ? 1150 : 950;
        net = (c * 10) / 1000;
      } else {
        c = loadingMethod === 'floor' ? 580 : 480;
        net = (c * 20) / 1000;
      }
    }

    return { cartons: c, netWeightMT: net.toFixed(1) };
  }, [containerType, packFormat, loadingMethod]);

  const transitTimes = {
    europe: {
      days: isArabic ? '4 - 8 أيام' : '4 - 8 Days',
      ports: isArabic ? 'جنوى، مرسيليا، روتردام، فالنسيا، هامبورغ' : 'Genoa, Marseille, Rotterdam, Valencia, Hamburg',
      label: isArabic ? 'أوروبا' : 'Europe',
    },
    gulf: {
      days: isArabic ? '3 - 6 أيام' : '3 - 6 Days',
      ports: isArabic ? 'جدة الإسلامي، جبل علي، الدمام، الشويخ' : 'Jeddah, Jebel Ali, Dammam, Shuwaikh',
      label: isArabic ? 'الخليج العربي' : 'Arabian Gulf',
    },
    usa: {
      days: isArabic ? '14 - 18 يوماً' : '14 - 18 Days',
      ports: isArabic ? 'نيويورك، ميامي، هيوستن، سافانا' : 'New York, Miami, Houston, Savannah',
      label: isArabic ? 'أمريكا الشمالية' : 'North America',
    },
    asia: {
      days: isArabic ? '16 - 22 يوماً' : '16 - 22 Days',
      ports: isArabic ? 'سنغافورة، بورت كلانج، طوكيو، شنغهاي' : 'Singapore, Port Klang, Tokyo, Shanghai',
      label: isArabic ? 'آسيا' : 'Asia',
    },
  };

  return (
    <section id="logistics" className="py-20 bg-white border-b border-slate-200/80 select-none">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.logistics.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.logistics.description}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-6">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-200/80 pb-3">
              <Icon name="Calculator" size={18} className="text-emerald-600" />
              <span>{isArabic ? 'حاسبة الشحن وحمولة الحاويات التصديرية' : 'Configure Export Container Setup'}</span>
            </div>

            {/* Container Size */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                {isArabic ? '1. حجم ونوع الحاوية:' : '1. Reefer Container Size:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContainerType('40hc')}
                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-bold text-start flex items-center justify-between transition-all cursor-pointer ${
                    containerType === '40hc'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{isArabic ? 'حاوية 40 قدم هاي كيوب مبردة' : '40ft High Cube Reefer'}</span>
                  {containerType === '40hc' && <Icon name="CheckCircle2" size={16} />}
                </button>
                <button
                  type="button"
                  onClick={() => setContainerType('20reefer')}
                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-bold text-start flex items-center justify-between transition-all cursor-pointer ${
                    containerType === '20reefer'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{isArabic ? 'حاوية 20 قدم قياسية مبردة' : '20ft Standard Reefer'}</span>
                  {containerType === '20reefer' && <Icon name="CheckCircle2" size={16} />}
                </button>
              </div>
            </div>

            {/* Packaging Format */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                {isArabic ? '2. نظام ونمط التعبئة والتغليف:' : '2. Packaging & Format:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPackFormat('retail_400g')}
                  className={`p-3 rounded-2xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    packFormat === 'retail_400g'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{isArabic ? 'تجزئة 400 جم' : 'Retail 400g'}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">{isArabic ? '20 كيساً / كرتونة 8 كجم' : '20 bags / 8kg box'}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPackFormat('bulk_10kg')}
                  className={`p-3 rounded-2xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    packFormat === 'bulk_10kg'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{isArabic ? 'كرتون جملة 10 كجم' : 'Bulk 10kg Carton'}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">{isArabic ? 'بطانة بوليثيلين معتمدة' : 'Polyethylene Liner'}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPackFormat('bulk_20kg')}
                  className={`p-3 rounded-2xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    packFormat === 'bulk_20kg'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{isArabic ? 'شكائر كبرى 20 كجم' : 'Bulk 20kg Bag'}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">{isArabic ? 'للمصانع والمطابخ المركزية' : 'Industrial Supply'}</div>
                </button>
              </div>
            </div>

            {/* Loading Type */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                {isArabic ? '3. طريقة الرص داخل الحاوية:' : '3. Container Loading Method:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLoadingMethod('floor')}
                  className={`p-3 rounded-2xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    loadingMethod === 'floor'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isArabic ? 'رص أرضي مباشر (أقصى حمولة كراتين)' : 'Floor Loaded (Max Payload)'}
                </button>
                <button
                  type="button"
                  onClick={() => setLoadingMethod('palletized')}
                  className={`p-3 rounded-2xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    loadingMethod === 'palletized'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isArabic ? 'بالتات خشبية معالجة حرارياً (22-24 بالتة)' : 'Palletized (ISPM-15 Certified)'}
                </button>
              </div>
            </div>

            {/* Destination Region */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                {isArabic ? '4. الوجهة والمنطقة الجغرافية المستهدفة:' : '4. Target Destination Region:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['europe', 'gulf', 'usa', 'asia'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setDestinationRegion(r)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                      destinationRegion === r
                        ? 'bg-emerald-950 text-white border-emerald-950 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {transitTimes[r].label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-emerald-900/80 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">
                {isArabic ? 'ملخص الحمولة التقديرية للحاوية' : 'Estimated Container Summary'}
              </span>
              <h3 className="text-xl font-bold">
                {containerType === '40hc'
                  ? (isArabic ? 'حاوية 40 قدم هاي كيوب مبردة' : '40ft High Cube Reefer')
                  : (isArabic ? 'حاوية 20 قدم مبردة' : '20ft Reefer')}
              </h3>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-emerald-200/80 block mb-1">
                  {isArabic ? 'عدد الكراتين' : 'Carton Count'}
                </span>
                <span className="text-2xl font-black text-white font-mono tabular-nums">
                  {cartons.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">
                  {isArabic ? 'كرتونة تصدير معتمدة' : 'Master Cartons'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-emerald-200/80 block mb-1">
                  {isArabic ? 'الوزن الصافي' : 'Net Weight'}
                </span>
                <span className="text-2xl font-black text-emerald-400 font-mono tabular-nums">
                  {netWeightMT} <span className="text-xs font-normal text-slate-300">{isArabic ? 'طن' : 'MT'}</span>
                </span>
                <span className="text-[10px] text-emerald-300/80 block mt-0.5">
                  {isArabic ? 'طن متري صافي' : 'Metric Tons'}
                </span>
              </div>
            </div>

            {/* Transit and Temperature Data */}
            <div className="space-y-3 text-xs divide-y divide-white/10">
              <div className="pt-2 flex items-center justify-between">
                <span className="text-emerald-200/80 flex items-center gap-1.5">
                  <Icon name="Thermometer" size={15} className="text-sky-400" />
                  {isArabic ? 'حرارة الضبط بالحاوية:' : 'Setpoint Temp:'}
                </span>
                <span className="font-bold text-sky-300 font-mono">-18°C إلى -22°C</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-emerald-200/80 flex items-center gap-1.5">
                  <Icon name="Clock" size={15} className="text-amber-400" />
                  {isArabic ? 'زمن الإبحار التقديري:' : 'Estimated Transit:'}
                </span>
                <span className="font-bold text-amber-300">{transitTimes[destinationRegion].days}</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-emerald-200/80 flex items-center gap-1.5">
                  <Icon name="Anchor" size={15} className="text-emerald-400" />
                  {isArabic ? 'موانئ الانطلاق المصرية:' : 'Egyptian Ports:'}
                </span>
                <span className="font-bold text-slate-200">{isArabic ? 'الإسكندرية، دمياط، بورسعيد' : 'Alexandria, Damietta'}</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-emerald-200/80 flex items-center gap-1.5">
                  <Icon name="Globe2" size={15} className="text-teal-400" />
                  {isArabic ? 'موانئ الوصول المستهدفة:' : 'Destination Ports:'}
                </span>
                <span className="font-bold text-slate-200 text-end text-[11px] max-w-[190px]">
                  {transitTimes[destinationRegion].ports}
                </span>
              </div>
            </div>

            {/* RFQ Trigger CTA */}
            <button
              onClick={onOpenRfq}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <Icon name="Send" size={16} />
              <span>{isArabic ? 'طلب تسعير رسمي لهذه المواصفات' : 'Get Official Quotation for this Setup'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

ExportLogisticsSection.displayName = 'ExportLogisticsSection';
