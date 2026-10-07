import React, { useState } from 'react';
import { Product } from '../../../types';
import { Icon } from '../../ui/Icon';

interface AdminProductsTabProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
}

export const AdminProductsTab: React.FC<AdminProductsTabProps> = ({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
}) => {
  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Form fields
  const [formData, setFormData] = useState<Partial<Product>>({
    nameAr: '',
    nameEn: '',
    category: 'fruits',
    descriptionAr: '',
    descriptionEn: '',
    origin: 'Egypt',
    brix: '10 - 12° Brix',
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
  });

  const filtered = products.filter((p) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return p.nameAr.toLowerCase().includes(q) || p.nameEn.toLowerCase().includes(q);
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      onUpdateProduct({ ...editingProduct, ...formData } as Product);
      setEditingProduct(null);
    } else {
      const newP: Product = {
        id: `prod-${Date.now()}`,
        nameAr: formData.nameAr || 'منتج جديد',
        nameEn: formData.nameEn || 'New Product',
        category: formData.category || 'fruits',
        descriptionAr: formData.descriptionAr || '',
        descriptionEn: formData.descriptionEn || '',
        origin: formData.origin || 'Egypt',
        brix: formData.brix || '',
        storageTemp: formData.storageTemp || '-18°C',
        shelfLife: formData.shelfLife || '24 Months',
        image: formData.image || 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
        grades: ['Grade A Export', 'Standard'],
        cutsAr: ['كامل', 'أنصاف'],
        cutsEn: ['Whole', 'Halves'],
        packaging: { retail: ['400g x 20'], bulk: ['10kg Carton'], privateLabel: true },
        seasonMonths: [1, 2, 3, 4],
        featured: true,
      };
      onAddProduct(newP);
      setIsAdding(false);
    }
  };

  const startEdit = (p: Product) => {
    setEditingProduct(p);
    setFormData(p);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs">
        <div className="relative flex-1 min-w-[260px]">
          <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-neutral-400">
            <Icon name="Search" size={15} />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث بالصنف أو الاسم..."
            className="w-full ps-9 pe-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          onClick={() => {
            setIsAdding(true);
            setEditingProduct(null);
            setFormData({
              nameAr: '',
              nameEn: '',
              category: 'fruits',
              origin: 'Egypt',
              brix: '10° Brix',
              storageTemp: '-18°C',
              shelfLife: '24 Months',
            });
          }}
          className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Icon name="Plus" size={14} className="text-emerald-400" />
          <span>إضافة محصول جديد</span>
        </button>
      </div>

      {/* Edit or Add Drawer Form */}
      {(isAdding || editingProduct) && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <Icon name="Edit3" size={16} />
              <span>{editingProduct ? 'تعديل مواصفات المحصول' : 'إضافة محصول جديد للكتالوج'}</span>
            </h4>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingProduct(null);
              }}
              className="text-neutral-400 hover:text-white cursor-pointer"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1">الاسم بالعربية:</label>
              <input
                type="text"
                required
                value={formData.nameAr}
                onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">الاسم بالإنجليزية:</label>
              <input
                type="text"
                required
                value={formData.nameEn}
                onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">القسم:</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as Product['category'] })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
              >
                <option value="fruits">فواكه مجمدة IQF</option>
                <option value="vegetables">خضروات مجمدة IQF</option>
                <option value="gourmet">أصناف جورميه فاخرة</option>
                <option value="organic">أورجانيك عضوي</option>
              </select>
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">نسبة السكر (بريكس Brix):</label>
              <input
                type="text"
                value={formData.brix}
                onChange={(e) => setFormData({ ...formData, brix: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((prod) => (
          <div key={prod.id} className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-3">
            <div className="flex items-start gap-3">
              <img src={prod.image} alt={prod.nameAr} className="w-14 h-14 rounded-xl object-cover border border-neutral-200" />
              <div className="flex-1 min-w-0">
                <h5 className="font-extrabold text-sm text-neutral-900 truncate">{prod.nameAr}</h5>
                <span className="text-[11px] text-neutral-500 font-mono block truncate">{prod.nameEn}</span>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold">
                  {prod.brix || 'IQF Grade A'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs">
              <span className="text-[11px] text-neutral-400 font-mono">{prod.storageTemp || '-18°C'}</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => startEdit(prod)}
                  className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 cursor-pointer"
                  title="تعديل"
                >
                  <Icon name="Edit3" size={13} />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`هل أنت متأكد من حذف ${prod.nameAr}؟`)) onDeleteProduct(prod.id);
                  }}
                  className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer"
                  title="حذف"
                >
                  <Icon name="Trash2" size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
