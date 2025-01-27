import React from "react";
import { CardSpotlightDemo } from "./InvestCard";

const ICTSIntro: React.FC = () =>
{
    return (
        <section className="flex flex-col pt-[5rem] pb-[7rem] md:flex-row gap-0 justify-center  items-center">

            <div className="flex-1 p-8 text-center md:text-right">
                <h2 className="text-3xl font-bold mb-4">تنها سامانه هوشمند مورد نیاز شما <span className="bg-purple-500 rounded-full">به صرفه، اختصاصی و آسان</span>
                </h2>
                <p className="text-gray-600">
                    در عصر دیجیتال، کسب‌وکارها به راه‌حل‌های هوشمند و کارآمد نیاز دارند تا بتوانند در بازار رقابتی پیشتاز بمانند.
                    ما با بهره‌گیری از پیشرفته‌ترین سخت‌افزارها و نرم‌افزارهای امن، سامانه‌ای هوشمند و جامع را ارائه می‌دهیم که تمام نیازهای اتوماسیون شما را به صورت اختصاصی و به صرفه برآورده می‌کند.
                    طراحی موؤلار و انعطاف‌پذیر این سامانه، امکان سفارشی‌سازی کامل بر اساس نیازهای منحصر به فرد شما را فراهم می‌آورد.
                    با ما، نه تنها به فناوری‌های پیشرفته دسترسی خواهید داشت، بلکه می‌توانید با کمترین هزینه، بیشترین بهره‌وری را از سامانه هوشمند خود به دست آورید.
                    تنها سامانه‌ای که برای تحول دیجیتال و ارتقاء کسب‌وکار خود نیاز دارید

                </p>
            </div>
            <div className="flex-1 p-4 flex justify-center">
                <CardSpotlightDemo />
            </div>
        </section>
    );
};

export default ICTSIntro;
