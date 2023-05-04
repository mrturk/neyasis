import React from "react";

function CloseIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <path
          id="uag410irpa"
          d="M10.275 8l3.411-3.411a1.072 1.072 0 000-1.517l-.758-.758a1.072 1.072 0 00-1.517 0L8 5.725 4.589 2.314a1.072 1.072 0 00-1.517 0l-.758.758a1.072 1.072 0 000 1.517L5.725 8l-3.411 3.411a1.072 1.072 0 000 1.517l.758.758a1.072 1.072 0 001.517 0L8 10.275l3.411 3.411a1.072 1.072 0 001.517 0l.758-.758a1.072 1.072 0 000-1.517L10.275 8z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z"></path>
        <use fill="#BFBFBF" fillRule="nonzero" xlinkHref="#uag410irpa"></use>
      </g>
    </svg>
  );
}

export default CloseIcon;
