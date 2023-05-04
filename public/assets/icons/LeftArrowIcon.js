import React from "react";

function LeftArrowIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          id="i9bsutjdha"
          d="M18.428 10.728l.814.842a.93.93 0 010 1.287l-7.12 7.376a.855.855 0 01-1.241 0l-7.123-7.376a.93.93 0 010-1.287l.814-.842a.86.86 0 011.256.015l4.206 4.572V4.411c0-.505.392-.911.88-.911h1.172c.488 0 .88.406.88.91v10.905l4.206-4.572a.853.853 0 011.256-.015z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <use
          fill="#FFF"
          fillRule="nonzero"
          transform="rotate(90 11.5 12)"
          xlinkHref="#i9bsutjdha"
        ></use>
      </g>
    </svg>
  );
}

export default LeftArrowIcon;
