# GoFrosts - Green Organic (جو فروستس - جرين أورجانيك)
### Egyptian State-of-the-Art IQF Frozen & Dried Fruits Processing Factory
**الصرح الصناعي المصري الرائد لإنتاج وتصدير الفواكه المجففة الفاخرة والمحاصيل الزراعية المجمدة | سمنود - الغربية**

---

## 🌟 نظرة عامة (Overview)
منصة تجارية وتصديرية رقمية متكاملة لمجموعة مصانع **جو فروستس (جرين أورجانيك)**، مصممة لاستقبال المستوردين الدوليين، استعراض خطوط الإنتاج والشهادات الدولية، وطلب عروض الأسعار التصديرية (RFQ) إلكترونياً.

### ✨ أبرز مميزات المنصة (Key Features):
1. **Interactive Scroll-Scrubbing Hero Sequence**: تجربة بصرية فائقة تعمل بالتمرير مع تفجير الشعار وتطاير الفواكه المجمدة بدقة 60fps و 107 فريم نقي.
2. **3D Interactive Produce Explorer**: استعراض مجسمات ثلاثية الأبعاد للمحاصيل الزراعية والفواكه باستخدام Three.js و React Three Fiber.
3. **Smart RFQ Builder**: نظام تفاعلي مخصص لإعداد طلبات عروض الأسعار والشحنات بالحاويات المبردة (40ft Reefer).
4. **AI Commercial Advisor (MCP Enabled)**: مستشار تجاري ذكي مدمج يجيب عن كافة استفسارات التصدير، المواصفات الفنية، واللوجستيات.
5. **Multi-Language Engine**: دعم كامل لـ 7 لغات عالمية (العربية، الإنجليزية، الإسبانية، الروسية، الألمانية، الفرنسية، التركية) مع دعم RTL/LTR التلقائي.
6. **Dedicated Admin Dashboard**: لوحة تحكم إدارية مدمجة لإدارة المنتجات، الشهادات، الاستفسارات الواردة، واستوديو الميديا والكروما.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)
- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS v4 + Vanilla CSS Tokens
- **3D Graphics:** Three.js + @react-three/fiber + @react-three/drei
- **Icons:** Lucide React (Unified Icon System)
- **State & Storage:** LocalStorage State Engine with Multi-tab synchronization

---

## 🚀 كيفية التشغيل محلياً (Run Locally)

### المتطلبات الأساسية (Prerequisites):
- [Node.js](https://nodejs.org/) (الإصدار 18 أو أحدث)
- npm أو bun أو yarn

### خطوات التشغيل:
```bash
# 1. تثبيت الحزم والمكتبات
npm install

# 2. تشغيل السيرفر المحلي في وضع التطوير
npm run dev
```
سيفتح الموقع على الرابط: `http://localhost:3000`

---

## 📦 بناء نسخة الإنتاج (Production Build)
```bash
# إنشاء حزمة الإنتاج الجاهزة للنشر
npm run build

# معاينة حزمة الإنتاج محلياً
npm run preview
```

---

## 🌐 رفع المشروع على GitHub (GitHub Upload Guide)

لرفع هذا المجلد كمستودع مستقل على حسابك في GitHub، اتبع الخطوات التالية من داخل مجلد المشروع:

```bash
# 1. تهيئة مستودع Git محلي
git init -b main

# 2. إضافة كافة الملفات (ملفات الكاش و node_modules مستثناة تلقائياً عبر .gitignore)
git add .

# 3. حفظ أول Commit
git commit -m "feat: initial release of GoFrosts Green Organic B2B platform"

# 4. ربط المستودع برابط GitHub الخاص بك (استبدل الرابط برابط مستودعك الجديد)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. رفع الكود
git push -u origin main
```

---

## 📁 هيكلية المجلدات (Project Directory Structure)
```
├── docs/                 # وثائق المشروع والمراجع الفنية
├── public/               # الأصول العامة (الفيديوهات، الفريمات، مجسمات 3D، الخطوط، والشعار)
│   ├── models/           # مجسمات GLB للمنتجات الزراعية
│   ├── videos/           # فريمات الفيديو التفاعلي وفيديوهات المصنع
│   └── fonts/            # ملفات الخطوط
├── src/                  # الكود المصدري للمشروع
│   ├── components/       # المكونات الذرية والموديلار (Navbar, Hero, Products, RFQ, etc.)
│   ├── data/             # بيانات المصنع، الأصناف، والشهادات
│   ├── hooks/            # الـ Custom Hooks لإدارة الحالة والتفاعل
│   ├── i18n/             # ملفات الترجمة للغات السبعة
│   ├── types/            # تعريفات TypeScript المعيارية
│   └── utils/            # دوال المعالجة والحسابات
├── index.html            # ملف نقطة الدخول الرئيسي
├── package.json          # تعريفات الحزم والاعتماديات
├── tsconfig.json         # إعدادات TypeScript
└── vite.config.ts        # إعدادات Vite
```

---

© 2026 GoFrosts - Green Organic. All rights reserved.
