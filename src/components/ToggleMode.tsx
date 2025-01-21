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
    }, []); // Empty dependency array to run only on mount

    if (!mounted) {
        return <Button variant="primary" size="icon" disabled={true} />;
    }

    const dark = theme === "dark";

    return (
        <Button
            variant="primary"
            size="icon"
            onClick={() =>   setTheme(dark ? "light" : "dark")}
        >
            {dark ? <Sun className="hover:cursor-pointer hover:text-primary"/> : <Moon className="hover:cursor-pointer hover:text-primary"/>}
        </Button>
    );
};

export default ToggleMode;
