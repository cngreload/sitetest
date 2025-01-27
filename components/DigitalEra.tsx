// File: components/HeroSection.tsx

import React from "react";
import { LampContainer } from "./ui/lamp";

interface HeroSectionProps
{
    headline: string;
    buttonText: string;
    onButtonClick: () => void;
}

const DigitalEraSection: React.FC<HeroSectionProps> = ( {
    headline,
    buttonText,
    onButtonClick,
} ) =>
{
    return (
        <div className="relative bg-black text-white flex flex-col items-center justify-center text-center">
            <LampContainer>
                {/* Headline */ }
                <h1 className=" text-3xl md:text-5xl font-bold leading-tight">
                    { headline }
                </h1>

            </LampContainer>
        </div>
    );
};

export default DigitalEraSection;
