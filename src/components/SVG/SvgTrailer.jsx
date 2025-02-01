import * as React from 'react';

const SvgTrailer = ({
  size = 200,
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 22,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    viewBox="0 0 640 512"
    {...props}
  >
    <path d="M624 320h-80V80a16 16 0 0 0-16-16H16A16 16 0 0 0 0 80v288a16 16 0 0 0 16 16h49.61c7.83-54.21 54-96 110.39-96s102.56 41.79 110.39 96H624a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16ZM96 243.68a176.29 176.29 0 0 0-32 20.71V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm96-18.54c-5.31-.49-10.57-1.14-16-1.14s-10.69.65-16 1.14V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm96 39.25a176.29 176.29 0 0 0-32-20.71V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8ZM384 320h-32V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm96 0h-32V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm-304 0a80 80 0 1 0 80 80 80 80 0 0 0-80-80Zm0 112a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" />
  </svg>
);

export default SvgTrailer;
