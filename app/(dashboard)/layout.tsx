import { type ReactNode } from 'react';
import BreadcrumbHeader from '@/components/Breadcrumb-header';
import DesktopSidebar from '@/components/Sidebar';
import { ModeToggle } from '@/components/Theme-mode-toggle';
import { Separator } from '@/components/ui/separator';

function layout({ children } : { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ModeToggle />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default layout;
