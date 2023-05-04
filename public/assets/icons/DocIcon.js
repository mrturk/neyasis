import React from "react";

function DocIcon({ ...props }) {
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
          id="utnaf2bpia"
          d="M11.58 12.004c-.21-.625-.205-1.832-.084-1.832.35 0 .316 1.441.083 1.832zm-.072 1.844c-.32.789-.72 1.691-1.183 2.449.763-.274 1.625-.672 2.62-.856a5.163 5.163 0 01-1.437-1.593zm-3.92 4.875c0 .03.55-.211 1.454-1.57-.28.245-1.213.956-1.454 1.57zM14.332 8.25H20v12.813c0 .519-.446.937-1 .937H5c-.554 0-1-.418-1-.938V2.938C4 2.418 4.446 2 5 2h8.333v5.313c0 .515.45.937 1 .937zM14 14.96c-.833-.476-1.387-1.132-1.78-2.1.188-.723.484-1.82.26-2.508-.197-1.149-1.768-1.036-1.992-.266-.209.715-.017 1.723.337 3.008-.483 1.078-1.196 2.523-1.7 3.351-.004 0-.004.004-.008.004-1.13.543-3.067 1.738-2.271 2.656.233.27.667.391.896.391.746 0 1.487-.703 2.545-2.414 1.075-.332 2.255-.746 3.292-.906.904.46 1.963.762 2.667.762 1.216 0 1.3-1.25.82-1.696-.578-.531-2.262-.379-3.066-.281zm5.708-8.858l-4.083-3.829A1.034 1.034 0 0014.917 2h-.25v5H20v-.238a.906.906 0 00-.292-.66zm-3.087 9.972c.17-.105-.104-.465-1.783-.351 1.545.617 1.783.351 1.783.351z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <use fill="#808285" fillRule="nonzero" xlinkHref="#utnaf2bpia"></use>
      </g>
    </svg>
  );
}

export default DocIcon;


export function DocXIcon({ ...props }) {
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
          id="path-1"
          d="M13.333 7.313V2H5c-.554 0-1 .418-1 .938v18.125c0 .519.446.937 1 .937h14c.554 0 1-.418 1-.938V8.25h-5.667c-.55 0-1-.422-1-.938zM20 6.761V7h-5.333V2h.254c.267 0 .52.098.708.273l4.08 3.829a.906.906 0 01.291.66z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-150 -995)">
          <g transform="translate(150 951)">
            <g transform="translate(0 44)">
              <path d="M0 0L24 0 24 24 0 24z"></path>
              <mask fill="#fff">
                <use xlinkHref="#path-1"></use>
              </mask>
              <use fill="#808285" fillRule="nonzero" xlinkHref="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
