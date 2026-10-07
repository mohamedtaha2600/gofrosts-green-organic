import React, { useState } from 'react';
import { LeadInquiry } from '../../../types';
import { Icon } from '../../ui/Icon';

interface AdminLeadsTabProps {
  leads: LeadInquiry[];
  onUpdateStatus: (id: string, status: LeadInquiry['status']) => void;
  onClearLeads: () => void;
}

export const AdminLeadsTab: React.FC<AdminLeadsTabProps> = ({
  leads,
  onUpdateStatus,
  onClearLeads,
}) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = leads.filter((l) => {
    const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
    const q = search.toLowerCase().trim();
    if (!q) return matchesStatus;
    const matchesSearch =
      l.fullName.toLowerCase().includes(q) ||
      l.companyName.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.country && l.country.toLowerCase().includes(q)) ||
      (l.destinationPort && l.destinationPort.toLowerCase().includes(q)) ||
      l.productsOfInterest.some((p) => p.toLowerCase().includes(q));
    return matchesStatus && matchesSearch;
  });

  const exportCsv = () => {
    const header = ['Date', 'Name', 'Company', 'Email', 'Phone', 'Country', 'Port', 'Incoterm', 'Products', 'Status'];
    const rows = leads.map((l) => [
      `"${l.date}"`,
      `"${l.fullName}"`,
      `"${l.companyName}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.country || ''}"`,
      `"${l.destinationPort || ''}"`,
      `"${l.incoterm || ''}"`,
      `"${l.productsOfInterest.join('; ')}"`,
      `"${l.status}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encoded = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encoded);
    link.setAttribute('download', `gofrosts_rfq_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs">
        <div className="flex items-center gap-3 flex-1 min-w-[280px]">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-neutral-400">
              <Icon name="Search" size={15} />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="بحث بالمستورد، الشركة، الدولة، أو الصنف..."
              className="w-full ps-9 pe-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-bold text-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">كل الحالات ({leads.length})</option>
            <option value="new">طلب جديد</option>
            <option value="contacted">تم التواصل</option>
            <option value="sample_sent">عينة مرسلة</option>
            <option value="deal_closed">صفقة ناجحة</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            disabled={leads.length === 0}
            className="px-3.5 py-2 rounded-xl bg-black hover:bg-neutral-800 disabled:opacity-40 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Icon name="Download" size={13} />
            <span>تصدير Excel / CSV</span>
          </button>

          {leads.length > 0 && (
            <button
              onClick={() => {
                if (confirm('هل أنت متأكد من مسح جميع استفسارات العملاء؟')) onClearLeads();
              }}
              className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              <Icon name="Trash2" size={13} />
              <span>تفريغ السجل</span>
            </button>
          )}
        </div>
      </div>

      {/* Leads Table */}
      {filtered.length > 0 ? (
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-xs">
          <table className="w-full text-start text-xs text-neutral-800 divide-y divide-neutral-200">
            <thead className="bg-neutral-900 text-white font-bold text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 text-start">تاريخ الطلب</th>
                <th className="py-3.5 px-4 text-start">المستورد والشركة</th>
                <th className="py-3.5 px-4 text-start">الدولة والميناء</th>
                <th className="py-3.5 px-4 text-start">الأصناف والكمية</th>
                <th className="py-3.5 px-4 text-start">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="py-3 px-4 text-neutral-500 font-mono text-[11px] whitespace-nowrap">
                    {lead.date}
                  </td>
                  <td className="py-3 px-4">
                    <strong className="block font-extrabold text-neutral-900">{lead.fullName}</strong>
                    <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                      <Icon name="Building2" size={11} /> {lead.companyName}
                    </span>
                    <div className="text-[10px] text-neutral-400 font-mono flex gap-2 mt-0.5">
                      <span>{lead.email}</span>
                      <span>•</span>
                      <span>{lead.phone}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-bold block">{lead.country || 'International'}</span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">
                      {lead.incoterm || 'FOB'} {lead.destinationPort ? `• ${lead.destinationPort}` : ''}
                    </span>
                  </td>
                  <td className="py-3 px-4 max-w-xs">
                    <div className="flex flex-wrap gap-1">
                      {lead.productsOfInterest.map((p, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 text-[10px] font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                    {lead.targetQuantity && (
                      <span className="block text-[10px] text-neutral-500 font-mono mt-1">
                        الكمية: {lead.targetQuantity}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <select
                      value={lead.status}
                      onChange={(e) => onUpdateStatus(lead.id, e.target.value as LeadInquiry['status'])}
                      className={`text-xs font-bold rounded-lg px-2.5 py-1 border focus:outline-none ${
                        lead.status === 'new'
                          ? 'bg-rose-50 text-rose-800 border-rose-200'
                          : lead.status === 'contacted'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : lead.status === 'sample_sent'
                          ? 'bg-sky-50 text-sky-800 border-sky-200'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}
                    >
                      <option value="new">طلب جديد</option>
                      <option value="contacted">تم التواصل</option>
                      <option value="sample_sent">عينة مرسلة</option>
                      <option value="deal_closed">صفقة ناجحة</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-2xl border border-neutral-200 p-8">
          <Icon name="Inbox" size={32} className="mx-auto text-neutral-400 mb-2 opacity-50" />
          <p className="text-sm font-bold text-neutral-600">لا توجد طلبات تسعير مطابقة للبحث حالياً</p>
        </div>
      )}
    </div>
  );
};
