"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesSliderDemo ()
{
    const images = [
        "/svg/imageslider1.svg",
        "/png/clinicansfront.png",
    ];
    return (
        <ImagesSlider className="h-[30rem] w-[30rem]" images={ images }>
            <motion.div
                initial={ {
                    opacity: 0,
                    y: -80,
                } }
                animate={ {
                    opacity: 1,
                    y: 0,
                } }
                transition={ {
                    duration: 0.6,
                } }
                className="z-50 flex flex-col justify-center items-center"
            >

            </motion.div>
        </ImagesSlider>
    );
}
