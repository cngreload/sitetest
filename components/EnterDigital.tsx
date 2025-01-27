"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";


const EnterDigital: React.FC = () =>
{
    return (
        <WavyBackground className="w-screen h-[18rem] rounded-full">
            <h1 className="mt-[8rem]  text-2xl md:text-4xl lg:text-4xl text-black font-extrabold text-center ">
                ورود به دنیای دیجیتال هوشمند
            </h1>
        </WavyBackground>
    );
};

export default EnterDigital;