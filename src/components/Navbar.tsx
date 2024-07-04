'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {Sun,MoonStar} from 'lucide-react'

function Navbar({ className }: { className?: string }) {
    const [isDark, setIsDark] = useState<boolean>(true);
    const [active, setActive] = useState<string | null>(null);
    const toggleDarkMode = () => {
      setIsDark(!isDark);
      const html = document.getElementById("html");
      if (html) {
        html.classList.toggle("dark");
      }
    }
  return (
    <div
    className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Courses"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Music Production
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            
            </MenuItem>
            </Link>
            <button onClick={toggleDarkMode} className="ml-2">
            {isDark ? (
              <Sun  className="text-black dark:text-white" />
            ) : (
              <MoonStar  className="text-black dark:text-white" />
            )}
            </button>
        </Menu>
    </div>
  )
}

export default Navbar