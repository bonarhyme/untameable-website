import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SpotlghtProps {
  className: ClassValue[];
}

export const Spotlight: React.FC<SpotlghtProps> = ({ className }) => {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      <div
        className={twMerge(
          clsx([
            'absolute',
            'left-[50vw]',
            'top-[50vh]',
            'w-[140vw]',
            'h-[140vw]',
            'min-w-[80vh]',
            'min-h-[80vh]',
            'translate-x-[-50%]',
            'translate-y-[-50%]',
            `bg-gradient-radial from-[_var(--spotlight)] to-transparent to-70%`,
            'opacity-75',
            className,
          ])
        )}
      />
    </div>
  );
};
