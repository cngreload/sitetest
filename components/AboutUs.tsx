"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { div } from "framer-motion/client";

const content = [
    {
        title: " خیزش جسورانه کارآفرینان نوپا برای خلق فناوری نوین بومی ورود به عرصه هوشمندسازی با تجربه مستقیم کاستی ها",
        description: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <p>تیم بنیان گذاران با سابقه بهرهبرداری و مدیریت مجتمع های صنعتی در استان ها مختلف با ضعف اساسی و محتاژ کننده فناوری های خارجی از جمله آشنایی با سیستم های اتوماسیئن خارجی قدیمی و بدون پشتیبانی در ساختار صنعت، اقدام به طرح راهکاری جامع برای این وابستگی نمودند.
                    با جشم انداز ارایه محصولی کامل، نوین و منحصر به فرد با اتکاه به توان داخلی و با استفاده از توسعه دانش اصیل بومی پاسخی قاطع به این موصل دهند.
                    سامانه هوشمند کنترل وتگ با هدف در دسترس سازی فناوری هوشمندساز برای طیف وسیعی از کسب و کارها و صنایع کشور مورد تحقیق و توسعه این شرکت واقع شد و با ارایه برتری شخصی سازی و خدف کاستی های سامانه های فعلی ظهور عصر هوشمندسازی به صرفه را عملی و منطفی داننست.
                    با تلاش بی وقفه این سامانه  طراحی، اعتبارسنجی، تولید و  به بهره برداری اولیه رسید.
                    اکنون زمان آن فرا رسیده که دست از وابستگی به سامانه های پر خرج خارجی بکشیم و با رویه تازه با استفاده از فناوری اقدام به رفغ مشتکلات افتصادی و اساسی در زیرساخت ها کشور خود نمایم.
                </p>
            </div>
        ),
        content: (
            <div>
                <p>
                    سلان م سییب
                </p>
                <Image src="/svg/bmslogoclean.svg" alt="alt" width={ 300 } height={ 300 } />
            </div>
        )
    },
    {
        title: "Real time changes",
        description: "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={ 300 }
                    height={ 300 }
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Version control",
        description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];

export function StickyScrollReveal ()
{
    return (
        <div>
            <p className="text-center text-4xl mb-10">درباره ما</p>
            <div className="p-10 bg-pink-950 opacity-90">
                <StickyScroll content={ content } />
            </div>
        </div>
    );
}