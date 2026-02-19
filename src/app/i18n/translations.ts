export const translations = {
    ua: {
        // Navbar
        nav: {
            capabilities: 'Можливості',
            materials: 'Матеріали',
            price: 'Ціна',
            contactUs: 'Зв\'язатись',
            toHome: 'На головну',
        },

        // Hero
        hero: {
            tagline: 'Defense Manufacturing Factory',
            description: 'Виробничий продакшин 3D-друку для оборонної промисловості.',
            subline: 'Швидкість. Точність. Масштаб.',
            scroll: 'Scroll System',
        },

        // Production
        production: {
            subtitle: 'Core Infrastructure',
            title: 'Виробнича Платформа',
            features: [
                {
                    title: 'Екосистема Bambu Lab і Elligo',
                    desc: 'В основному використовуємо принтери Bambu Lab P1S та Elligo для забезпечення повторюваності деталей та стабільності якості.',
                },
                {
                    title: 'FDM-технологія',
                    desc: 'Промисловий рівень друку інженерними пластиками для задач оборонного комплексу.',
                },
                {
                    title: 'Площина Друку',
                    desc: 'Neptune 4 Max з площиною друку 420×420×480 мм дозволяє виготовляти великі деталі, досягаючи до 50 см при діагональному розміщенні.',
                },
            ],
            servicesTitle: 'Наші Послуги',
            services: [
                {
                    title: 'Серійне 3D-виробництво',
                    desc: 'Стабільний випуск деталей у промислових обсягах. Точність геометрії та дотримання термінів — партія за партією.',
                },
                {
                    title: 'Інженерне рішення та 3D-моделювання',
                    desc: 'Проєктуємо компоненти з нуля — з урахуванням аеродинаміки, навантажень та умов експлуатації.',
                },
                {
                    title: 'Швидке прототипування',
                    desc: 'Від ідеї до фізичного прототипу в межах одного циклу. Тестуйте та вдосконалюйте до запуску серії.',
                },
                {
                    title: 'Реверс-інжиніринг',
                    desc: 'Відновлюємо 3D-модель за фізичним зразком через сканування — навіть без оригінальної документації.',
                },
                {
                    title: 'Консультація з підбору матеріалів',
                    desc: 'Підбираємо матеріал під конкретні умови: температура, ударостійкість, вага. Правильний матеріал — надійність місії.',
                },
                {
                    title: 'Партнерство зі стабільного постачання',
                    desc: 'Виділяємо фіксовані виробничі слоти та гарантуємо щомісячний обсяг без перебоїв.',
                },
            ],
        },

        // Scaling
        scaling: {
            subtitle: 'Capacity Planning',
            title: 'Наші поточні можливості + можливості масштабування',
            description: 'Наша модель дозволяє гнучко адаптувати виробничі потужності під замовлення будь-якого розміру.',
            steps: [
                {
                    label: 'ДОСТУПНО ЗАРАЗ',
                    value: 170,
                    suffix: ' кг',
                    unit: '/ міс',
                    subtitle: '20 Принтерів (Вільний слот)',
                    desc: 'Вільні потужності, готові до старту вашого проекту вже сьогодні.',
                },
                {
                    label: 'Сценарій Масштабування',
                    value: 420,
                    suffix: '+ кг',
                    unit: '/ міс',
                    subtitle: '50 Принтерів',
                    desc: 'Розгортання додаткових потужностей за 2-3 тижні.',
                    readiness: { score: '100%', items: ['Постачальник', 'Персонал', 'Приміщення'] },
                },
                {
                    label: 'Unlimited',
                    title: '∞',
                    unit: '',
                    subtitle: '100+ Принтерів',
                    desc: 'Індивідуальне масштабування під великий контракт.',
                },
            ],
        },

        // Quality
        quality: {
            subtitle: 'QC Protocols',
            title: 'Контроль якості на кожному етапі',
            protocols: [
                {
                    title: 'Протоколи',
                    desc: 'Комплексний чек-лист перевірки деталей, принтерів та простору перед запуском.',
                },
                {
                    title: 'Monitoring',
                    desc: 'Централізований моніторинг через Bambu Lab Farm Manager 24/7.',
                },
                {
                    title: 'Екосистема',
                    desc: 'Ідентичні налаштування на всіх 20+ принтерах для повної консистентності.',
                },
                {
                    title: 'Профілактика',
                    desc: 'Регулярне технічне обслуговування для запобігання збоям.',
                },
            ],
        },

        // Materials
        materials: {
            title: 'Матеріали',
            description: 'Повний спектр FDM-пластиків для будь-яких задач.',
            customOrder: 'Можливе індивідуальне замовлення',
            items: [
                { title: 'PETG', subtitle: 'Universal Defense Standard' },
                { title: 'PLA', subtitle: 'Rapid Prototyping' },
                { title: 'TPU', subtitle: 'Flexible Components' },
                { title: 'ASA', subtitle: 'UV Resistant' },
                { title: 'ABS', subtitle: 'High Temp Resistance' },
                { title: 'Nylon', subtitle: 'Engineering Grade' },
                { title: 'Carbon Fiber', subtitle: 'Max Strength' },
            ],
        },

        // Lead Time
        leadTime: {
            tagline: 'Efficiency Protocol',
            title: 'Прозорий Lead Time',
            formula: {
                equals: 'Lead Time =',
                printTime: 'Час Друку Вашого STL',
                plus: '+',
                hours: '1 година',
            },
            features: [
                'Розрахунок одразу після аналізу',
                'Зміна деталі = 0 годин затримки',
            ],
        },

        // Reliability
        reliability: {
            title: 'Безперебійне Виробництво',
            features: [
                {
                    title: 'Енергонезалежність',
                    desc: 'Виробництво не зупиняється. Маємо стабільне підключення та не залежимо від відключень.',
                },
                {
                    title: 'Резервні Принтери',
                    desc: 'Миттєва заміна обладнання у випадку будь-якої несправності.',
                },
                {
                    title: 'Планова Профілактика',
                    desc: 'Ми знаємо ресурс кожної деталі та замінюємо її завчасно.',
                },
            ],
            formula: 'Енергонезалежність + Резервні Принтери + Прогнозоване Обслуговування',
        },

        // Pricing
        pricing: {
            title: 'Прозора структура',
            titleHighlight: 'Ціни',
            description: "Ціна формується індивідуально під ваш обʼєм і деталь.",
            volumeNote: "Більший обʼєм = краща ціна за кг",
            costNote: 'Ми точно знаємо свою собівартість. Деталі — обговорюємо особисто.',
            layers: [
                { label: 'Операційні витрати', sub: 'Operational Costs' },
                { label: 'Електроенергія', sub: 'Energy Consumption' },
                { label: 'Обслуговування', sub: 'Maintenance & Service' },
                { label: 'Матеріал', sub: 'Raw Materials' },
            ],
        },

        // Contact
        contact: {
            tagline: 'Ready To Launch',
            title1: 'Надішліть нам STL',
            title2: 'ми порахуємо',
            title3: 'строки і вартість.',
            steps: [
                {
                    title: 'Надсилаєте Файл',
                    desc: 'Надішліть нам STL-файл вашої деталі через Telegram або Email.',
                },
                {
                    title: 'Отримуєте Розрахунок',
                    desc: 'Ми аналізуємо геометрію та повідомляємо точний lead time та ціну.',
                },
                {
                    title: 'Старт Виробництва',
                    desc: 'Після погодження ми негайно запускаємо друк вашої партії.',
                },
            ],
        },

        // CEO
        ceo: {
            bio: 'Безпосередній контакт для стратегічних партнерів, великих замовлень та питань на рівні керівництва. Доступний для обговорення проєктів.',
            status: 'ONLINE // AVAILABLE',
            responseTime: 'Response time: < 2 hours',
            contactLabel: '// DIRECT CONTACT CHANNELS',
        },

        // Footer
        footer: {
            copyright: '© 2024 Figura Defense Manufacturing.',
            rights: 'All rights reserved. Glory to Ukraine.',
        },
    },

    en: {
        // Navbar
        nav: {
            capabilities: 'Capabilities',
            materials: 'Materials',
            price: 'Pricing',
            contactUs: 'Contact Us',
            toHome: 'To Home',
        },

        // Hero
        hero: {
            tagline: 'Defense Manufacturing Factory',
            description: '3D printing production for the defense industry.',
            subline: 'Speed. Precision. Scale.',
            scroll: 'Scroll System',
        },

        // Production
        production: {
            subtitle: 'Core Infrastructure',
            title: 'Production Platform',
            features: [
                {
                    title: 'Bambu Lab and Elligo Ecosystem',
                    desc: 'Primarily using Bambu Lab P1S and Elligo printers to ensure part repeatability and quality stability.',
                },
                {
                    title: 'FDM Technology',
                    desc: 'Industrial level printing with engineering plastics for defense industry tasks.',
                },
                {
                    title: 'Build Plate',
                    desc: 'Neptune 4 Max with a 420×420×480 mm build area allows for large part manufacturing, reaching up to 50 cm with diagonal placement.',
                },
            ],
            servicesTitle: 'Our Services',
            services: [
                {
                    title: 'Serial 3D Production',
                    desc: 'Stable production of parts in industrial volumes. Geometric precision and deadline compliance — batch after batch.',
                },
                {
                    title: 'Engineering & 3D Modeling',
                    desc: 'Designing components from scratch — considering aerodynamics, loads, and operating conditions.',
                },
                {
                    title: 'Rapid Prototyping',
                    desc: 'From idea to physical prototype within one cycle. Test and improve before serial launch.',
                },
                {
                    title: 'Reverse Engineering',
                    desc: 'Restoring 3D models from physical samples via scanning — even without original documentation.',
                },
                {
                    title: 'Material Selection Consulting',
                    desc: 'Choosing materials for specific conditions: temperature, impact resistance, weight. Right material — mission reliability.',
                },
                {
                    title: 'Stable Supply Partnership',
                    desc: 'Allocating fixed production slots and guaranteeing uninterrupted monthly volumes.',
                },
            ],
        },

        // Scaling
        scaling: {
            subtitle: 'Capacity Planning',
            title: 'Our current capabilities + scaling options',
            description: 'Our model allows flexible adaptation of production capacity to orders of any size.',
            steps: [
                {
                    label: 'AVAILABLE NOW',
                    value: 170,
                    suffix: ' kg',
                    unit: '/ mo',
                    subtitle: '20 Printers (Free Slot)',
                    desc: 'Free capacity, ready to start your project today.',
                },
                {
                    label: 'Scaling Scenario',
                    value: 420,
                    suffix: '+ kg',
                    unit: '/ mo',
                    subtitle: '50 Printers',
                    desc: 'Additional capacity deployment in 2-3 weeks.',
                    readiness: { score: '100%', items: ['Supplier', 'Staff', 'Facility'] },
                },
                {
                    label: 'Unlimited',
                    title: '∞',
                    unit: '',
                    subtitle: '100+ Printers',
                    desc: 'Custom scaling for large contracts.',
                },
            ],
        },

        // Quality
        quality: {
            subtitle: 'QC Protocols',
            title: 'Quality control at every stage',
            protocols: [
                {
                    title: 'Protocols',
                    desc: 'Comprehensive checklist for parts, printers, and workspace before launch.',
                },
                {
                    title: 'Monitoring',
                    desc: 'Centralized monitoring via Bambu Lab Farm Manager 24/7.',
                },
                {
                    title: 'Ecosystem',
                    desc: 'Identical settings across all 20+ printers for full consistency.',
                },
                {
                    title: 'Maintenance',
                    desc: 'Regular technical servicing to prevent failures.',
                },
            ],
        },

        // Materials
        materials: {
            title: 'Materials',
            description: 'Full range of FDM plastics for any task.',
            customOrder: 'Custom orders available',
            items: [
                { title: 'PETG', subtitle: 'Universal Defense Standard' },
                { title: 'PLA', subtitle: 'Rapid Prototyping' },
                { title: 'TPU', subtitle: 'Flexible Components' },
                { title: 'ASA', subtitle: 'UV Resistant' },
                { title: 'ABS', subtitle: 'High Temp Resistance' },
                { title: 'Nylon', subtitle: 'Engineering Grade' },
                { title: 'Carbon Fiber', subtitle: 'Max Strength' },
            ],
        },

        // Lead Time
        leadTime: {
            tagline: 'Efficiency Protocol',
            title: 'Transparent Lead Time',
            formula: {
                equals: 'Lead Time =',
                printTime: 'Your STL Print Time',
                plus: '+',
                hours: '1 hour',
            },
            features: [
                'Quote immediately after analysis',
                'Part change = 0 hours delay',
            ],
        },

        // Reliability
        reliability: {
            title: 'Uninterrupted Production',
            features: [
                {
                    title: 'Energy Independence',
                    desc: 'Production never stops. We have stable power and are independent of outages.',
                },
                {
                    title: 'Backup Printers',
                    desc: 'Instant equipment replacement in case of any failure.',
                },
                {
                    title: 'Planned Maintenance',
                    desc: 'We know the lifespan of every part and replace it proactively.',
                },
            ],
            formula: 'Energy Independence + Backup Printers + Predictive Maintenance',
        },

        // Pricing
        pricing: {
            title: 'Transparent',
            titleHighlight: 'Pricing',
            description: 'Price is calculated individually for your volume and part.',
            volumeNote: 'Higher volume = better price per kg',
            costNote: 'We know our exact costs. Details — discussed personally.',
            layers: [
                { label: 'Operational Costs', sub: 'Operational Costs' },
                { label: 'Energy', sub: 'Energy Consumption' },
                { label: 'Maintenance', sub: 'Maintenance & Service' },
                { label: 'Material', sub: 'Raw Materials' },
            ],
        },

        // Contact
        contact: {
            tagline: 'Ready To Launch',
            title1: 'Send us your STL',
            title2: "we'll calculate",
            title3: 'timeline and cost.',
            steps: [
                {
                    title: 'Send Your File',
                    desc: 'Send us your STL file via Telegram or Email.',
                },
                {
                    title: 'Get a Quote',
                    desc: 'We analyze the geometry and provide exact lead time and price.',
                },
                {
                    title: 'Production Start',
                    desc: 'After approval we immediately start printing your batch.',
                },
            ],
        },

        // CEO
        ceo: {
            bio: 'Direct contact for strategic partners, large orders, and executive-level inquiries. Available to discuss projects.',
            status: 'ONLINE // AVAILABLE',
            responseTime: 'Response time: < 2 hours',
            contactLabel: '// DIRECT CONTACT CHANNELS',
        },

        // Footer
        footer: {
            copyright: '© 2024 Figura Defense Manufacturing.',
            rights: 'All rights reserved. Glory to Ukraine.',
        },
    },
} as const;

export type Translations = typeof translations;
