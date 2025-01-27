import React from "react";

const CNGIntro: React.FC = () =>
{
    return (
        <section className="flex flex-col md:flex-row h-auto items-center">
            <div className="flex-1 p-8 text-center md:text-right">
                <h2 className="text-3xl font-bold mb-4">نخستین سامانه هوشمند جایگاه های سوخت گاز طبیعی</h2>
                <p className="text-gray-600">
                    حکایت جسورانه از یک ماجرای کارآفرینانه و پاسخ به نیاز های بومی
                </p>
            </div>
            <div className="flex-1 p-4">
                <video controls className="w-full rounded-md shadow-lg bg-slate-700 p-10">
                    <source src="/pilot.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default CNGIntro;
