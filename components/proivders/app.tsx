'use client';

import { type ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode
}
function AppProviders({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
export default AppProviders;
