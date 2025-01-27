import React from "react";

const ClinicianText: React.FC = () =>
{
    return (
        <div className="p-8 text-center lg:text-start">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">کلینیکانز: آغار هوشمندانه سفر سلامت شما با استانداری طلایی
            </h2>
            <p className="text-lg text-gray-600 mb-8">در کلینیکنز دنیایی از امکانات پیشرفته و تجربه‌ای بی‌نظیر در انتظار شماست! <br /> اینجا، پلتفرمی جامع و هوشمند فراهم کرده‌ایم تا به راحتی بهترین خدمات سلامت و زیبایی شهر خود را پیدا کنید.
                <br />
                چه یک مدیر کلینیک باشید که به دنبال رشد و مدیریت بهتر است یا یک کاربر که به خدمات حرفه‌ای و قابل‌اعتماد نیاز دارد، کلینیکنز همراه مطمئن شماست.
            </p>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">آشنایی بیشتر</button>
            <button className="lg:hidden px-6 py-2 mr-5 bg-green-500 text-white rounded-lg hover:bg-green-600">ورود به پلتفرم
            </button>
        </div>
    );
};

export default ClinicianText;
