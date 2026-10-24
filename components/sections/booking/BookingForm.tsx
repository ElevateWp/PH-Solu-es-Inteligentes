'use client';

import React, { useState } from 'react';
import { SERVICES, CLINIC_INFO } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  preferredDate?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    service: 'manutencao-e-conserto-de-ar-condicionado',
    preferredDate: '',
    preferredTime: 'Morning (07:00 – 12:00)',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Informe seu nome completo.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Informe um telefone válido.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Informe um e-mail válido.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Selecione a data desejada para o atendimento.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief technical triage intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 bg-forest text-paper transition-all duration-500 ease-nova-ease">
        <span className="font-body text-13 text-lime block mb-2 font-medium uppercase tracking-wider">
          Solicitação recebida
        </span>
      <h3 className="font-display text-33 md:text-41 text-paper mb-4">
          Solicitação recebida
        </h3>
        <p className="font-body text-17 text-paper/90 leading-relaxed mb-6">
          Obrigado(a), {formData.fullName}. Nossa equipe entrará em contato pelo número <strong className="text-lime">{formData.phone}</strong> para conversar sobre uma avaliação.
        </p>

        <div className="p-6 bg-paper/10 border border-mist/20 mb-8 space-y-2 font-body text-15">
          <div className="flex justify-between">
            <span className="text-paper/60">Serviço solicitado:</span>
            <span className="text-paper font-medium">
              {SERVICES.find((s) => s.slug === formData.service)?.name || formData.service}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-paper/60">Data desejada:</span>
            <span className="text-paper font-medium">{formData.preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-paper/60">Horário desejado:</span>
            <span className="text-paper font-medium">{formData.preferredTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                service: 'manutencao-e-conserto-de-ar-condicionado',
                preferredDate: '',
                preferredTime: 'Morning (07:00 – 12:00)',
                notes: '',
              });
            }}
            className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
          >
            Enviar outra solicitação
          </Button>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="font-body text-13 text-paper/80 hover:text-lime underline underline-offset-4"
          >
            Precisa de ajuda? Ligue: {CLINIC_INFO.contact.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-12 bg-paper border border-mist flex flex-col space-y-6"
      noValidate
    >
      <div>
        <h3 className="font-display text-26 md:text-33 text-forest-ink mb-2">
          Solicitar orçamento
        </h3>
        <p className="font-body text-15 text-forest-ink/70">
          Conte o que precisa. Nossa equipe entrará em contato para conversar sobre o serviço e os próximos passos.
        </p>
      </div>

      {/* Nome completo */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="fullName" className="font-body text-13 text-forest-ink/70">
          Nome completo <span className="text-forest">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          placeholder="e.g. Eleanor Vance"
          className="w-full px-4 py-3 text-15 focus:border-forest transition-colors"
          required
        />
        {errors.fullName && (
          <span className="font-body text-13 text-[#65788D] transition-all duration-200">
            {errors.fullName}
          </span>
        )}
      </div>

      {/* Phone & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="phone" className="font-body text-13 text-forest-ink/70">
            Telefone <span className="text-forest">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="+55 21 99481-7430"
            className="w-full px-4 py-3 text-15 focus:border-forest transition-colors"
            required
          />
          {errors.phone && (
            <span className="font-body text-13 text-[#65788D]">{errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="email" className="font-body text-13 text-forest-ink/70">
            E-mail <span className="text-forest">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="eleanor@example.com"
            className="w-full px-4 py-3 text-15 focus:border-forest transition-colors"
            required
          />
          {errors.email && (
            <span className="font-body text-13 text-[#65788D]">{errors.email}</span>
          )}
        </div>
      </div>

      {/* Service Selection */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="service" className="font-body text-13 text-forest-ink/70">
          Tipo de serviço <span className="text-forest">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 text-15 focus:border-forest transition-colors bg-paper cursor-pointer"
        >
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="general-consultation">Outro serviço</option>
        </select>
      </div>

      {/* Data desejada & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="preferredDate" className="font-body text-13 text-forest-ink/70">
            Data desejada <span className="text-forest">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => {
              setFormData({ ...formData, preferredDate: e.target.value });
              if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
            }}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 text-15 focus:border-forest transition-colors"
            required
          />
          {errors.preferredDate && (
            <span className="font-body text-13 text-[#65788D]">{errors.preferredDate}</span>
          )}
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="preferredTime" className="font-body text-13 text-forest-ink/70">
            Horário desejado
          </label>
          <select
            id="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-3 text-15 focus:border-forest transition-colors bg-paper cursor-pointer"
          >
            <option value="Morning (08:00 – 12:00)">Morning (08:00 – 12:00)</option>
            <option value="Afternoon (12:00 – 16:00)">Afternoon (12:00 – 16:00)</option>
            <option value="Late Afternoon (16:00 – 17:30)">Late Afternoon (16:00 – 17:30)</option>
          </select>
        </div>
      </div>

      {/* Additional project notes */}
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="notes" className="font-body text-13 text-forest-ink/70">
          Conte sobre o serviço (opcional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Descreva o equipamento ou serviço que gostaria de conversar..."
          className="w-full px-4 py-3 text-15 focus:border-forest transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-mist flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="forest"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Enviando solicitação...' : 'Solicitar orçamento'}
        </Button>
        <span className="font-body text-13 text-forest-ink/60">
          Usaremos seus dados para responder à sua solicitação.
        </span>
      </div>
    </form>
  );
}
