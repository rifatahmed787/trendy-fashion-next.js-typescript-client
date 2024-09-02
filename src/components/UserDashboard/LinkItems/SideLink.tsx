"use client"
import React from 'react';
import { LinkItems } from './LinkItems';
import { Button } from '@/components/UI/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideLink = () => {
    const pathname=usePathname()
    return (
        <div className='flex flex-row lg:flex-col items-center lg:items-start'>
             {LinkItems?.map((item) => {
              const isSelected = pathname === item?.ref;
              return (
                <Button
                  key={item.ref}
                  className={`${
                    isSelected
                      ? "border-b-[3px] border-primary-100 text-primary-100"
                      : "mainNav-hover-effect"
                  }`}
                >
                  <Link href={item?.ref} className={`font-bold py-2 `}>
                    <div className="group">
                      <span>{item?.value}</span>
                    </div>
                  </Link>
                </Button>
              );
            })}
        </div>
    );
};

export default SideLink;