import React from "react";

function EditIcon({ ...props }) {
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
          id="o4jxyqvxwa"
          d="M16.396 5.11l3.494 3.494a.379.379 0 010 .534l-8.459 8.458-3.593.4a.753.753 0 01-.833-.834l.399-3.593 8.458-8.459a.379.379 0 01.534 0zm6.159-.76l-1.906-1.905a1.527 1.527 0 00-2.155 0L17.11 3.828a.382.382 0 000 .538l3.523 3.523c.148.148.39.148.538 0l1.383-1.383a1.527 1.527 0 000-2.155zM15.57 15.339v4.09H3.43V6.572h8.72a.454.454 0 00.322-.14l1.518-1.607c.288-.306.084-.824-.322-.824H2.82C1.816 4 1 4.864 1 5.929V20.07C1 21.136 1.816 22 2.821 22H16.18c1.004 0 1.82-.864 1.82-1.929v-6.34c0-.43-.49-.643-.778-.341l-1.518 1.607a.51.51 0 00-.133.341z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <use fill="#FFF" fillRule="nonzero" xlinkHref="#o4jxyqvxwa"></use>
      </g>
    </svg>
  );
}

export default EditIcon;
