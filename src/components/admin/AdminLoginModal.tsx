import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Icon } from '../ui/Icon';
import { Language } from '../../types';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: () => void;
  lang: Language;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccessLogin,
  lang,
}) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const isAr = lang === 'ar';

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Default master passcodes: 'admin', 'gofrosts', or empty/demo quick enter
    if (passcode.trim() === 'admin' || passcode.trim() === 'gofrosts' || passcode.trim() === '2026') {
      setError(false);
      setPasscode('');
      onSuccessLogin();
    } else {
      setError(true);
    }
  };

  const handleQuickDemoEnter = () => {
    setError(false);
    setPasscode('');
    onSuccessLogin();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isAr ? 'بوابة إدارة المصنع والتحكم' : 'GoFrosts Enterprise Admin Portal'}
      subtitle={isAr ? 'تسجيل دخول آمن لمسؤولي تصدير جوفروستس' : 'Authorized Access for Export & Plant Directors'}
      maxWidth="md"
    >
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="flex items-center justify-center py-4">
          <div className="w-16 h-16 rounded-2xl bg-black border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl">
            <Icon name="ShieldCheck" size={32} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-neutral-700">
            {isAr ? 'رمز المرور أو كود الإدارة (Passcode):' : 'Admin Security Key:'}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-neutral-400">
              <Icon name="Lock" size={16} />
            </div>
            <input
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                if (error) setError(false);
              }}
              placeholder={isAr ? 'اكتب admin أو اضغط دخول سريع' : 'Enter pass (or click Quick Demo Enter)'}
              className={`w-full ps-10 pe-4 py-3 rounded-xl border ${
                error ? 'border-rose-500 focus:ring-rose-500' : 'border-neutral-300 focus:ring-emerald-500'
              } text-sm focus:outline-none focus:ring-2 bg-neutral-50 text-neutral-900 transition-all font-mono`}
              autoFocus
            />
          </div>
          {error && (
            <p className="text-xs text-rose-600 font-bold flex items-center gap-1 mt-1">
              <Icon name="AlertCircle" size={13} />
              <span>{isAr ? 'رمز المرور غير صحيح. اكتب admin أو اضغط دخول فوري' : 'Invalid key. Type admin or use quick enter'}</span>
            </p>
          )}
        </div>

        <div className="space-y-2 pt-2">
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-black hover:bg-neutral-900 active:scale-[0.98] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Icon name="LogIn" size={16} className="text-emerald-400" />
            <span>{isAr ? 'دخول لوحة التحكم' : 'Authenticate & Enter'}</span>
          </button>

          <button
            type="button"
            onClick={handleQuickDemoEnter}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Icon name="Key" size={14} className="text-emerald-600" />
            <span>{isAr ? 'دخول فوري كمسؤول (Quick Access)' : 'Instant 1-Click Admin Access'}</span>
          </button>
        </div>
      </form>
    </Modal>
  );
};
