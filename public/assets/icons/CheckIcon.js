import React from "react";

function CheckIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      {...props}
    >
      <path
        fill="#6B7998"
        fillRule="evenodd"
        d="M7.482 0C3.628 0 .48 3.148.48 7.002.48 10.856 3.628 14 7.482 14c3.855 0 6.998-3.144 6.998-6.998 0-1.804-.694-3.45-1.822-4.693l-4.32 7.206a1 1 0 01-1.55.207L4.293 7.319A1 1 0 115.68 5.88l1.587 1.528 3.83-6.385A6.931 6.931 0 007.483 0z"
      ></path>
    </svg>
  );
}

export default CheckIcon;
