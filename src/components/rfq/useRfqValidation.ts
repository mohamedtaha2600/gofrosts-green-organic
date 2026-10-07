import { useState, useCallback, useMemo } from 'react';

export interface RfqFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  intlPhone: string;
  estimatedQuantity: string;
  targetCountry: string;
  specsAndPackaging: string;
}

export function useRfqValidation(formData: RfqFormData) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const markTouched = useCallback((fieldName: keyof RfqFormData) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  }, []);

  const errors = useMemo(() => {
    return {
      fullName: formData.fullName.trim().length >= 3,
      companyName: formData.companyName.trim().length >= 2,
      workEmail: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.workEmail.trim()),
      intlPhone: /^\+?[0-9\s\-()]{8,20}$/.test(formData.intlPhone.trim()) && formData.intlPhone.replace(/\D/g, '').length >= 8,
      estimatedQuantity: formData.estimatedQuantity.trim().length >= 2,
    };
  }, [formData]);

  const isValid = useMemo(() => {
    return Object.values(errors).every(Boolean);
  }, [errors]);

  const shouldShowError = useCallback((fieldName: keyof typeof errors) => {
    return touched[fieldName] && !errors[fieldName];
  }, [touched, errors]);

  const markAllTouched = useCallback(() => {
    setTouched({
      fullName: true,
      companyName: true,
      workEmail: true,
      intlPhone: true,
      estimatedQuantity: true,
    });
  }, []);

  const resetTouched = useCallback(() => {
    setTouched({});
  }, []);

  return {
    errors,
    isValid,
    shouldShowError,
    markTouched,
    markAllTouched,
    resetTouched,
  };
}
