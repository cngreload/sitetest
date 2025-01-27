"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPin2 ()
{
    return (
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                href="https://clinicans.ir"
            >
                <div className="flex basis-full flex-col rounded-2xl tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[25rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">

                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                            <img src="/png/clinicansfront.png" alt="clinicans" />
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </div>
    );
}
