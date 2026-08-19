import type { FC, ReactNode } from 'react';

export const OrnateWrapper: FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <section className={`ornate-border w-full ${className}`}>
      <div className="ornate-corner corner-tl"></div>
      <div className="ornate-corner corner-tr"></div>
      <div className="ornate-corner corner-bl"></div>
      <div className="ornate-corner corner-br"></div>
      {children}
    </section>
  );
};
