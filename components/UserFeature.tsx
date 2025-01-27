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

export function UserFeatures ()
{
    const features = [
        {
            title: "دیگر نیازی به حدس زدن نیست—همه چیز را شفاف ببینید!",
            description:
                "تمام اطلاعات لازم درباره کلینیک‌ها، خدمات، و صلاحیت متخصصان را در یک نگاه مشاهده کنید. نظرات و امتیازات واقعی کاربران، انتخاب شما را مطمئن‌تر می‌کند.",
            icon: <IconTerminal2 />,
        },
        {
            title: "خدماتی متناسب با شما، در هر زمانی!",
            description:
                "از درمان‌های زیبایی مانند لیزر و جوان‌سازی گرفته تا مشاوره‌های پزشکی و جراحی‌های تخصصی، کلینیکانز مجموعه‌ای کل از خدمات را برای نیازهای شما ارائه می‌دهد.",
            icon: <IconEaseInOut />,
        },
        {
            title: "کلینیک ایده‌آل خود را در هر کجا پیدا کنید!",
            description:
                "چه در شهر خودتان و چه در سایر شهرها، کلینیکانز دسترسی به بهترین کلینیک‌ها و خدمات را برای شما آسان می‌کند.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "اعتماد شما اولویت ماست!",
            description: "فقط کلینیک‌ها و متخصصانی که استانداردهای کیفی بالا را رعایت می‌کنند در کلینیکانز حضور دارند. نظرات واقعی کاربران به شما کمک می‌کند تا با اطمینان انتخاب کنید.",
            icon: <IconCloud />,
        },
        {
            title: "رزرو نوبت در چند ثانیه!",
            description: "به راحتی زمان‌های آزاد را بررسی کنید، وقت رزرو کنید یا حتی زمان‌بندی خود را تغییر دهید. همه این‌ها تنها با چند کلیک در دسترس شماست.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "مشاوره حرفه‌ای، هر جا که هستید!",
            description:
                "با پزشکان و متخصصان از طریق متن، تماس یا ویدیو ارتباط برقرار کنید و پاسخ سؤالات خود را بدون نیاز به مراجعه حضوری دریافت کنید.",
            icon: <IconHelp />,
        },
        {
            title: "هزینه‌ها را شفاف ببینید!",
            description:
                "بدون هیچ هزینه پنهانی، قیمت خدمات را به وضوح مشاهده کنید و گزینه‌های مناسب بودجه خود را مقایسه کنید.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "نیازهای شما، راهنمای ما در طراحی تجربه شماست!",
            description: "با فیلترهای پیشرفته، خدمات را بر اساس نوع، مکان، و بودجه خود جستجو کنید. انتخاب‌های شما هرگز این‌قدر دقیق و ساده نبوده است.",
            icon: <IconHeart />,
        },
        {
            title: "جستجوهای هوشمند، دسترسی سریع!",
            description: "با رابط کاربری ساده و حرفه‌ای، بدون اتلاف وقت، به آنچه نیاز دارید دسترسی پیدا کنید و تمرکز خود را روی انتخاب خدمات موردنظر بگذارید.",
        },
        {
            title: "نیازهای شما، راهنمای ما در طراحی تجربه شماست!",
            description: "با فیلترهای پیشرفته، خدمات را بر اساس نوع، مکان، و بودجه خود جستجو کنید. انتخاب‌های شما هرگز این‌قدر دقیق و ساده نبوده است.",
            icon: <IconHeart />,
        },
        {
            title: "به بخشی از یک جامعه مطمئن بپیوندید!",
            description: "تجربیات خود را به اشتراک بگذارید و از نظرات دیگران بهره ببرید. با کمک کلینیکانز، شبکه‌ای از کلینیک‌های معتبر و کاربران رضایتمند بسازید.",
            icon: <IconHeart />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
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
    icon?: React.ReactNode; // Make icon optional
    index: number;
} ) =>
{
    return (
        <div
            className={ cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
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