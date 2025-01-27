import { cn } from "@/lib/utils";
import
{
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function ClinicFeatures ()
{
    const features = [
        {
            title: "مدیریت بیماران: تجربه‌ای فراتر از انتظار",
            description: "بیماران شما شایسته بهترین‌ها هستند! با ابزارهای پیشرفته‌ای مانند بازخورد تعاملی، پرونده‌های سلامت الکترونیکی جامع، و خدمات درمان از راه دور، تجربه‌ای شخصی‌سازی‌شده و متمرکز بر نیازهای بیمار ارائه دهید.",

            icon: <IconTerminal2 />,
        },
        {
            title: "برنامه‌ریزی: هوشمندسازی زمان‌بندی",
            description:
                "دیگر نگرانی بابت مدیریت وقت و نوبت‌دهی نخواهید داشت. با سیستم‌های هوشمند ما، زمان‌بندی لحظه‌ای، پیگیری خودکار و کاهش زمان انتظار بیماران به آسانی امکان‌پذیر است.", icon: <IconEaseInOut />,
        },
        {
            title: "مدیریت مدارک: فناوری در خدمت امنیت داده‌ها",
            description:
                "سوابق بیماران خود را با راهکارهای پیشرفته ذخیره‌سازی بلاک‌چینی و تحلیل داده‌های مبتنی بر پردازش زبان طبیعی (NLP) ایمن کنید. این فناوری‌ها، امنیت و دسترسی سریع به اطلاعات را برای تیم درمانی فراهم می‌کنند.", icon: <IconCurrencyDollar />,
        },
        {
            title: "مدیریت درآمد: بهره‌وری مالی با ابزارهای دیجیتال",
            description: "با سیستم‌های مدیریت چرخه درآمد (RCM)، فرآیندهای مالی خود را بهینه کنید. اتوماسیون صورتحساب‌ها، تحلیل‌های پیش‌بینی درآمد، و پیگیری خودکار مطالبات بیمه‌ای، کارایی و دقت مالی کلینیک را تضمین می‌کند.",
            icon: <IconCloud />,
        },
        {
            title: "بازاریابی و تعامل: راهکارهای هوشمند برای جذب و حفظ بیماران",
            description: "با ابزارهای مدیریت ارتباط با مشتری (CRM) تخصصی حوزه سلامت، برنامه‌های وفاداری دیجیتال، و ادغام شبکه‌های اجتماعی، ارتباطات خود با بیماران را تقویت کنید. این رویکرد باعث افزایش تعامل و ایجاد حس اعتماد و وفاداری می‌شود.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "ارتباطات: امنیت در هسته ارتباطات کلینیک شما",
            description:
                "با ابزارهای ارتباطی پیشرفته و مطابق با استانداردهای HIPAA، ارتباطات بین بیماران و کادر درمان را ایمن و سریع کنید. دستیارهای مجازی نیز به شما در پاسخ‌گویی فوری و مدیریت ساده‌تر ارتباطات کمک می‌کنند.",
            icon: <IconHelp />,
        },
        {
            title: "تحلیل و گزارش‌دهی: تصمیم‌گیری مبتنی بر داده‌های کلینیکی",
            description:
                "با داشبوردهای تعاملی و تحلیل‌های پیشرفته، داده‌های پیچیده را به اطلاعات قابل‌فهم و کاربردی تبدیل کنید. این قابلیت‌ها شما را در تصمیم‌گیری‌های استراتژیک و بهبود کیفیت خدمات یاری می‌دهند.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "امنیت و انطباق: حفاظت از داده‌ها با رویکردی حرفه‌ای",
            description: "راهکارهایی مانند ذخیره‌سازی امن، برنامه‌های بازیابی داده، و آموزش‌های امنیت سایبری، محیطی ایمن و منطبق با استانداردهای جهانی (HIPAA، GDPR) برای حفاظت از اطلاعات حساس ایجاد می‌کنند.",
            icon: <IconHeart />,
        },

    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            { features.map( ( feature, index ) => (
                <Feature key={ feature.title } { ...feature } index={ index } />
            ) ) }
        </div>
    );
}

const Feature = ( {
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
} ) =>
{
    return (
        <div
            className={ cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                ( index === 0 || index === 4 ) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            ) }
        >
            { index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            ) }
            { index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            ) }
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                { icon }
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    { title }
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                { description }
            </p>
        </div>
    );
};
