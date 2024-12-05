import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.24058 0H1.39052L0.208699 17.804C0.064106 19.9255 0.806207 22.0118 2.258 23.5654C3.70979 25.1191 5.74112 26.0007 7.86749 26H19.1945C21.318 26.0004 23.3468 25.1209 24.7981 23.5707C26.2494 22.0205 26.9935 19.9382 26.8533 17.8194L25.6562 0H6.24058ZM6.24058 1.53483H2.83326L1.74353 17.9115C1.62878 19.6076 2.22245 21.2753 3.38311 22.5174C4.54377 23.7596 6.1675 24.4648 7.86749 24.4652H19.1945C20.8972 24.4691 22.525 23.7657 23.689 22.5231C24.8531 21.2804 25.4488 19.6102 25.3338 17.9115L24.2288 1.53483H20.8214V2.50177C20.8214 6.52817 17.5574 9.79221 13.531 9.79221C9.50462 9.79221 6.24058 6.52817 6.24058 2.50177V1.53483ZM19.2866 1.53483H7.77541V2.50177C7.77541 5.68051 10.3523 8.25738 13.531 8.25738C16.7097 8.25738 19.2866 5.68051 19.2866 2.50177V1.53483Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };