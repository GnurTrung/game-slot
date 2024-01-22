import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    {...props}
  >
    <circle cx="10" cy="10.5" r="10" fill="#955BE8" />
  </svg>
);
export default SvgComponent;
