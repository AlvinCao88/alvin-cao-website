"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ToggleMode = () => {
    const { theme, setTheme } = useTheme(); // Extract theme and setTheme from useTheme hook
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []); 

    if (!mounted) {
        return <Button   variant="ghost"  size="icon" disabled={true} />;
    }

    const dark = theme === "dark";

    return (
        <div
            className="duration-200"
            onClick={() =>   setTheme(dark ? "light" : "dark")}
        >
            {dark ? <Sun className="hover:cursor-pointer hover:text-primary"/> : <Moon className="hover:cursor-pointer hover:text-primary"/>}
        </div>
    );
};

export default ToggleMode;
