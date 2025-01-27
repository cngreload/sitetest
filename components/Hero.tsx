import React from "react";
import HeroText from "./HeroText";

import ThreeCircleTech from "./HeroTech";

const Hero: React.FC = () =>
{
    return (


        <section className="flex-1 lg:flex h-fit ">
            <div className="w-fit lg:w-1/2 flex items-center justify-center">
                <HeroText />
            </div>

            {/* <ThreeCircleAnimation /> */ }
            <section className="w-[50%] -mt-24   ">

                <ThreeCircleTech />
            </section>
        </section>

    );
};

export default Hero;
