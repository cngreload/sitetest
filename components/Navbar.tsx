"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Navbar ( { className }: { className?: string; } )
{
    const [ active, setActive ] = useState<string | null>( null );

    return (
        <div
            className={ cn(
                "sticky top-0 inset-x-0 w-full ",
                className
            ) }
        >
            {/* Menu */ }
            <div className="  ">
                <Menu setActive={ setActive }>
                    <MenuItem setActive={ setActive } active={ active } item="خانه">
                        <Link href="/">خانه</Link>
                    </MenuItem>
                    <MenuItem setActive={ setActive } active={ active } item="محصولات">
                        <Link href="/products">محصولات</Link>
                    </MenuItem>
                    <MenuItem setActive={ setActive } active={ active } item="درباره ما">
                        <Link href="/about">درباره ما</Link>
                    </MenuItem>
                </Menu>
                <Image
                    src="/svg/bmslogo.svg" // Replace with the actual logo path
                    alt="Company Logo"
                    width={ 120 } // Adjust logo size
                    height={ 40 }
                    className="cursor-pointer"
                />
            </div>

            {/* Logo */ }

        </div>
    );
}
