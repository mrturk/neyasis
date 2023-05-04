import React from "react";

function MediaIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#2867B2"
          d="M20 2.5A2.5 2.5 0 0017.5 0h-15A2.5 2.5 0 000 2.5v15A2.5 2.5 0 002.5 20h15a2.5 2.5 0 002.5-2.5v-15z"
        ></path>
        <g fill="#FFF">
          <path d="M3.177 7.555h3.002V17H3.177z"></path>
          <path
            fillRule="nonzero"
            d="M4.698 3C3.67 3 3 3.706 3 4.632c0 .906.65 1.632 1.658 1.632h.02c1.046 0 1.698-.726 1.698-1.632C6.356 3.706 5.724 3 4.698 3zm8.847 4.332c-1.592 0-2.306.916-2.705 1.56V7.555h-3c.04.886 0 9.445 0 9.445h3v-5.275c0-.282.02-.565.099-.766.217-.564.71-1.148 1.54-1.148 1.085 0 1.52.866 1.52 2.135V17H17v-5.417c0-2.9-1.48-4.25-3.455-4.25z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default MediaIcon;
