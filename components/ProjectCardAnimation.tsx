import React from "react";
import ProjectAnimation from "./ProjectAnimation";
import { AnimatedPin } from "./Pin";
import { AnimatedPin2 } from "./Pin2";

const ProjectCardAnimation: React.FC = () =>
{
    return (
        <section className="  flex flex-col lg:flex-row h-2/5 -mt-10">
            <div className="flex-1 ">
                <AnimatedPin />

            </div>
            <p className="text-center text-5xl font-extralight">محصولات</p>
            <div className="flex-1">
                <AnimatedPin2 />
            </div>
        </section>
    );
};

export default ProjectCardAnimation;
