'use client';
import React, { useState } from "react";

import { UserFeatures } from "./UserFeature";
import { ClinicFeatures } from "./ClinicFeature";
import { MarketerFeatures } from "./MarketerFeature";

const CliniciansBenefits: React.FC = () =>
{
    const [ activeTab, setActiveTab ] = useState( "User" );

    return (
        <div className="relative bg-slate-300 text-black py-20 px-4 flex flex-col items-center justify-center text-center">
            <div className="text-center p-10 ">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">چرا کلینیکانز را انتخاب کنیم؟</h2>
                <q className="lg:text-lg">آینده مدیریت خدمات درمانی را با کلینیکانز تجربه کنید؛ جایی که نوآوری و مراقبت به هم می‌رسند.</q>
                <p className="max-w-fit">کلینیشنز با ترکیبی از فناوری پیشرفته و طراحی کاربرمحور، راه‌حلی جامع ارائه می‌دهد که نه‌تنها فرآیندهای اداری را ساده می‌کند، بلکه مراقبت از بیماران را نیز بهبود می‌بخشد. <br />
                    از زمان‌بندی هوشمند و مدیریت ایمن داده‌ها گرفته تا تعامل با بیماران و پیش‌بینی مالی دقیق، کلینیشنز یک ابزار همه‌جانبه است که به کلینیک‌ها کمک می‌کند با کارایی و نظم بیشتری فعالیت کنند.
                </p>
            </div>
            <section className="h-1/10 m-4 flex flex-col items-center">
                <div className="flex space-x-4 rtl:space-x-reverse">
                    { [ "کاربر", "کلینک", "مارکتر" ].map( ( tab ) => (
                        <button
                            key={ tab }
                            onClick={ () => setActiveTab( tab ) }
                            className={ `px-4 py-2 rounded ${ activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
                                }` }
                        >
                            { tab }
                        </button>
                    ) ) }
                </div>
                <div className="mt-4 text-center">
                    { activeTab === "کاربر" && <UserFeatures /> }
                    { activeTab === "کلینک" && <ClinicFeatures /> }
                    { activeTab === "مارکتر" && <MarketerFeatures /> }
                </div>
            </section>
        </div>
    );
};

export default CliniciansBenefits;
