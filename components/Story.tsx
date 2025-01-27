
import React from "react";
import { FirstModal } from "./FirstModal";
import { SecondModal } from "./SecondModal";
import { ThirdModal } from "./ThirdModal";

const Story: React.FC = () =>
{
    return (
        <section className="">
            <p className="bg-slate-500 text-center text-lg lg:text-4xl font-extrabold mt-10 items-center">
                ظهور سامانه نوین : نوید احیای طرحی ملی
            </p>
            <div className="flex flex-row md:gap-12 md:justify-center gap-1 justify-between -mt-10 ">
                <FirstModal />
                <SecondModal />
                <ThirdModal />
            </div>
        </section>
    );
};

export default Story;