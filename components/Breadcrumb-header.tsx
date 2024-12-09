/* eslint-disable react/no-array-index-key */

'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from './ui/breadcrumb';

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName === '/' ? [''] : pathName?.split('/');

  return (
    <div className="flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={`/${path}`}>
                {path === '' ? 'home' : path}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
export default BreadcrumbHeader;
