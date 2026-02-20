import {
    Activity,
    Printer,
    Box,
    ShieldCheck,
    Layers,
    Zap,
    Cpu,
    MonitorCheck,
    RotateCw,
    Settings,
    RefreshCcw,
    Wrench,
    CheckCircle2,
    Send,
    Mail,
    Phone,
    Maximize,
    Search,
    Scan,
    Truck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export const PRODUCTION_FEATURES: FeatureItem[] = [
    {
        icon: Printer,
        title: "Екосистема Bambu Lab і Elligo",
        desc: "Єдина мережа принтерів P1S забезпечує 100% повторюваність деталей та стабільність якості.",
    },
    {
        icon: Box,
        title: "FDM-технологія",
        desc: "Промисловий рівень друку інженерними пластиками для задач оборонного комплексу.",
    },
    {
        icon: Maximize,
        title: "Площина Друку",
        desc: "Neptune 4 Max з площиною друку 420×420×480 мм дозволяє виготовляти великі деталі.",
    },
];

export const SERVICE_ITEMS = [
    {
        icon: Box,
        title: "Серійне 3D-виробництво",
        desc: "Стабільний випуск деталей у промислових обсягах. Точність геометрії та дотримання термінів — партія за партією.",
    },
    {
        icon: Settings,
        title: "Інженерне рішення та 3D-моделювання",
        desc: "Проєктуємо компоненти з нуля — з урахуванням аеродинаміки, навантажень та умов експлуатації.",
    },
    {
        icon: Zap,
        title: "Швидке прототипування",
        desc: "Від ідеї до фізичного прототипу в межах одного циклу. Тестуйте та вдосконалюйте до запуску серії.",
    },
    {
        icon: Scan,
        title: "Реверс-інжиніринг",
        desc: "Відновлюємо 3D-модель за фізичним зразком через сканування — навіть без оригінальної документації.",
    },
    {
        icon: Search,
        title: "Консультація з підбору матеріалів",
        desc: "Підбираємо матеріал під конкретні умови: температура, ударостійкість, вага. Правильний матеріал — надійність місії.",
    },
    {
        icon: Truck,
        title: "Партнерство зі стабільного постачання",
        desc: "Виділяємо фіксовані виробничі слоти та гарантуємо щомісячний обсяг без перебоїв.",
    },
];

export const SCALING_STEPS = [
    {
        id: "01",
        label: "ДОСТУПНО ЗАРАЗ",
        title: "170 кг",
        unit: "/ міс",
        subtitle: "20 Принтерів (Вільний слот)",
        desc: "Вільні потужності, готові до старту вашого проекту вже сьогодні.",
        isActive: true,
    },
    {
        id: "02",
        label: "Сценарій Масштабування",
        title: "420+ кг",
        unit: "/ міс",
        subtitle: "50 Принтерів",
        desc: "Розгортання додаткових потужностей за 2-3 тижні.",
        readiness: {
            score: "100%",
            items: ["Постачальник", "Персонал", "Приміщення"],
        },
    },
    {
        id: "03",
        label: "Unlimited",
        title: "∞",
        unit: "",
        subtitle: "100+ Принтерів",
        desc: "Індивідуальне масштабування під великий контракт.",
    },
];

export const QUALITY_PROTOCOLS: FeatureItem[] = [
    {
        icon: MonitorCheck,
        title: "Протоколи",
        desc: "Комплексний чек-лист перевірки деталей, принтерів та простору перед запуском.",
    },
    {
        icon: Cpu,
        title: "Моніторинг",
        desc: "Централізований моніторинг через Bambu Lab Farm Manager 24/7.",
    },
    {
        icon: RotateCw,
        title: "Екосистема",
        desc: "Ідентичні налаштування на всіх 20+ принтерах для повної консистентності.",
    },
    {
        icon: Settings,
        title: "Профілактика",
        desc: "Регулярне технічне обслуговування для запобігання збоям.",
    },
];

export const MATERIALS = [
    { title: "PETG", type: "hero", icon: Box, subtitle: "Universal Defense Standard", className: "col-span-2 row-span-2 min-h-[300px]" },
    { title: "PLA", subtitle: "Rapid Prototyping", icon: Layers },
    { title: "TPU", subtitle: "Flexible Components", icon: Activity },
    { title: "ASA", subtitle: "UV Resistant", icon: ShieldCheck },
    { title: "ABS", subtitle: "High Temp Resistance", icon: Zap },
    { title: "Nylon", type: "wide", subtitle: "Engineering Grade", icon: Settings, className: "col-span-1 md:col-span-2" },
    { title: "Carbon Fiber", type: "wide", subtitle: "Max Strength", icon: Cpu, className: "col-span-1 md:col-span-2" },
];

export const LEAD_TIME_FEATURES = [
    { icon: CheckCircle2, text: "Розрахунок одразу після аналізу" },
    { icon: RefreshCcw, text: "Зміна деталі = 0 годин затримки" },
];

export const RELIABILITY_FEATURES: FeatureItem[] = [
    {
        icon: Zap,
        title: "Енергонезалежність",
        desc: "Виробництво не зупиняється. Маємо стабільне підключення та не залежимо від відключень."
    },
    {
        icon: Printer,
        title: "Резервні Принтери",
        desc: "Миттєва заміна обладнання у випадку будь-якої несправності."
    },
    {
        icon: Wrench,
        title: "Планова Профілактика",
        desc: "Ми знаємо ресурс кожної деталі та замінюємо її завчасно."
    },
];

export const PRICING_LAYERS = [
    { id: 1, label: "Операційні витрати", sub: "Operational Costs" },
    { id: 2, label: "Електроенергія", sub: "Energy Consumption" },
    { id: 3, label: "Обслуговування", sub: "Maintenance & Service" },
    { id: 4, label: "Матеріал", sub: "Raw Materials" }
];

export const CONTACT_STEPS = [
    {
        number: "01",
        title: "Надсилаєте Файл",
        desc: "Надішліть нам STL-файл вашої деталі через Telegram або Email.",
        isActive: true,
    },
    {
        number: "02",
        title: "Отримуєте Розрахунок",
        desc: "Ми аналізуємо геометрію та повідомляємо точний lead time та ціну.",
    },
    {
        number: "03",
        title: "Старт Виробництва",
        desc: "Після погодження ми негайно запускаємо друк вашої партії.",
    },
];

export const CONTACT_INFO = [
    {
        icon: Send,
        label: "Telegram",
        value: "@haupttmann",
        href: "https://t.me/haupttmann",
    },
    {
        icon: Mail,
        label: "Email",
        value: "figtech.main@gmail.com",
        href: "mailto:figtech.main@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone / Остап",
        value: "+38 (066) 244 67 34",
        href: "tel:+380662446734",
    },
];
export const CEO_DATA = {
    name: "OSTAP HUK",
    title: "CHIEF EXECUTIVE OFFICER",
    division: "Defense Manufacturing Division",
    bio: "Безпосередній контакт для стратегічних партнерів, великих замовлень та питань на рівні керівництва. Доступний для обговорення проєктів.",
    status: "ONLINE // AVAILABLE",
    responseTime: "Response time: < 2 hours",
    image: "/assets/ceo.png" // Fallback to a placeholder if not exists
};
