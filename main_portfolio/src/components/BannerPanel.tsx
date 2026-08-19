import type { FC, ReactNode } from 'react';
import { Ribbon } from './Ribbon';

export const BannerPanel: FC<{ title: string; children: ReactNode; className?: string }> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`banner-panel ${className}`}>
      <div className="banner-ribbon-wrap">
        <Ribbon>{title}</Ribbon>
      </div>
      <div className="banner-body">
        {children}
      </div>
    </div>
  );
};
