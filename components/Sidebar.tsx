'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const routes = [
  {
    href: '/',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    href: '/workflows',
    label: 'Workflows',
    icon: Layers2Icon,
  },
  {
    href: '/credentials',
    label: 'Credentials',
    icon: ShieldCheckIcon,
  },
  {
    href: '/billing',
    label: 'Billing',
    icon: CoinsIcon,
  },
];

function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute = routes.find((route) => route.href === pathname);

  return (
    <div
      className={cn(
        'relative hidden md:block w-[280px] h-screen overflow-hidden bg-primary/5',
        'dark:bg-secondary/30 text-muted-foreground dark:text-foreground',
        'border-r-2 border-separate',
      )}
    >
      <div
        className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4"
      >
        <Logo />
      </div>
      <div className="p-2">@TODO CREDITS</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={route.href === activeRoute?.href ? 'sidebarActiveItem' : 'sidebarItem'}
            asChild
          >
            <Link href={route.href}>
              <route.icon size={20} />
              {route.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
