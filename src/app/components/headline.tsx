import { ComponentProps } from 'react';
import { twStyled } from '../helper/tw-styled';

interface HeadlineProps extends ComponentProps<typeof Heading1> {
  primary: string;
  secondary?: string;
}

export const Headline: React.FC<HeadlineProps> = twStyled(
  ({ primary, secondary }) => {
    return (
      <Heading1
        className={[
          'text-',
          'text-white',
          'flex',
          'flex-col',
          'max-w-[1100px]',
          'whitespace-nowrap',
          'text-9xl',
          'leading-[1]',
          'font-extrabold',
          'justify-center',
          'w-[100%]',
        ]}
      >
        <span className='inline-flex flex-1 items-center gap-8'>
          {!secondary && (
            <hr className='w-1/2 border-[_var(--color-primary)]' />
          )}
          <span>{primary}</span>
          <hr className='w-1/2 border-[_var(--color-primary)]' />
        </span>

        {secondary && (
          <span className='inline-flex flex-1 items-center gap-8'>
            <hr className='w-1/2 border-[_var(--color-primary)]' />
            <span>{secondary}</span>
          </span>
        )}
      </Heading1>
    );
  }
)();

const Heading1 = twStyled('h1')();
