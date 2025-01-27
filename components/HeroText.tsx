import React from "react";


const HeroText: React.FC = () =>
{
    return (
        <div className="animate-fade-in-up text-center">
            <h1 className="text-lg lg:text-4xl  font-bold mb-4">حامی سرسخت شما در عرصه هوشمندسازی صنعت 4.0</h1>
            <p className="text-sm lg:text-lg text-gray-600 mb-8">با سامانه هوشمند کنترل و تگ وارد عصر نوین دیجتال شوید و با سهولت تمامی فرایند های مورد نیاز خود را با به صرفه گی بدون رقیب هوشمند سازید.<br />
                کلینیکانز یک مکان است، یک پلتفرم مجازی که به شما این امکان را می دهد تا با راحتی و خیال خاطر هوشمندانه خدمات زیبایی و سلامت خود را در هر شهر و به وسعت کشور، بیابید،بسنجید و بهره مند شوید <br />
                .
            </p>
            <div>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Get Started</button>
            </div>
        </div>
    );
};

export default HeroText;
