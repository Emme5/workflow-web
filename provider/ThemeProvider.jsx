"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
    ...props
}) {

    // React.useEffect(() => {
    //     setMounted(true);
    // },[]);

    // if (!mounted) return null;

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}