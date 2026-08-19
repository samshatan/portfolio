import type { FC, ReactNode } from 'react';

export const Ribbon: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="ribbon fantasy-font text-amber-950 font-bold">{children}</div>;
};
