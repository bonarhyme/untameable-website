import { ComponentProps } from 'react';
import { twStyled } from '../helper/tw-styled';

const _LogoIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='534.967'
      height='674.447'
      viewBox='0 0 534.967 674.447'
      fill='#131e2e'
      stroke='#121c2c'
      {...props}
      className={'mix=blend-darken isolation-isolate ' + props.className}
    >
      <g
        id='Group_1466'
        data-name='Group 1466'
        transform='translate(-860.53 -345.877)'
        opacity='0.345'
      >
        <g
          id='Group_1464'
          data-name='Group 1464'
          transform='translate(860.53 345.877)'
        >
          <path
            id='Subtraction_2'
            data-name='Subtraction 2'
            d='M271.818,674.447c-67.648,0-135.821-7.187-181.1-13.215-48.973-6.521-82.549-13.149-82.882-13.215L0,493.318l1.229-136.59,139.09-93.541c-2.492,7.223-24.445,72.351-24.445,136.612,0,29.326,7.486,175.618,155.268,175.618,3.69,0,7.491-.1,11.3-.283,60.818-3.005,101.374-33.031,123.987-91.792,19.4-50.4,22.01-113.9,22.01-169.368,0-108.915-29.209-219.634-29.5-220.74V89.262L531.658,0V.353c0,.219.461,22.349,1.065,60.1.838,52.2,2.244,155.837,2.244,263.4,0,163.524-3.276,322.574-3.309,324.162l-.161.038c-5.732,1.148-36.558,7.182-80.651,13.178C406.513,667.261,339.465,674.447,271.818,674.447Z'
            transform='translate(0 0)'
          />
        </g>
        <g
          id='Group_1465'
          data-name='Group 1465'
          transform='translate(1071.992 515.435)'
        >
          <path
            id='Path_2364'
            data-name='Path 2364'
            d='M156.625,202.893A385.016,385.016,0,0,1,101.1,254.717a366.142,366.142,0,0,1-64.932,36.92A650.679,650.679,0,0,1,27.4,193.274a611.81,611.81,0,0,1,8.763-96.506l120.459-84.6c4.1,30.931,5.211,64.088,5.445,95.331-.334,32.564-1.444,63.119-5.445,95.4'
            transform='translate(-27.403 -12.164)'
            strokeWidth='1'
          />
        </g>
      </g>
    </svg>
  );
};

export const LogoIcon = twStyled(_LogoIcon)();
