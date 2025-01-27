'use client';
import React from "react";
import BouncingLines from "./BouncingLines";
import ClinicianText from "./ClinicianText";
import IranMapScene from "./IranMapScene";
import Image from "next/image";

const CliniciansIntro: React.FC = () =>
{
    return (
        <section className="flex-1 h-9/10 lg:p-6 gap-[12rem] lg:flex">
            <div className="flex-1">
                <ClinicianText />
            </div>
            <div className="flex-1 w-fit">
                <Image
                    src="/png/irmap.png"
                    alt="نقشه ایران زمین"
                    height={ 500 }
                    width={ 500 } />
            </div>
        </section>
    );
};

export default CliniciansIntro;
