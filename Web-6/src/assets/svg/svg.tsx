import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export const SearchIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0524 3.75C7.0541 3.75 3.8128 6.99594 3.8128 11C3.8128 15.0041 7.0541 18.25 11.0524 18.25C15.0508 18.25 18.2921 15.0041 18.2921 11C18.2921 6.99594 15.0508 3.75 11.0524 3.75ZM2.31494 11C2.31494 6.16751 6.22685 2.25 11.0524 2.25C15.878 2.25 19.7899 6.16751 19.7899 11C19.7899 15.8325 15.878 19.75 11.0524 19.75C6.22685 19.75 2.31494 15.8325 2.31494 11Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0153 16.4277C16.3077 16.1348 16.7819 16.1348 17.0744 16.4277L22.0673 21.4277C22.3597 21.7206 22.3597 22.1955 22.0673 22.4884C21.7748 22.7813 21.3006 22.7813 21.0081 22.4884L16.0153 17.4883C15.7228 17.1954 15.7228 16.7206 16.0153 16.4277Z"
      fill={fill}
    />
  </svg>
);

export const CartIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.26471 2.85306C1.34594 2.44689 1.74106 2.18348 2.14723 2.26471L3.19659 2.47458C4.38184 2.71163 5.27335 3.69482 5.39363 4.89754L5.47889 5.75014H19.0544C21.0386 5.75014 22.4945 7.61488 22.0133 9.53988L20.8905 14.0309C20.4175 15.9229 18.7176 17.2501 16.7674 17.2501H7.77449C6.38244 17.2501 5.20994 16.2099 5.04408 14.8278L4.0546 6.58215L3.90107 5.0468C3.8464 4.50011 3.44117 4.0532 2.90242 3.94545L1.85306 3.73558C1.44689 3.65435 1.18348 3.25923 1.26471 2.85306ZM5.64552 7.25014L6.5334 14.6491C6.60879 15.2773 7.14174 15.7501 7.77449 15.7501H16.7674C18.0293 15.7501 19.1293 14.8913 19.4353 13.6671L20.5581 9.17607C20.8027 8.1978 20.0627 7.25014 19.0544 7.25014H5.64552Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 13.5C8.25 13.0858 8.58579 12.75 9 12.75H13C13.4142 12.75 13.75 13.0858 13.75 13.5C13.75 13.9142 13.4142 14.25 13 14.25H9C8.58579 14.25 8.25 13.9142 8.25 13.5Z"
      fill={fill}
    />
    <path
      d="M10 20C10 20.8284 9.32843 21.5 8.5 21.5C7.67157 21.5 7 20.8284 7 20C7 19.1716 7.67157 18.5 8.5 18.5C9.32843 18.5 10 19.1716 10 20Z"
      fill={fill}
    />
    <path
      d="M19 20C19 20.8284 18.3284 21.5 17.5 21.5C16.6716 21.5 16 20.8284 16 20C16 19.1716 16.6716 18.5 17.5 18.5C18.3284 18.5 19 19.1716 19 20Z"
      fill={fill}
    />
  </svg>
);
export const HeartIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7932 5.35843C17.8719 3.33365 14.7741 3.33365 12.8528 5.35844C12.3892 5.84702 11.6108 5.84702 11.1472 5.35844C9.22591 3.33365 6.12807 3.33365 4.20681 5.35844C2.2644 7.40552 2.2644 10.74 4.20681 12.7871L10.3678 19.2801C11.2551 20.2152 12.7449 20.2152 13.6322 19.2801L19.7932 12.7871C21.7356 10.74 21.7356 7.40552 19.7932 5.35843ZM12 4.09005C14.5266 1.68029 18.4455 1.75892 20.8813 4.32596C23.3729 6.95182 23.3729 11.1937 20.8813 13.8195L14.7203 20.3126C13.2416 21.871 10.7584 21.871 9.27972 20.3126L3.1187 13.8195C0.627109 11.1937 0.627107 6.95182 3.1187 4.32596C5.55447 1.75893 9.47337 1.68029 12 4.09005Z"
      fill={fill}
    />
  </svg>
);
export const DownIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2444 11.4673C10.1039 11.5877 9.89672 11.5877 9.75629 11.4673L4.57375 7.02516C4.31167 6.80052 3.91711 6.83087 3.69247 7.09295C3.46783 7.35503 3.49818 7.74959 3.76026 7.97423L8.9428 12.4164C9.55135 12.938 10.4493 12.938 11.0579 12.4164L16.2404 7.97423C16.5025 7.74959 16.5328 7.35503 16.3082 7.09295C16.0836 6.83087 15.689 6.80052 15.4269 7.02516L10.2444 11.4673Z"
      fill={fill}
    />
  </svg>
);
export const RightIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
  width = 30,
  height = 30,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    className={className}
  >
    <path
      d="M10.6663 8.16526L6.16176 12.8291L5.33301 11.9705L9.00884 8.16526L5.33301 4.35575L6.16176 3.49577L10.6663 8.16526Z"
      fill={fill}
    />
  </svg>
);
export const LeftIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
  width = 30,
  height = 30,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      d="M10 14.9947L18.4461 6.25L20 7.85982L13.1078 14.9947L20 22.1375L18.4461 23.75L10 14.9947Z"
      fill={fill}
    />
  </svg>
);
export const LeftArrow: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.95204 8.71527C10.2937 9.05697 10.2937 9.61099 9.95204 9.9527L6.77908 13.1257L22.1667 13.1257C22.6499 13.1257 23.0417 13.5174 23.0417 14.0007C23.0417 14.4839 22.6499 14.8757 22.1667 14.8757L6.7791 14.8757L9.95204 18.0486C10.2937 18.3903 10.2937 18.9443 9.95204 19.286C9.61033 19.6277 9.05631 19.6277 8.7146 19.286L4.87289 15.4443C4.07557 14.647 4.07557 13.3543 4.87289 12.557L8.7146 8.71527C9.05631 8.37356 9.61033 8.37356 9.95204 8.71527Z"
      fill={fill}
    />
  </svg>
);
export const RightArrow: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0481 8.71429C18.3898 8.37258 18.9438 8.37258 19.2856 8.71429L23.1273 12.556C23.9246 13.3533 23.9246 14.646 23.1273 15.4433L19.2856 19.2851C18.9438 19.6268 18.3898 19.6268 18.0481 19.2851C17.7064 18.9433 17.7064 18.3893 18.0481 18.0476L21.2211 14.8747L5.8335 14.8747C5.35025 14.8747 4.9585 14.4829 4.9585 13.9997C4.9585 13.5164 5.35025 13.1247 5.8335 13.1247L21.2211 13.1247L18.0481 9.95173C17.7064 9.61002 17.7064 9.056 18.0481 8.71429Z"
      fill={fill}
    />
  </svg>
);

export const Transit: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="49"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    className={className}
  >
    <rect x="0.5" width="48" height="48" fill="url(#pattern0_6765_8293)" />
    <defs>
      <pattern
        id="pattern0_6765_8293"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_6765_8293" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_6765_8293"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const Guarantee: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="49"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    className={className}
  >
    <rect x="0.5" width="48" height="48" fill="url(#pattern0_6765_8298)" />
    <defs>
      <pattern
        id="pattern0_6765_8298"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_6765_8298" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_6765_8298"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const HoursIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="49"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    className={className}
  >
    <rect x="0.5" width="48" height="48" fill="url(#pattern0_6765_8303)" />
    <defs>
      <pattern
        id="pattern0_6765_8303"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_6765_8303" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_6765_8303"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const Headset: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="49"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    className={className}
  >
    <rect x="0.5" width="48" height="48" fill="url(#pattern0_6765_8308)" />
    <defs>
      <pattern
        id="pattern0_6765_8308"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_6765_8308" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_6765_8308"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAMsUlEQVR4nO2de3Bc1X3HP79zVpITDAbLdoC6kwk2CaQBQhoSBqgJHjptE0KaCXJCbGMPcdfatV0oDbUlINkA1kqEThIba2UxnhhDcJB5pMRpWpIpUAIETPogFJLBkD4CMVg8YoxtWXvOr39Ilu9drbTSvrzr3c8/0v3dc3/nd89377mP84I6deqMjRzpACZES5+l+aUzDfIJhLmqeqoIc4GpwHHDfwH2AnuAvYq8KLATZac37il2n/pLti1wR+oUJkrlChJde5Kx9jJF/0LgfIYKvhB+r8Lj4vmxN/Zeuv9uVzHCLDaVJUhLotE2N37RiywVuBCwJcrJKTxqkO+6/gN9bEscLFE+k6YyBLk6cbw5MKUV0VXAyWXO/RVgvXfSQ++a35c571EcWUGiGxuMeXM5QgJoHjet8JoqPxPkP0TZ6VR2Ehncjbd7cNP3AmDfnIpxx5FumGlF56owV+FsQS8AZuWIph/h637WQC+JRLoo55cHR06QWMeFRqQH5bSxkgjsUOUeL2Y7qdW/Lii/aMdpxshnRPiiwjnjpHzBo8tJtT9WUH55Un5BliammPdMWQt6NWCypHgHZJMX3UB3286SxBBPzjWelQhXAsdmSeGBv/eRY25g/V8PlCSGMSivINFb5hjrfgB8JMvePSBd3rGhbHV5tHOaiehKlNVkF+ZZb9N/yW03/KYs8VBOQWIdFxrkPkbfKzyit3vf8DV6rn29bPEEWbb2fabB3AgsY/RV2++NfIENa/61HKGURRAb6/yyopuBhoxd/+3RpaTaHy1HHDlpTX7KCJuB92fsOSjCUtfdtrXUIWSrw4uKbe1YrOgWRomh3/eRgbMqRgyAnrZHfGTgTET7MvY0qnKnbU0uLHUIJb1CbGvHYhXZTFh4BfmaT61eC6KlzD9/VExr5/UI3yBcRk6QK1xqzd2lyrl0ggxd/g8RvjLSIlxRjku/GNh48nJVtgCRgPmgRy8u1WNxaQRZedMHjIs8BcwMWEv+6yoFNt5xmarcTfiH9YYXzi3FY3nx7yGr1jWZdOQfCIuh1SgGgOtuv1eQK4Fg9dpslHtZta6p2PkVXRAz+G4S4YyQUflGNYpxCJdacxfoTRnms8zgvhuLnVdRq6xIfO1FXs1PCQitcJ+m1rRU7g18oqhIvPM+UT4fMHpv5KJivqMU7wpJJCJezfoMn6/owaZo9YsBIKqNA1cC/xcwGuO1h0QiMtZRk6VogphdTa3AHwVMamApm655s1h5HHG+nXjbCMsI309ON683RYuVRXGqrGjnNGP1JYKfRZStvqfty0XxX2GYWMdWkC8FTP0+MjCH9Yk9Bfsu1AGAMcQIf6Pa761rK4bvSsRH7LXAuwHTDOMai3KVFC7IqnVNwy19Qdax4fr/Kdh3pbJ+9W+B20I2L1fRkmgs1HXBglj37uWEm10PeLHfLtRvpeOd/w5wuK1EmG1nTFlQqN+CBfHK4gzTlkrt0VFUeq/7HchdQZMXf0WhbgsTJLr2pOHeISN46C3IZxXhVULnKirzid9yYiE+CxLEROwCwl11fk2q7ReF+KwqelY/DbwYsFijvqUQlwUJoqp/GjII3y/EX3WioS/XSkaZTJL8BWnps4KcHzR5p/9cSDDViFceCm4LzKOlL+8OfvkLMv03Z4MeH7DsRZufydtfteKbnyb8TjKNWS+ela+7vAWx1p0d3FbRJ+ldPpivv6qld/mgwpNBk/XmY/m6y1sQVfPB4LZ4eS5fX9WOKP8V3FaVU/P1lb8g6AfDFimsZ2FVEz53RT+Ur6fJCxLd2GBjHUuGhwgEYqIZtDI6b5cVFYQTghYRLrCxjiVEN2Z2e8rJ5ApwVcdMm5b7FS7IGhr8i0YGPl+Mr55VQbRzmlgeEPSibLsFHnMR/QLr23dP1OXEr5DoxobxxBgOYL4dbPphIY99VUNLn7VGHxxLDACFP7GDcu9kGrAmLIiNvLlwPDFGghDm2eaXvpQrXbVjZ768UIV5udKpMM++PmXC7UK5BVnR8UkTT96qyi2hjGC7Vzfbq5utsD10jPBXEw2gavH6leDmeOWhqreaWOc3ae36RC63Y99DYslTBL4lcGn2eNxseq5/BYBVXbNN2gfbmvt9qm1mtuOOFkwsuRuYcWg7R3mMoPCg2vTVY/Woz3qFRFqT8w38+1hiAIxkDocabILM4OgnfI7jl8cIApcaF3k20tr5Z9n2jxLEruj8nBd+TOGjXuuMzVQv+qCNdYz6wYcFiXedrl7vBEJNkaPuEXUmjcKPMkyNitxFvOv0oPGwIIlExKjvIzySaFBElmiq7bOlC7U20FTbJYIuBYLf+4416vuCj8UjgpjXmpYRHmqmIix23Wu2lD7c2sCl2u8QYTHhfl0fMbumjDyxDQkST0wdHpocQHtcd9s9ZYizphgqU+0JGUUTxBNTYVgQ65sWoLwvkOJtb7ihjHHWFB65DngrYDrR0nQZDAviRRaFjhD9Dhva3yhbhLVGqu0thHVB06HeO4aVXScLGuw5ot6k7yhrgDWIHxqZNXIvEfjU0IQ7zp9P4OYuws/LOS67Zkm1vSzwVMBirDHnGUVC31cUrZxRsUc5qhIaV6LCOUbRUPuvQO30qzrCZJa1wh8bgZOCRifmhfKGVbs43PPBbYGTDcL0UCo19aerchGJZA5mOsGgHB8y7dv3dvkiqnH27s8iSPg1vk45OeG4zPYoNUD4imhsOIE65WH/vukZlrcM4Vd4aLCZieqUDMn88b9tVOXVoMV6/XAZI6pprDHBUcsovGqyPQuXN6zaRVU+HtwW2GHE+B0h4wS6ttQpDsOzpR7eVn5hnLFPMDTpIwCqnMvKmz5Q9uhqjVjyFIVPBizeef+E4bbVryo8EtghxkeWlDu+WsOgSwh0w1KVh+m97ncGwCjfC6VWrqH1m7kmHq6TL9FbZ4BcFTQZo3fB8Gd3Zwb6EF4L7D/WyGBGk26dYmHswRuBaQHTLvfeyDY41A7SndiLl6+HD5NW29p51PfRLTc2nrwcpDVkVElw67XvQqBhyp94YBMQHAUlKrrFxjrq95MiYePJparcQbgL73PDZQ+E+2WlvZgFwDuBxA2KbJZYst5RrkAknvyRKt8lPHfjHu+0JTj5f7jnYvfqFwRdBITW0xD4TCmDrQVE+XSGaUBUF9Lb/qugcVTfXpdqf9CI/3PgiK+lcRSz1wiXup72UTVP1t7v6e7rHvbKRxX5wZguV3XNzvr/EO9w9LMvtDV+eYygwgNeOSPd3fZQtv25xxjGk+cYlQUMvciMjPlQ2K7qWmloEEn7nmC1JsKTrrvtvJy+qxgbS/48+KY9XnkAu0Hu8F7uYePqcSdXyD32rbtth4cdNp58RvXwXCYCl4jY35L2ow4Zng366EZZjxwWZLzyEJGvTrSP9ITHGLpZA9sEfpYrncAO76ZvypWu2nEnDmwVyNllSuERN+vAhOcsntyw6GjnNGv1HxWyVkci+oxL66VDk3vVAFd2HStN/n6Bi7PtVuRhNb5lMt1yJz/QP5EwdlfjQkTiCmcwNFvAswp3ejd9Uy3Od2JjnYsUvTNg2i/CV9zuOX2TXcyyBmdeKAHLuz5uwu1K/+lTbR/Nx1XJF3SpBawJz/uikPeqCXVBioBCaKoqgZfz9VUXpCj44AT9CPpEvp7qghTKirUfA5kTsBxwxzT8JF93dUEKRLwJNeQp/PRQ20Y+1AUpgEhrcr5AaMi4obCvFHVB8iV+8x96Q/gNXPiV659zfyFui7YQSclpSTSa5qaoCIt0aDz9MRM8cp+gzyFmg9t9yvcm+6KWlRU3v984+0MkOHIZDPyNL9B/dbwYruw62Ti/nYzHy8ki8IRz8ulC1tqNxJIXe9hK5uQzKrf7njUFL1lR+VdIS6KxGGIAKJxnrW536LxJL8MU6zpXxN/gR7f8IfC4e0/jVdkOmywVL4hpbopSBDEOoXCBjXVd7lJk/wIbTbyXSKQZkZnW2bmKXohhPupPyzaSRuAxB5/jW9fsL0Z8FV9ljdkQFJyfajxab/4DEdsjcEkJwuv1+weuYnPiQLEcVrwgJpZ8B5h6aDs0c9tEGWeGtzx53gh/m+5u+6ci+gSqoMoic8hdQ8OR+hE5hUeNaMrtnvtAoU9TY1Hxggg8H6yyJO1T2nrzxKusVV2zJe17ciccwQF7gH5V+V8RfimiT7t0w0/o/Wp/SVQIUAVVVucK0Ntyp5w4giys1KVgK/5N3fcfuB2VfyuWP4HHXGp1xS4fXvGCsC1x0Ht3STGm/BB43Dn5bCUvBVvxVdYI0Y0Nxry1TEQXKZxJ4MkrB/sEnkW1270x9+6ifDqpU6dOnTp1KpD/B1+DdP2YSqEwAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);
export const PhoneIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    className={className}
  >
    <path
      d="M16.385 16.8486C14.7564 18.4772 10.5857 16.9469 7.06939 13.4306C3.5531 9.91432 2.02283 5.74356 3.65142 4.11496L4.72373 3.04265C5.464 2.30238 6.68379 2.32195 7.4482 3.08636L9.1091 4.74727C9.87352 5.51168 9.89308 6.73147 9.15281 7.47174L8.92249 7.70206C8.52281 8.10174 8.48371 8.74651 8.85509 9.19656C9.21331 9.63066 9.5995 10.063 10.0182 10.4818C10.437 10.9005 10.8693 11.2867 11.3034 11.6449C11.7535 12.0163 12.3983 11.9772 12.7979 11.5775L13.0283 11.3472C13.7685 10.6069 14.9883 10.6265 15.7527 11.3909L17.4136 13.0518C18.1781 13.8162 18.1976 15.036 17.4573 15.7763L16.385 16.8486Z"
      fill="#F6F6F6"
    />
    <path
      d="M16.385 16.8486C14.7564 18.4772 10.5857 16.9469 7.06939 13.4306C3.5531 9.91432 2.02283 5.74356 3.65142 4.11496L4.72373 3.04265C5.464 2.30238 6.68379 2.32195 7.4482 3.08636L9.1091 4.74727C9.87352 5.51168 9.89308 6.73147 9.15281 7.47174L8.92249 7.70206C8.52281 8.10174 8.48371 8.74651 8.85509 9.19656C9.21331 9.63066 9.5995 10.063 10.0182 10.4818C10.437 10.9005 10.8693 11.2867 11.3034 11.6449C11.7535 12.0163 12.3983 11.9772 12.7979 11.5775L13.0283 11.3472C13.7685 10.6069 14.9883 10.6265 15.7527 11.3909L17.4136 13.0518C18.1781 13.8162 18.1976 15.036 17.4573 15.7763L16.385 16.8486Z"
      stroke="#F6F6F6"
      strokeWidth="1.5"
    />
  </svg>
);
export const MailIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.54175 7.49967C1.54175 4.85331 3.68705 2.70801 6.33341 2.70801H14.6667C17.3131 2.70801 19.4584 4.85331 19.4584 7.49967V12.4997C19.4584 15.146 17.3131 17.2913 14.6667 17.2913H6.33341C3.68705 17.2913 1.54175 15.146 1.54175 12.4997V7.49967ZM5.95008 6.89967C5.61871 6.65115 5.14861 6.7183 4.90008 7.04967C4.65155 7.38105 4.71871 7.85115 5.05008 8.09967L8.85008 10.9497C9.82786 11.683 11.1723 11.683 12.1501 10.9497L15.9501 8.09967C16.2815 7.85115 16.3486 7.38105 16.1001 7.04967C15.8516 6.7183 15.3815 6.65115 15.0501 6.89967L11.2501 9.74967C10.8056 10.083 10.1945 10.083 9.75008 9.74967L5.95008 6.89967Z"
      fill="#F6F6F6"
    />
  </svg>
);
export const LocationIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.20825 8.68023C3.20825 4.68535 6.47903 1.45801 10.4999 1.45801C14.5208 1.45801 17.7916 4.68535 17.7916 8.68023C17.7916 11.1648 16.3427 13.6171 14.8071 15.4021C14.03 16.3054 13.2052 17.068 12.4776 17.6104C12.1145 17.8811 11.7654 18.1045 11.4503 18.2632C11.1549 18.412 10.8176 18.5413 10.4999 18.5413C10.1822 18.5413 9.8449 18.412 9.54953 18.2632C9.23445 18.1045 8.88538 17.8811 8.52221 17.6104C7.79468 17.068 6.96988 16.3054 6.19278 15.4021C4.65719 13.6171 3.20825 11.1648 3.20825 8.68023ZM10.4999 10.833C9.11921 10.833 7.99992 9.71372 7.99992 8.33301C7.99992 6.9523 9.11921 5.83301 10.4999 5.83301C11.8806 5.83301 12.9999 6.9523 12.9999 8.33301C12.9999 9.71372 11.8806 10.833 10.4999 10.833Z"
      fill="#F6F6F6"
    />
  </svg>
);
export const Sort: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.25 7C10.25 6.58579 10.5858 6.25 11 6.25L21 6.25C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75L11 7.75C10.5858 7.75 10.25 7.41421 10.25 7Z"
      fill="#1E2B36"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.75C5.69036 5.75 6.25 6.30964 6.25 7C6.25 7.69036 5.69036 8.25 5 8.25C4.30964 8.25 3.75 7.69036 3.75 7C3.75 6.30964 4.30964 5.75 5 5.75ZM7.75 7C7.75 5.48122 6.51878 4.25 5 4.25C3.48122 4.25 2.25 5.48122 2.25 7C2.25 8.51878 3.48122 9.75 5 9.75C6.51878 9.75 7.75 8.51878 7.75 7Z"
      fill="#1E2B36"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.75 17C13.75 16.5858 13.4142 16.25 13 16.25L3 16.25C2.58579 16.25 2.25 16.5858 2.25 17C2.25 17.4142 2.58579 17.75 3 17.75L13 17.75C13.4142 17.75 13.75 17.4142 13.75 17Z"
      fill="#1E2B36"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 15.75C18.3096 15.75 17.75 16.3096 17.75 17C17.75 17.6904 18.3096 18.25 19 18.25C19.6904 18.25 20.25 17.6904 20.25 17C20.25 16.3096 19.6904 15.75 19 15.75ZM16.25 17C16.25 15.4812 17.4812 14.25 19 14.25C20.5188 14.25 21.75 15.4812 21.75 17C21.75 18.5188 20.5188 19.75 19 19.75C17.4812 19.75 16.25 18.5188 16.25 17Z"
      fill="#1E2B36"
    />
  </svg>
);
export const ArrowRightPagination: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M8.115 14.8833L13.915 10.3283C13.9604 10.285 13.9966 10.2329 14.0213 10.1752C14.046 10.1176 14.0587 10.0555 14.0587 9.99269C14.0587 9.92994 14.046 9.86783 14.0213 9.81014C13.9966 9.75245 13.9604 9.70038 13.915 9.65707L8.115 5.09957C8.06324 5.05091 7.9984 5.01841 7.92843 5.00606C7.85847 4.99371 7.78642 5.00205 7.72113 5.03005C7.65584 5.05805 7.60013 5.1045 7.56085 5.1637C7.52157 5.2229 7.50043 5.29227 7.5 5.36332L7.5 14.6233C7.50114 14.694 7.52281 14.7629 7.56237 14.8216C7.60193 14.8802 7.65767 14.9261 7.72282 14.9536C7.78797 14.9812 7.85972 14.9892 7.92935 14.9767C7.99897 14.9642 8.06347 14.9318 8.115 14.8833Z"
      fill="#8E9BA6"
    />
  </svg>
);
export const ArrowLeftPagination: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M12.2361 5.15764L6.46113 9.69264C6.41598 9.73571 6.38004 9.7875 6.35548 9.84486C6.33092 9.90223 6.31826 9.96398 6.31826 10.0264C6.31826 10.0888 6.33092 10.1505 6.35548 10.2079C6.38004 10.2653 6.41598 10.3171 6.46113 10.3601L12.2361 14.9001C12.2876 14.9491 12.3523 14.9819 12.4222 14.9945C12.4922 15.007 12.5642 14.9987 12.6295 14.9706C12.6948 14.9425 12.7503 14.8958 12.7893 14.8364C12.8282 14.777 12.8489 14.7074 12.8486 14.6364V5.41639C12.8479 5.34576 12.8266 5.27689 12.7872 5.21823C12.7479 5.15957 12.6923 5.11368 12.6272 5.08619C12.5622 5.05871 12.4905 5.05083 12.421 5.06352C12.3515 5.07621 12.2873 5.10892 12.2361 5.15764Z"
      fill="#D2D8E0"
    />
  </svg>
);
export const Rate: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M14.6325 6.37152C14.5453 6.08979 14.3058 5.88969 14.0225 5.86305L10.1741 5.49841L8.65237 1.78171C8.54017 1.50933 8.28463 1.33301 8.00071 1.33301C7.71678 1.33301 7.46124 1.50933 7.34904 1.78235L5.82729 5.49841L1.97833 5.86305C1.69552 5.89033 1.45667 6.08979 1.36887 6.37151C1.28108 6.65324 1.36216 6.96225 1.57609 7.15704L4.485 9.81912L3.62723 13.7619C3.56446 14.0518 3.67229 14.3515 3.90281 14.5254C4.02671 14.6188 4.17167 14.6663 4.31786 14.6663C4.4439 14.6663 4.56892 14.6309 4.68113 14.5608L8.0007 12.4905L11.3191 14.5608C11.5619 14.7133 11.868 14.6994 12.098 14.5254C12.3286 14.351 12.4363 14.0512 12.3736 13.7619L11.5158 9.81912L14.4247 7.15757C14.6386 6.96225 14.7203 6.65377 14.6325 6.37152Z"
      fill="#FEC600"
    />
  </svg>
);
export const MinusIcon: React.FC<IconProps> = ({
  className = "",
  width = "24",
  height = "24",
  fill = "#1E2B36",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
      fill={fill}
    />
  </svg>
);
export const PlusIcon: React.FC<IconProps> = ({
  className = "",
  width = "24",
  height = "24",
  fill = "#1E2B36",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
      fill={fill}
    />
  </svg>
);
export const TrashIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.95034 9.65293C3.73461 8.03196 4.89121 5.71875 6.91743 5.71875H18.082C20.1082 5.71875 21.2648 8.03196 20.0491 9.65293C19.5302 10.3448 19.2497 11.1862 19.2497 12.051V18.4688C19.2497 21.0921 17.1231 23.2188 14.4997 23.2188H10.4997C7.87635 23.2188 5.74971 21.0921 5.74971 18.4688V12.051C5.74971 11.1862 5.46922 10.3448 4.95034 9.65293ZM6.91743 7.21875C6.12728 7.21875 5.67625 8.12081 6.15034 8.75293C6.86395 9.70441 7.24971 10.8617 7.24971 12.051V18.4688C7.24971 20.2637 8.70478 21.7188 10.4997 21.7188H14.4997C16.2946 21.7188 17.7497 20.2637 17.7497 18.4688V12.051C17.7497 10.8617 18.1355 9.70441 18.8491 8.75293C19.3232 8.12081 18.8721 7.21875 18.082 7.21875H6.91743Z"
      fill="#475765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 10.7187C14.9142 10.7187 15.25 11.0545 15.25 11.4688L15.25 17.4688C15.25 17.883 14.9142 18.2187 14.5 18.2187C14.0858 18.2187 13.75 17.883 13.75 17.4687L13.75 11.4687C13.75 11.0545 14.0858 10.7187 14.5 10.7187Z"
      fill="#475765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 10.7187C10.9142 10.7187 11.25 11.0545 11.25 11.4688L11.25 17.4688C11.25 17.883 10.9142 18.2187 10.5 18.2187C10.0858 18.2187 9.75 17.883 9.75 17.4687L9.75 11.4687C9.75 11.0545 10.0858 10.7187 10.5 10.7187Z"
      fill="#475765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33187 4.59912C8.70618 3.47618 9.75706 2.71875 10.9407 2.71875H14.0577C15.2414 2.71875 16.2923 3.47618 16.6666 4.59912L17.2107 6.23158C17.3417 6.62454 17.1294 7.04928 16.7364 7.18026C16.3434 7.31125 15.9187 7.09888 15.7877 6.70592L15.2436 5.07347C15.0734 4.56304 14.5957 4.21875 14.0577 4.21875H10.9407C10.4027 4.21875 9.92503 4.56304 9.75489 5.07347L9.21074 6.70592C9.07975 7.09888 8.65501 7.31125 8.26206 7.18026C7.8691 7.04928 7.65673 6.62454 7.78771 6.23158L8.33187 4.59912Z"
      fill="#475765"
    />
  </svg>
);
export const CloseIcon: React.FC<IconProps> = ({
  className = "",
  fill = "#858F9B",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M12.6666 4.28251L11.7165 3.33301L7.99934 7.04901L4.28333 3.33301L3.33325 4.28367L7.04926 7.99967L3.33325 11.7157L4.28333 12.6658L7.99934 8.94976L11.7159 12.6663L12.666 11.7163L8.95 7.99967L12.6666 4.28251Z"
      fill={fill}
    />
  </svg>
);
export const CheckCircle: React.FC<IconProps> = ({
  className = "",
  fill = "#1E2B36",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="61"
    viewBox="0 0 60 61"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.4119 9.36332C34.8569 7.33372 29.7678 6.83092 24.9037 7.9299C20.0396 9.02889 15.661 11.6708 12.421 15.4616C9.18104 19.2523 7.25324 23.9889 6.92513 28.9648C6.59702 33.9407 7.88618 38.8894 10.6003 43.0728C13.3145 47.2562 17.3083 50.4501 21.986 52.1783C26.6637 53.9065 31.7747 54.0763 36.5568 52.6623C41.3389 51.2484 45.5358 48.3266 48.5216 44.3326C51.5074 40.3385 53.1222 35.4863 53.125 30.4996V28.2006C53.125 27.1651 53.9645 26.3256 55 26.3256C56.0356 26.3256 56.875 27.1651 56.875 28.2006V30.5006C56.8717 36.296 54.9951 41.9362 51.5251 46.5779C48.0551 51.2196 43.1776 54.6153 37.62 56.2585C32.0625 57.9016 26.1226 57.7043 20.6864 55.6959C15.2501 53.6875 10.6088 49.9756 7.45446 45.1138C4.30015 40.2521 2.80194 34.5009 3.18326 28.7181C3.56457 22.9352 5.80499 17.4306 9.57038 13.0251C13.3358 8.6196 18.4244 5.5493 24.0773 4.2721C29.7302 2.99491 35.6445 3.57924 40.9381 5.93796C41.884 6.35942 42.3092 7.46788 41.8877 8.41377C41.4662 9.35965 40.3578 9.78478 39.4119 9.36332Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.3252 9.17351C57.0578 9.90538 57.0584 11.0926 56.3265 11.8252L31.3265 36.8502C30.9749 37.2021 30.4979 37.3999 30.0005 37.4C29.503 37.4001 29.0259 37.2026 28.6742 36.8508L21.1742 29.3508C20.4419 28.6186 20.4419 27.4314 21.1742 26.6992C21.9064 25.9669 23.0936 25.9669 23.8258 26.6992L29.9993 32.8727L53.6735 9.17484C54.4054 8.44224 55.5926 8.44165 56.3252 9.17351Z"
      fill={fill}
    />
  </svg>
);
export const NoProductSelectIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    viewBox="0 0 500 500"
    className={className}
  >
    <path
      d="M416.7 433.8s-95.9-313-86.6-313c15.2 0 49.6 2.7 49.6 2.7"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#EE972D"
    />
    <g clipRule="evenodd">
      <path
        d="M381.1 120.7H327c-6.4-44.7-44.5-79.1-90.9-79.1-46.4 0-84.5 34.4-91 79.1h-54L51.6 437.1h369.1l-39.6-316.4zM236.1 68c31.9 0 58.2 22.7 64.3 52.7H171.8c6.2-30 32.5-52.7 64.3-52.7z"
        fill="none"
        stroke="#A0A0A0"
        strokeWidth="6.496"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <g fillRule="evenodd" fill="#A0A0A0">
        <path d="M196.6 225.7c0 10.9-8.9 19.8-19.8 19.8s-19.8-8.8-19.8-19.8c0-10.9 8.9-19.8 19.8-19.8s19.8 8.9 19.8 19.8zM315.2 225.7c0 10.9-8.9 19.8-19.8 19.8s-19.8-8.8-19.8-19.8c0-10.9 8.8-19.8 19.8-19.8 10.9 0 19.8 8.9 19.8 19.8z" />
      </g>
    </g>
    <path
      d="M319 355.2c-15-30.6-47-50.2-82.7-50.2-36.4 0-68.6 19.6-83.2 50.3-2.5-3.1-3.4-7.4-1.7-11.3 13.7-32.9 47-54.1 84.9-54.1 37.1 0 70.2 21.1 84.4 53.8 1.7 4 .9 8.4-1.7 11.5z"
      fill="#A0A0A0"
    />
    <path
      d="M436.5 204.1c5.3.5 11.8 2.1 16.6 4.3 2.7 1.3 9.1 4.4 9.4 8 .4 5.6-14.1 4.7-18.4 5.4-.4 4.4 14.1 9.1 17.1 10.3 4.1 1.7 10 3.4 12.7 7.2"
      fill="none"
      stroke="#A0A0A0"
      strokeWidth="3.583"
      strokeMiterlimit="10"
    />
    <circle
      cx="45"
      cy="245.5"
      r="12.5"
      fill="none"
      stroke="#A0A0A0"
      strokeWidth="3.248"
      strokeMiterlimit="10"
    />
    <circle
      cx="432"
      cy="333.5"
      r="9"
      fill="none"
      stroke="#A0A0A0"
      strokeWidth="4.872"
      strokeMiterlimit="10"
    />
    <path
      fill="#A0A0A0"
      d="M440.9 163.7l-3.6-3.6-7.2 7.2-7.1-7.2-3.6 3.6 7.1 7.2-7.1 7.1 3.6 3.6 7.1-7.1 7.2 7.1 3.6-3.6-7.1-7.1M32.4 261.3l-1.4-1.5-2.9 2.9-2.8-2.9-1.5 1.5 2.9 2.8-2.9 2.9 1.5 1.4 2.8-2.9 2.9 2.9 1.4-1.4-2.8-2.9"
    />
    <path
      fill="#FFF"
      stroke="#A4A4A4"
      strokeWidth="2.765"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeMiterlimit="10"
      d="M59.4 461.9l-7.3-24.3-25-4.3 24.3-7.3 4.3-24.9 7.2 24.2 25 4.3-24.3 7.3z"
    />
  </svg>
);
export const ContactPhoneIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      d="M23.8276 25.2729C21.3847 27.7158 15.1285 25.4203 9.85409 20.1459C4.57966 14.8715 2.28424 8.61534 4.72713 6.17244L6.33559 4.56398C7.446 3.45357 9.27568 3.48292 10.4223 4.62954L12.9137 7.1209C14.0603 8.26752 14.0896 10.0972 12.9792 11.2076L12.6337 11.5531C12.0342 12.1526 11.9756 13.1198 12.5326 13.7948C13.07 14.446 13.6492 15.0946 14.2773 15.7227C14.9054 16.3508 15.554 16.93 16.2052 17.4674C16.8802 18.0244 17.8474 17.9658 18.4469 17.3663L18.7924 17.0208C19.9028 15.9104 21.7325 15.9397 22.8791 17.0863L25.3705 19.5777C26.5171 20.7243 26.5464 22.554 25.436 23.6644L23.8276 25.2729Z"
      stroke="#026987"
      strokeWidth="1.5"
    />
  </svg>
);
export const ContactMailIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.6979 7.73077H5.27474C4.58514 7.73077 4.0261 8.27319 4.0261 8.94231V21.0577C4.0261 21.7268 4.58514 22.2692 5.27474 22.2692H24.6979C25.3875 22.2692 25.9465 21.7268 25.9465 21.0577V8.94231C25.9465 8.27319 25.3875 7.73077 24.6979 7.73077ZM5.27474 6.25C3.74229 6.25 2.5 7.45539 2.5 8.94231V21.0577C2.5 22.5446 3.74229 23.75 5.27474 23.75H24.6979C26.2303 23.75 27.4726 22.5446 27.4726 21.0577V8.94231C27.4726 7.45539 26.2303 6.25 24.6979 6.25H5.27474Z"
      fill="#026987"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.32619 8.13048L15.4489 15.4574L26.6498 8.109L27.5 9.33698L15.891 16.953C15.6427 17.116 15.3193 17.1218 15.0648 16.9681L2.52399 9.38849L3.32619 8.13048Z"
      fill="#026987"
    />
  </svg>
);

export const ContactLocationIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4.0939C9.95621 4.0939 5.9375 8.1298 5.9375 13.0209C5.9375 16.0564 7.75311 19.2941 9.95065 21.8486C11.034 23.1079 12.1712 24.1548 13.1422 24.8787C13.6286 25.2413 14.0584 25.5117 14.4068 25.6871C14.5806 25.7747 14.7229 25.8329 14.8332 25.8679C14.8876 25.8851 14.9295 25.8952 14.9598 25.9008C14.9846 25.9054 14.9975 25.9061 15 25.9062C15.0024 25.9061 15.0153 25.9054 15.0403 25.9008C15.0705 25.8952 15.1124 25.8851 15.1668 25.8679C15.2771 25.8329 15.4194 25.7747 15.5932 25.6871C15.9416 25.5117 16.3714 25.2413 16.8578 24.8787C17.8288 24.1548 18.966 23.1079 20.0494 21.8486C22.2469 19.2941 24.0625 16.0564 24.0625 13.0209C24.0625 8.1298 20.0438 4.0939 15 4.0939ZM4.0625 13.0209C4.0625 6.98138 8.99809 2.15625 15 2.15625C21.0019 2.15625 25.9375 6.98138 25.9375 13.0209C25.9375 16.7702 23.7531 20.4596 21.4507 23.136C20.284 24.4921 19.0462 25.6366 17.9547 26.4502C17.4098 26.8564 16.8865 27.1913 16.4146 27.429C15.971 27.6524 15.4694 27.8439 15 27.8439C14.5306 27.8439 14.029 27.6524 13.5854 27.429C13.1135 27.1913 12.5902 26.8564 12.0453 26.4502C10.9538 25.6366 9.71599 24.4921 8.54935 23.136C6.24689 20.4596 4.0625 16.7702 4.0625 13.0209Z"
      fill="#1E2B36"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 9.7189C16.5826 9.7189 17.8125 10.9938 17.8125 12.5001C17.8125 14.0063 16.5826 15.2812 15 15.2812C13.4174 15.2812 12.1875 14.0063 12.1875 12.5001C12.1875 10.9938 13.4174 9.7189 15 9.7189ZM19.6875 12.5001C19.6875 9.86417 17.5596 7.78125 15 7.78125C12.4404 7.78125 10.3125 9.86417 10.3125 12.5001C10.3125 15.136 12.4404 17.2189 15 17.2189C17.5596 17.2189 19.6875 15.136 19.6875 12.5001Z"
      fill="#1E2B36"
    />
  </svg>
);
export const AboutSettingIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="39"
    viewBox="0 0 40 39"
    fill="none"
    className={className}
  >
    <ellipse
      cx="5"
      cy="4.83833"
      rx="5"
      ry="4.83833"
      transform="matrix(-1 0 0 1 25 14.5137)"
      stroke="#026987"
      strokeWidth="1.5"
    />
    <path
      d="M27.5001 7.96214L27.1343 8.61689L27.5001 7.96214ZM27.5 30.742L27.1342 30.0873L27.5 30.742ZM12.5 30.742L12.8658 30.0873H12.8658L12.5 30.742ZM12.5 7.96214L12.8658 8.61689L12.5 7.96214ZM14.9388 4.52789L14.1987 4.40645L14.9388 4.52789ZM4.51312 15.3741L4.93112 14.7514L4.51312 15.3741ZM8.47811 30.3233L8.69946 31.0399L8.47811 30.3233ZM7.58992 30.118L8.13992 29.6082L7.58992 30.118ZM15.5421 34.8968L15.348 35.6212L15.5421 34.8968ZM14.9388 34.1768L14.1987 34.2981L14.9388 34.1768ZM25.0612 34.1767L24.321 34.0554L25.0612 34.1767ZM24.4579 34.8967L24.2637 34.1723L24.4579 34.8967ZM32.4099 30.118L31.8599 29.6081L32.4099 30.118ZM31.5218 30.3233L31.7431 29.6067L31.5218 30.3233ZM35.8668 14.4021L36.5784 14.1652L35.8668 14.4021ZM35.4867 15.3741L35.9047 15.9968L35.4867 15.3741ZM4.51312 23.3306L4.93112 23.9533L4.51312 23.3306ZM32.4095 8.58628L31.8595 9.0962L32.4095 8.58628ZM7.59034 8.58622L7.04036 8.07631L7.59034 8.58622ZM8.47846 8.38093L8.69975 7.66432L8.47846 8.38093ZM35.4867 23.3306L35.9047 22.7079L35.4867 23.3306ZM35.8668 24.3027L36.5784 24.5396L35.8668 24.3027ZM25.0613 4.52795L24.3212 4.6494L25.0613 4.52795ZM24.458 3.80805L24.2639 4.53249L24.458 3.80805ZM24.3212 4.6494C24.586 6.26301 25.5728 7.74451 27.1343 8.61689L27.8659 7.30739C26.7092 6.66117 25.9933 5.57569 25.8014 4.4065L24.3212 4.6494ZM27.1343 8.61689C28.5912 9.43081 30.2616 9.55493 31.7427 9.09759L31.3002 7.66436C30.1922 8.00647 28.948 7.91197 27.8659 7.30739L27.1343 8.61689ZM36.5784 14.1652C35.8186 11.8832 34.572 9.81563 32.9595 8.07637L31.8595 9.0962C33.3313 10.6837 34.4651 12.5664 35.1552 14.639L36.5784 14.1652ZM34.0832 19.3524C34.0832 17.9708 34.7962 16.7409 35.9047 15.9968L35.0687 14.7514C33.5746 15.7544 32.5832 17.4366 32.5832 19.3524H34.0832ZM35.9047 22.7079C34.7962 21.9638 34.0832 20.7339 34.0832 19.3524H32.5832C32.5832 21.2681 33.5746 22.9504 35.0687 23.9533L35.9047 22.7079ZM32.9599 30.6279C34.5723 28.8887 35.8187 26.8214 36.5784 24.5396L35.1552 24.0657C34.4652 26.1381 33.3315 28.0207 31.8599 29.6081L32.9599 30.6279ZM27.8658 31.3968C28.9481 30.7921 30.1924 30.6977 31.3004 31.0399L31.7431 29.6067C30.2619 29.1492 28.5912 29.2733 27.1342 30.0873L27.8658 31.3968ZM25.8013 34.2981C25.993 33.1287 26.709 32.0431 27.8658 31.3968L27.1342 30.0873C25.5725 30.9598 24.5857 32.4415 24.321 34.0554L25.8013 34.2981ZM19.9999 36.2301C21.6099 36.2301 23.1702 36.0182 24.652 35.6212L24.2637 34.1723C22.9077 34.5357 21.4779 34.7301 19.9999 34.7301V36.2301ZM15.348 35.6212C16.8298 36.0183 18.3899 36.2301 19.9999 36.2301V34.7301C18.522 34.7301 17.0923 34.5357 15.7362 34.1723L15.348 35.6212ZM12.1342 31.3968C13.291 32.0431 14.007 33.1288 14.1987 34.2981L15.6789 34.0554C15.4143 32.4415 14.4275 30.9598 12.8658 30.0873L12.1342 31.3968ZM8.69946 31.0399C9.80752 30.6977 11.0519 30.7921 12.1342 31.3968L12.8658 30.0873C11.4087 29.2732 9.73802 29.1492 8.25676 29.6068L8.69946 31.0399ZM3.42146 24.5396C4.18115 26.8214 5.42759 28.8888 7.03991 30.6279L8.13992 29.6082C6.66832 28.0208 5.53463 26.1381 4.84466 24.0658L3.42146 24.5396ZM5.91662 19.3524C5.91662 20.7339 5.20365 21.9638 4.09512 22.7079L4.93112 23.9533C6.42528 22.9504 7.41662 21.2682 7.41662 19.3524H5.91662ZM4.09512 15.9968C5.20365 16.7409 5.91662 17.9708 5.91662 19.3524H7.41662C7.41662 17.4366 6.42528 15.7544 4.93112 14.7514L4.09512 15.9968ZM7.04036 8.07631C5.42782 9.81557 4.18122 11.8831 3.42146 14.1651L4.84466 14.639C5.53469 12.5664 6.66853 10.6836 8.14033 9.09614L7.04036 8.07631ZM12.1342 7.30739C11.052 7.91199 9.80774 8.00648 8.69975 7.66432L8.25716 9.09754C9.73832 9.55494 11.4088 9.43084 12.8658 8.61689L12.1342 7.30739ZM14.1987 4.40645C14.0068 5.57566 13.2909 6.66116 12.1342 7.30739L12.8658 8.61689C14.4273 7.7445 15.4141 6.26297 15.6789 4.64934L14.1987 4.40645ZM19.9999 2.47461C18.3899 2.47461 16.8297 2.68648 15.3479 3.08353L15.7362 4.53242C17.0922 4.16906 18.5219 3.97461 19.9999 3.97461V2.47461ZM24.6522 3.0836C23.1703 2.68651 21.61 2.47461 19.9999 2.47461V3.97461C21.478 3.97461 22.9078 4.16908 24.2639 4.53249L24.6522 3.0836ZM15.6789 4.64934C15.6867 4.6017 15.7051 4.56655 15.7208 4.54721C15.728 4.53827 15.7333 4.53432 15.7351 4.53308C15.7361 4.53245 15.7364 4.53229 15.7363 4.53235C15.7362 4.53242 15.736 4.53245 15.7362 4.53242L15.3479 3.08353C14.6745 3.26398 14.2903 3.84773 14.1987 4.40645L15.6789 4.64934ZM4.93112 14.7514C4.88726 14.722 4.86112 14.6852 4.85034 14.6591C4.84545 14.6472 4.84482 14.6404 4.84474 14.6389C4.8447 14.6381 4.84476 14.6381 4.84469 14.6386C4.84462 14.6392 4.84452 14.6394 4.84466 14.639L3.42146 14.1651C3.16929 14.9226 3.56119 15.6384 4.09512 15.9968L4.93112 14.7514ZM8.25676 29.6068C8.21504 29.6196 8.17946 29.6189 8.15779 29.6143C8.14776 29.6121 8.14247 29.6095 8.14074 29.6086C8.13985 29.6081 8.13958 29.6079 8.13969 29.608C8.13982 29.6081 8.13994 29.6082 8.13992 29.6082L7.03991 30.6279C7.4979 31.122 8.16838 31.204 8.69946 31.0399L8.25676 29.6068ZM15.7362 34.1723C15.7361 34.1723 15.7363 34.1723 15.7364 34.1724C15.7365 34.1725 15.7361 34.1723 15.7352 34.1717C15.7334 34.1704 15.7281 34.1665 15.7209 34.1575C15.7052 34.1382 15.6868 34.103 15.6789 34.0554L14.1987 34.2981C14.2903 34.8569 14.6745 35.4408 15.348 35.6212L15.7362 34.1723ZM24.321 34.0554C24.3132 34.103 24.2948 34.1382 24.2791 34.1575C24.2719 34.1664 24.2666 34.1704 24.2648 34.1716C24.2638 34.1723 24.2635 34.1724 24.2636 34.1724C24.2637 34.1723 24.2639 34.1723 24.2637 34.1723L24.652 35.6212C25.3255 35.4407 25.7096 34.8569 25.8013 34.2981L24.321 34.0554ZM31.8599 29.6081C31.8599 29.6081 31.86 29.608 31.8602 29.6079C31.8603 29.6078 31.86 29.6081 31.8591 29.6086C31.8574 29.6095 31.8521 29.6121 31.8421 29.6142C31.8204 29.6189 31.7848 29.6196 31.7431 29.6067L31.3004 31.0399C31.8315 31.2039 32.502 31.1219 32.9599 30.6279L31.8599 29.6081ZM35.1552 14.639C35.1553 14.6394 35.1552 14.6392 35.1551 14.6386C35.1551 14.6381 35.1551 14.6381 35.1551 14.6389C35.155 14.6404 35.1544 14.6472 35.1495 14.6591C35.1387 14.6852 35.1126 14.722 35.0687 14.7514L35.9047 15.9968C36.4386 15.6384 36.8305 14.9226 36.5784 14.1652L35.1552 14.639ZM4.84466 24.0658C4.84452 24.0653 4.84462 24.0656 4.84469 24.0661C4.84476 24.0667 4.8447 24.0667 4.84474 24.0659C4.84482 24.0644 4.84545 24.0575 4.85034 24.0457C4.86112 24.0195 4.88726 23.9828 4.93112 23.9533L4.09512 22.7079C3.56119 23.0663 3.16929 23.7822 3.42146 24.5396L4.84466 24.0658ZM31.7427 9.09759C31.7844 9.08471 31.82 9.08542 31.8417 9.09008C31.8517 9.09224 31.857 9.09481 31.8587 9.09576C31.8596 9.09625 31.8599 9.09649 31.8598 9.0964C31.8596 9.09629 31.8595 9.09617 31.8595 9.0962L32.9595 8.07637C32.5016 7.58243 31.8312 7.50039 31.3002 7.66436L31.7427 9.09759ZM8.14033 9.09614C8.14035 9.09612 8.14023 9.09624 8.1401 9.09634C8.13999 9.09643 8.14026 9.09619 8.14115 9.09571C8.14288 9.09475 8.14817 9.09218 8.1582 9.09002C8.17986 9.08536 8.21544 9.08465 8.25716 9.09754L8.69975 7.66432C8.16872 7.50033 7.49832 7.58235 7.04036 8.07631L8.14033 9.09614ZM35.0687 23.9533C35.1126 23.9828 35.1387 24.0195 35.1495 24.0457C35.1544 24.0575 35.155 24.0644 35.1551 24.0659C35.1551 24.0666 35.1551 24.0666 35.1551 24.0661C35.1552 24.0655 35.1553 24.0653 35.1552 24.0657L36.5784 24.5396C36.8305 23.7822 36.4386 23.0663 35.9047 22.7079L35.0687 23.9533ZM25.8014 4.4065C25.7097 3.84779 25.3256 3.26406 24.6522 3.0836L24.2639 4.53249C24.264 4.53252 24.2639 4.53248 24.2637 4.53241C24.2636 4.53236 24.264 4.53251 24.2649 4.53314C24.2668 4.53438 24.2721 4.53834 24.2793 4.54727C24.295 4.56662 24.3134 4.60176 24.3212 4.6494L25.8014 4.4065Z"
      fill="#026987"
    />
  </svg>
);
export const AboutPhoneIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="39"
    viewBox="0 0 40 39"
    fill="none"
    className={className}
  >
    <path
      d="M35 30.6423V14.8379C35 9.31504 30.5228 4.83789 25 4.83789H15C9.47715 4.83789 5 9.31503 5 14.8379V30.6423"
      stroke="#026987"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M26.6665 22.9648C26.6665 21.8603 27.5619 20.9648 28.6665 20.9648H32.9998C34.1044 20.9648 34.9998 21.8603 34.9998 22.9648V31.8671C34.9998 32.9716 34.1044 33.8671 32.9998 33.8671H28.6665C27.5619 33.8671 26.6665 32.9716 26.6665 31.8671V22.9648Z"
      stroke="#026987"
      strokeWidth="1.5"
    />
    <path
      d="M13.3335 22.9648C13.3335 21.8603 12.4381 20.9648 11.3335 20.9648H7.00016C5.89559 20.9648 5.00016 21.8603 5.00016 22.9648V31.8671C5.00016 32.9716 5.89559 33.8671 7.00016 33.8671H11.3335C12.4381 33.8671 13.3335 32.9716 13.3335 31.8671V22.9648Z"
      stroke="#026987"
      strokeWidth="1.5"
    />
  </svg>
);
export const AboutRocketIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="39"
    viewBox="0 0 40 39"
    fill="none"
    className={className}
  >
    <path
      d="M30.5059 20.657L29.9471 20.1554L30.5059 20.657ZM18.7208 9.25294L19.2391 9.79373L18.7208 9.25294ZM36.1016 6.8894L36.8573 6.98505L36.1016 6.8894ZM32.9485 3.83826L33.0473 4.5696L32.9485 3.83826ZM10.824 20.4017L11.5084 20.7264L10.824 20.4017ZM18.9847 28.2985L18.6491 27.6362L18.9847 28.2985ZM13.3673 16.7142C13.0696 16.4261 12.587 16.4261 12.2894 16.7142C11.9917 17.0022 11.9917 17.4692 12.2894 17.7573L13.3673 16.7142ZM21.7174 26.8805C22.0151 27.1685 22.4977 27.1685 22.7954 26.8805C23.0931 26.5924 23.0931 26.1254 22.7954 25.8374L21.7174 26.8805ZM10.421 29.7315C10.7187 29.4435 10.7187 28.9765 10.421 28.6884C10.1234 28.4004 9.64074 28.4004 9.34308 28.6884L10.421 29.7315ZM4.62903 33.25C4.33137 33.5381 4.33137 34.0051 4.62903 34.2931C4.9267 34.5812 5.40931 34.5812 5.70698 34.2931L4.62903 33.25ZM6.88549 26.3103C7.18315 26.0222 7.18316 25.5552 6.88549 25.2672C6.58782 24.9792 6.10521 24.9792 5.80754 25.2672L6.88549 26.3103ZM3.45052 27.548C3.15286 27.836 3.15285 28.3031 3.45052 28.5911C3.74819 28.8791 4.2308 28.8791 4.52846 28.5911L3.45052 27.548ZM13.9566 33.1527C14.2542 32.8647 14.2542 32.3977 13.9566 32.1096C13.6589 31.8216 13.1763 31.8216 12.8786 32.1096L13.9566 33.1527ZM10.5216 34.3904C10.2239 34.6785 10.2239 35.1455 10.5216 35.4335C10.8193 35.7216 11.3019 35.7216 11.5995 35.4335L10.5216 34.3904ZM17.6602 33.9997L18.4148 33.8953L17.6602 33.9997ZM26.2634 28.4117L27.0179 28.3074L26.2634 28.4117ZM4.93227 21.6833L5.04006 20.9532L5.04006 20.9532L4.93227 21.6833ZM10.707 13.3584L10.5992 14.0885L10.707 13.3584ZM15.9055 27.1533L12.0074 23.3812L10.9295 24.4243L14.8276 28.1964L15.9055 27.1533ZM29.9471 20.1554C26.725 23.5172 21.5287 26.2702 18.6491 27.6362L19.3202 28.9608C22.2155 27.5872 27.6364 24.7355 31.0648 21.1585L29.9471 20.1554ZM11.5084 20.7264C12.9201 17.9399 15.7651 12.9116 19.2391 9.79373L18.2025 8.71215C14.506 12.0297 11.559 17.2753 10.1396 20.077L11.5084 20.7264ZM35.3458 6.79375C34.8378 10.552 33.4793 16.4701 29.9471 20.1554L31.0648 21.1585C34.9457 17.1094 36.3446 10.7784 36.8573 6.98505L35.3458 6.79375ZM19.2391 9.79373C23.0476 6.37568 29.1635 5.06113 33.0473 4.5696L32.8496 3.10691C28.9295 3.60303 22.387 4.9567 18.2025 8.71215L19.2391 9.79373ZM36.8573 6.98505C37.1676 4.68964 35.2217 2.8067 32.8496 3.10691L33.0473 4.5696C34.4266 4.39504 35.5262 5.45907 35.3458 6.79375L36.8573 6.98505ZM12.0074 23.3812C11.2641 22.6619 11.0637 21.6042 11.5084 20.7264L10.1396 20.077C9.39011 21.5563 9.7546 23.2874 10.9295 24.4243L12.0074 23.3812ZM14.8276 28.1964C16.0025 29.3333 17.7914 29.686 19.3202 28.9608L18.6491 27.6362C17.742 28.0665 16.6489 27.8726 15.9055 27.1533L14.8276 28.1964ZM12.2894 17.7573L21.7174 26.8805L22.7954 25.8374L13.3673 16.7142L12.2894 17.7573ZM9.34308 28.6884L4.62903 33.25L5.70698 34.2931L10.421 29.7315L9.34308 28.6884ZM5.80754 25.2672L3.45052 27.548L4.52846 28.5911L6.88549 26.3103L5.80754 25.2672ZM12.8786 32.1096L10.5216 34.3904L11.5995 35.4335L13.9566 33.1527L12.8786 32.1096ZM22.3067 11.5823C20.7073 13.13 20.7073 15.6394 22.3067 17.187L23.3846 16.144C22.3806 15.1723 22.3806 13.597 23.3846 12.6254L22.3067 11.5823ZM22.3067 17.187C23.9061 18.7347 26.4993 18.7347 28.0987 17.1871L27.0207 16.144C26.0167 17.1156 24.3887 17.1156 23.3846 16.144L22.3067 17.187ZM28.0987 17.1871C29.6981 15.6394 29.6981 13.13 28.0987 11.5823L27.0207 12.6254C28.0248 13.597 28.0248 15.1723 27.0207 16.144L28.0987 17.1871ZM28.0987 11.5823C26.4993 10.0346 23.9061 10.0346 22.3067 11.5823L23.3846 12.6254C24.3887 11.6538 26.0167 11.6538 27.0207 12.6254L28.0987 11.5823ZM25.253 29.2586L19.9497 34.3904L21.0276 35.4335L26.3309 30.3017L25.253 29.2586ZM18.4148 33.8953L17.7077 29.1056L16.1986 29.3143L16.9057 34.104L18.4148 33.8953ZM25.0374 25.3228L25.5088 28.516L27.0179 28.3074L26.5465 25.1142L25.0374 25.3228ZM19.9497 34.3904C19.4227 34.9004 18.5202 34.6093 18.4148 33.8953L16.9057 34.104C17.1887 36.0213 19.6123 36.803 21.0276 35.4335L19.9497 34.3904ZM26.3309 30.3017C26.8715 29.7786 27.126 29.0397 27.0179 28.3074L25.5088 28.516C25.5491 28.7887 25.4543 29.0638 25.253 29.2586L26.3309 30.3017ZM8.75379 13.293L3.45049 18.4248L4.52843 19.4679L9.83173 14.3361L8.75379 13.293ZM4.82447 22.4135L9.77422 23.0977L9.98981 21.6374L5.04006 20.9532L4.82447 22.4135ZM14.1146 13.0844L10.8148 12.6282L10.5992 14.0885L13.899 14.5447L14.1146 13.0844ZM3.45049 18.4248C2.0352 19.7943 2.84307 22.1396 4.82447 22.4135L5.04006 20.9532C4.30225 20.8512 4.00142 19.9779 4.52843 19.4679L3.45049 18.4248ZM9.83173 14.3361C10.033 14.1413 10.3174 14.0496 10.5992 14.0885L10.8148 12.6282C10.0579 12.5236 9.29438 12.7699 8.75379 13.293L9.83173 14.3361Z"
      fill="#026987"
    />
  </svg>
);
export const AboutControlIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16091)" />
    <defs>
      <pattern
        id="pattern0_703_16091"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16091" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16091"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const AboutLightIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16097)" />
    <defs>
      <pattern
        id="pattern0_703_16097"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16097" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16097"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const AboutConditionerIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16103)" />
    <defs>
      <pattern
        id="pattern0_703_16103"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16103" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16103"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const AboutCurtainIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16109)" />
    <defs>
      <pattern
        id="pattern0_703_16109"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16109" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16109"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACkElEQVR4nO3dS24TQRSF4XPbrCASDEiQYCGwABiwijgPlDkwRpAsIC/YBRMWwEOwCpDwEsIM+zKgFQdhg5NUuU/L/zey4lLnSkdVt6sGLgkAAAAAlisGO/uPUnkqaf1fAyfHz2LW35udV+kwft64rupZdPz596lRRAybzDzRf8LAEoQ2UnnadF0H/tRExFCpUdeFQN+b0HDmuif9vfbNWyMZX3Y8S5aZxQPZfjG/8e8dbCx9/GX1pP6FA4kYnMz8p3sHG/FzcrLs8ZfVl/oX7iFuLrtmu6GH9ETRQEL6HNKXWuNrc6h/8R4ifZB0NuOrs5A+hrQ1Hq89GI/X7itjO6RPkn4UGv9+0Tr7Xn+xfUhttfcJtbEP6SkCMUMgZgjEDIGYIRAzBGKGQMwQiBkCMUMgZgjEDIGYIRAzBGKGQMwQiBkCMUMgZgjEDIGYIRAzBGKGQMwQiBkCMUMgZm6UetDgyf7jnOQbSRnKzfHx87elnr1Kis2QnOSRpJuSbqXiqNRzV03JJev2hc/8EMEV0UPMFOshq6ZWz2SGXFGtnkkgV1elZxKImZKBfJt+jK8Fn7tSigUSil2lRkqNmsjdUs9dNcXessbHT99JuiNJk1IPXUH0EDPsQ1ouZ3HMkJbLWRynvVMWZ3Gc9prhtNcMPcQMgUxZnDQQSMvlpIF9SMvlpIEZYoZAzBCIGXpIa7D18mE28VqSQrHZ9pSlY4a0solD/d7Qrqd02FUdBDJ1d/ox73VVBIGYIRAzBGKms7csl7caN53NEJe3GjddLlkWbzVu6CFmCMQMgZghEDMEYqZMILXvAazNqP7rB1L7HsDazOrnHsOOcAdVT3CP4QUO9ZcIpPY9gLX1vX4AAAAAuJZfcGmG7P5eSqUAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
export const AboutHomeShieldIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16094)" />
    <defs>
      <pattern
        id="pattern0_703_16094"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16094" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16094"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const AboutFireAlarmIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16100)" />
    <defs>
      <pattern
        id="pattern0_703_16100"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16100" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16100"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const AboutGardenIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16106)" />
    <defs>
      <pattern
        id="pattern0_703_16106"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16106" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16106"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const AboutElectronicIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect width="100" height="100" fill="url(#pattern0_703_16112)" />
    <defs>
      <pattern
        id="pattern0_703_16112"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_703_16112" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_703_16112"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADtElEQVR4nO3dvU9TURgG8Oc9RRnUBT8GxYS4SkyMg/Ff0CZMbLphoSizn0MHojCrUGhYxM1NTfwXTBQGNa6QUHUhYUATg9z7ukAtlQ9P29vz3vb5Tb2Xc869ydPby3nvSQsQ0d4k6QNkbk0MaKwlACrQm9H0/Vft3L5RLsnBAUBjnQJwEsAphUy1e/tGJR4IgNNVr890QPuGtCIQ8sBAjGEgxjAQYxgIEaVI/TP1wcJhd7w7J4LrCvQDONK800qlnwJ8UsiLePVXCS8LG/UMUl8gtydPuyh+A+BiXf3bncpiHEdZzD747tvVP5DBwmF3ovsdGMa+BFiIop4rmB3+7dPP+78sd7w7B4ZxIAUuObc25Nuvy7fD1j2j+sCvNeNG8PTON9+x2srI+BmRTFGA7PYucXoDwLTPMN5XiALnd2xrlO/4MACg+PCrdrl89S5V9PsOU8/E8GjtidQxRnt6cqdcs+eY7xCcqRvDQIxhIMYwEGMYiDGVeUhm+NFVdfIMQN9uDePpe4mvUGlnLv9Y9/jTskBGo+m7b4GqK0SdFLFHGJSoPoWWtjf4kWVMJRCBDAOyFPJkOpMsOUGl5lW5h2x9hp0Lck4dYL97cFz1mh9ZxjAQYxiIMQzEGAZijPcTw2bJ5CeuKXQGLVhR7kVRFpHc9sy51YJdIapahLUwAEDQu/VGCSJcLUvQ29TxmutsswdkLSs9dtSygt1DaoWuJu/zDm4p1rKCYy0rCNayUoqBGMNAjGEgxjAQYxiIMQzEGK7LahHWstKD67IsYy0rONaygmAtK6UYiDEMxBgGYgwDMYaBGMNAjGEtq0VYy0oPm+uyrKyLCo21rOCs1LIUZcPre1eaPaD5WpaI5KCo/TojC1acIBfq4MHuIVtXZNNXmTdDfHCTxHAeYgwDMYaBGMNAjGEgxrCW1SKsZaUH12VZxlpWcFZqWR3GfC2LdsdAjGEgxjAQYxiIMfUEsr5ja2Tc3lcshTI2WfsEdH3XdvvwDkSALzu2JVNkKADGJntlMy5W7xLBZ99hvJ8YKmQe0MuVgwJZkUwZ+ce+Q7WXzX+fM6riue8w3ldIvPqrBJVF336dRoD3cdQz59vP/x7ysrARx1FWgAXvvh1CRD9EUTzg+xuGQCM/vZqbOeTc2pCIXlfgAmp/LKzz/BDgowLzcdQzV08YRHSQxJ8C1j4pO+jJY9rbN4ozdWMYiDEMxBgGYgwDMaYVgSz/fflfiyjS3r4hiQcikFEoylCUnehou7cnoiT9AbIJkkehCzVnAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const AboutProcessTransportIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className={className}
  >
    <path
      d="M32.1943 25.6367C30.5143 25.6367 29.1343 27.0167 29.1343 28.6967C29.1343 30.3767 30.5143 31.7567 32.1943 31.7567C33.8743 31.7567 35.2543 30.3767 35.2543 28.6967C35.2543 27.0167 33.8743 25.6367 32.1943 25.6367ZM32.1943 29.7567C31.6143 29.7567 31.1343 29.2767 31.1343 28.6967C31.1343 28.1167 31.6143 27.6367 32.1943 27.6367C32.7743 27.6367 33.2543 28.1167 33.2543 28.6967C33.2543 29.2767 32.7743 29.7567 32.1943 29.7567Z"
      fill="white"
    />
    <path
      d="M38.334 20.198L32.454 13.178C32.314 13.018 32.114 12.918 31.894 12.918H26.614C26.214 12.918 25.894 13.238 25.894 13.638V27.678C25.894 28.078 26.214 28.398 26.614 28.398H27.374C27.734 28.398 28.054 28.138 28.094 27.778C28.374 25.618 30.094 24.278 32.194 24.278C34.274 24.278 36.014 25.618 36.294 27.778C36.334 28.138 36.654 28.398 37.014 28.398H37.774C38.174 28.398 38.494 28.078 38.494 27.678V20.658C38.494 20.498 38.434 20.318 38.334 20.198ZM31.294 14.918L33.494 17.558H27.894V14.918H31.294ZM36.494 23.938C35.394 22.898 33.894 22.278 32.194 22.278C30.494 22.278 28.994 22.898 27.894 23.938V19.558H35.174L36.494 21.118V23.938Z"
      fill="white"
    />
    <path
      d="M23.7341 8.95703H3.21414C2.81414 8.95703 2.49414 9.27703 2.49414 9.67703V27.677C2.49414 28.077 2.81414 28.397 3.21414 28.397H5.05414C5.41414 28.397 5.73414 28.137 5.77414 27.777C6.05414 25.617 7.77414 24.277 9.87414 24.277C11.9541 24.277 13.6941 25.617 13.9741 27.777C14.0141 28.137 14.3341 28.397 14.6941 28.397H23.7341C24.1341 28.397 24.4541 28.077 24.4541 27.677V9.67703C24.4541 9.27703 24.1341 8.95703 23.7341 8.95703ZM22.4541 26.397H15.6941C14.8941 23.917 12.6341 22.277 9.87414 22.277C7.51414 22.277 5.53414 23.477 4.49414 25.357V10.957H22.4541V26.397Z"
      fill="white"
    />
    <path
      d="M10.1743 25.4375C8.49426 25.4375 7.11426 26.8175 7.11426 28.4975C7.11426 30.1775 8.49426 31.5575 10.1743 31.5575C11.8543 31.5575 13.2343 30.1775 13.2343 28.4975C13.2343 26.8175 11.8543 25.4375 10.1743 25.4375ZM10.1743 29.5575C9.59426 29.5575 9.11426 29.0775 9.11426 28.4975C9.11426 27.9175 9.59426 27.4375 10.1743 27.4375C10.7543 27.4375 11.2343 27.9175 11.2343 28.4975C11.2343 29.0775 10.7543 29.5575 10.1743 29.5575Z"
      fill="white"
    />
  </svg>
);
export const AboutProcessEditIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className={className}
  >
    <path
      d="M35.3254 19.1574C35.1907 19.1573 35.0572 19.1838 34.9327 19.2354C34.8082 19.2869 34.695 19.3625 34.5997 19.4578C34.5044 19.553 34.4289 19.6662 34.3773 19.7907C34.3258 19.9152 34.2993 20.0487 34.2994 20.1834V32.7603C34.2991 33.2126 34.1194 33.6464 33.7998 33.9665C33.4801 34.2865 33.0465 34.4667 32.5941 34.4676H8.23693C7.78439 34.467 7.35056 34.2869 7.03065 33.9668C6.71075 33.6467 6.53089 33.2128 6.53057 32.7603V9.7919C6.53109 9.33951 6.71103 8.90579 7.03093 8.5859C7.35082 8.266 7.78454 8.08606 8.23693 8.08554H21.5322C21.8043 8.08554 22.0653 7.97744 22.2577 7.78502C22.4501 7.5926 22.5582 7.33163 22.5582 7.05951C22.5582 6.78739 22.4501 6.52642 22.2577 6.334C22.0653 6.14158 21.8043 6.03348 21.5322 6.03348H8.23693C7.24052 6.03472 6.28526 6.43109 5.58069 7.13566C4.87612 7.84023 4.47975 8.79549 4.47852 9.7919V32.7603C4.47972 33.7568 4.87605 34.7121 5.5806 35.4169C6.28516 36.1216 7.24042 36.5182 8.23693 36.5196H32.594C33.5904 36.5181 34.5455 36.1215 35.2499 35.4167C35.9543 34.712 36.3504 33.7566 36.3513 32.7603V20.1834C36.3514 20.0487 36.3249 19.9152 36.2734 19.7907C36.2219 19.6662 36.1463 19.5531 36.051 19.4578C35.9558 19.3625 35.8426 19.2869 35.7181 19.2354C35.5936 19.1838 35.4602 19.1573 35.3254 19.1574Z"
      fill="white"
    />
    <path
      d="M17.0306 20.0737L16.0635 24.9111C16.0435 25.0105 16.0459 25.113 16.0705 25.2113C16.095 25.3096 16.1411 25.4012 16.2054 25.4794C16.2697 25.5577 16.3506 25.6207 16.4423 25.6639C16.5339 25.7071 16.634 25.7294 16.7353 25.7291C16.7803 25.7292 16.8252 25.7247 16.8693 25.7156L21.7054 24.7484C21.8381 24.7221 21.96 24.6568 22.0554 24.5608L32.5893 14.0272C32.7496 13.8669 32.7496 13.607 32.5893 13.4467L28.3336 9.19131C28.1733 9.03105 27.9135 9.03105 27.7532 9.1913L17.218 19.725C17.1229 19.8205 17.0578 19.9417 17.0306 20.0737ZM18.9368 21.0057C18.9527 20.9262 18.9918 20.8532 19.0491 20.7959L27.7532 12.0932C27.9135 11.9329 28.1733 11.9329 28.3336 12.0932L29.6871 13.4468C29.8474 13.607 29.8474 13.8669 29.6871 14.0272L20.9848 22.7296C20.9275 22.7869 20.8545 22.826 20.775 22.8419L19.0816 23.1805C18.7944 23.2379 18.5412 22.9848 18.5986 22.6976L18.9368 21.0057Z"
      fill="white"
    />
    <path
      d="M35.477 11.1949C36.1183 10.5536 36.4785 9.68378 36.4785 8.77687C36.4785 7.86995 36.1182 7.00019 35.4769 6.35892C34.8356 5.71765 33.9658 5.3574 33.0589 5.35742C32.152 5.35744 31.2822 5.71773 30.641 6.35903L29.038 7.96201C28.8777 8.12229 28.8777 8.38215 29.038 8.54242L33.2936 12.798C33.4538 12.9583 33.7137 12.9583 33.874 12.798L35.477 11.1949ZM31.9399 8.54242C31.7796 8.38214 31.7796 8.12229 31.9399 7.96201L32.0926 7.80934C32.3496 7.55382 32.6973 7.41048 33.0596 7.41067C33.422 7.41086 33.7696 7.55456 34.0263 7.81035C34.2825 8.06687 34.4264 8.41464 34.4263 8.77721C34.4263 9.13978 34.2822 9.48749 34.0259 9.74391L33.8739 9.89596C33.7136 10.0562 33.4537 10.0562 33.2935 9.89596L31.9399 8.54242Z"
      fill="white"
    />
  </svg>
);
export const AboutProcessCallIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className={className}
  >
    <path
      d="M36.903 29.4342C36.6991 28.9793 36.3854 28.5714 36.0717 28.3048L31.9462 24.2263C31.6324 23.8656 31.2403 23.5832 30.8168 23.395C29.9226 22.9871 28.8717 22.9871 27.9775 23.395C27.5226 23.5989 27.1462 23.8969 26.8638 24.2107L26.7383 24.3362C25.9854 25.0891 25.2168 25.842 24.4638 26.6107C24.3226 26.5322 24.1658 26.4695 24.0246 26.3911C23.7109 26.2342 23.3972 26.093 23.1305 25.9205C20.7619 24.3832 18.6913 22.5009 16.9187 20.2577C16.1187 19.2695 15.4442 18.2185 14.8638 17.0107C15.5383 16.3518 16.2128 15.6773 16.8717 15.0028L17.154 14.7205C17.5462 14.4067 17.8599 13.9989 18.0638 13.544C18.2677 13.0891 18.3932 12.5871 18.3932 12.0852C18.3932 11.5832 18.2834 11.0813 18.0638 10.6263C17.8599 10.1714 17.5462 9.7636 17.2324 9.51262L15.1775 7.44203C14.5187 6.78321 13.8285 6.07733 13.1854 5.44988C12.856 5.08909 12.4638 4.79105 12.0246 4.58713C11.1305 4.17929 10.0952 4.17929 9.20108 4.58713C8.74617 4.79105 8.35402 5.08909 8.08735 5.40282C7.74225 5.73223 7.39715 6.07733 7.05206 6.42243C6.55009 6.94007 6.03245 7.45772 5.5148 7.944C4.54225 8.8538 3.96186 10.093 3.89911 11.442C3.82068 13.3401 4.16578 15.2538 4.88735 16.9793C6.23637 20.4773 8.16578 23.693 10.6128 26.5009C13.8442 30.3754 17.7815 33.4499 22.2991 35.646C24.3854 36.744 26.6285 37.3871 28.9501 37.5911C29.154 37.6067 29.3736 37.6224 29.5775 37.6224C30.2521 37.6224 30.9422 37.4969 31.5697 37.2616C32.4011 36.9479 33.154 36.4303 33.7501 35.7558C34.205 35.2538 34.6913 34.7675 35.1932 34.2813C35.4913 33.9989 35.7893 33.7009 36.0089 33.4656C36.3854 33.1362 36.6991 32.744 36.903 32.3048C37.107 31.8656 37.2324 31.3636 37.2324 30.8616C37.2168 30.3597 37.107 29.8891 36.903 29.4342ZM35.1148 31.4734C35.0207 31.6616 34.8952 31.8342 34.6599 32.0381C34.3775 32.3205 34.0952 32.6028 33.8128 32.8852C33.2952 33.4028 32.7619 33.9048 32.2756 34.4538C31.8834 34.893 31.3972 35.2224 30.8638 35.4264C30.3305 35.6303 29.7344 35.7087 29.1226 35.6303C27.0364 35.4577 25.0442 34.8773 23.1619 33.8891C18.8638 31.8028 15.1462 28.9009 12.0873 25.2303C9.78147 22.5636 7.97755 19.5518 6.69127 16.242C6.06382 14.7518 5.76578 13.1205 5.84421 11.5362C5.89127 10.7048 6.25206 9.93615 6.86382 9.37145C7.39715 8.8538 7.93049 8.33615 8.44813 7.80282C8.77755 7.47341 9.12264 7.12831 9.49911 6.73615C9.64029 6.57929 9.79715 6.4538 10.0011 6.37537C10.1893 6.28125 10.3932 6.24988 10.6128 6.24988C10.8324 6.24988 11.0207 6.29694 11.2246 6.37537C11.3972 6.46949 11.5697 6.59498 11.7579 6.7989C12.4481 7.47341 13.1383 8.1636 13.8285 8.86949L15.9148 10.9558C16.0717 11.0969 16.2128 11.2695 16.307 11.4577C16.4011 11.6616 16.4481 11.8656 16.4481 12.0852C16.4481 12.3048 16.4011 12.5087 16.307 12.7126C16.2128 12.9165 16.0873 13.0734 15.8364 13.2616L15.4913 13.6224C14.7697 14.3597 14.0481 15.0813 13.3893 15.7244C13.107 15.944 12.9187 16.2577 12.8403 16.6185C12.7775 16.9793 12.8403 17.3401 12.9658 17.5597C13.5932 18.9714 14.4089 20.3048 15.3972 21.4656C17.2795 23.8342 19.5226 25.8734 22.0795 27.5362C22.4246 27.7558 22.8011 27.9283 23.1619 28.1165C23.3815 28.2264 23.6011 28.3205 23.7109 28.3832C23.8677 28.493 24.0403 28.5714 24.2599 28.6185C24.4481 28.6656 24.6521 28.6656 24.8403 28.6185C25.0285 28.5871 25.2168 28.5087 25.3736 28.3989C25.5148 28.3048 25.6246 28.195 25.7344 28.0695C26.5187 27.2695 27.3187 26.4695 28.1187 25.6852L28.2913 25.5126C28.4324 25.3558 28.5893 25.2303 28.7932 25.1362C29.1697 24.9636 29.6089 24.9636 30.0011 25.1362C30.1893 25.2146 30.3619 25.3401 30.503 25.5126L34.754 29.7165C34.9109 29.8577 35.0521 30.0303 35.1305 30.2185C35.2089 30.4381 35.256 30.642 35.256 30.8616C35.256 31.0813 35.2089 31.2852 35.1148 31.4734Z"
      fill="white"
    />
  </svg>
);
export const AboutProcessGearIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className={className}
  >
    <path
      d="M35.7565 18.0751L32.2004 17.311C32.0284 16.6989 31.7582 16.1187 31.4004 15.593L33.2964 12.431C33.4244 12.2158 33.477 11.9641 33.4458 11.7156C33.4147 11.4671 33.3016 11.2361 33.1244 11.0591L30.5084 8.44299C30.404 8.33704 30.2794 8.25307 30.142 8.19604C30.0046 8.13902 29.8571 8.1102 29.7084 8.11108C29.5055 8.11164 29.3066 8.16683 29.1325 8.271L26.1625 10.161C25.6093 9.84913 25.0086 9.63027 24.3844 9.51306L23.4884 5.81702C23.4295 5.5718 23.2898 5.35354 23.0917 5.19751C22.8936 5.04148 22.6487 4.9568 22.3965 4.95703H18.6904C18.4383 4.95716 18.1937 5.04203 17.9956 5.198C17.7976 5.35397 17.6576 5.57198 17.5984 5.81702L16.8364 9.37305C16.2248 9.54638 15.6447 9.81651 15.1184 10.1731L11.9564 8.27698C11.7426 8.1498 11.4926 8.0974 11.2457 8.12781C10.9988 8.15822 10.769 8.26981 10.5924 8.44507L7.96644 11.063C7.78959 11.2402 7.67666 11.4712 7.64552 11.7196C7.61438 11.968 7.6668 12.2197 7.79444 12.4351L9.68446 15.4031C9.37331 15.9589 9.1538 16.5613 9.03443 17.187L5.45643 18.0811C5.21323 18.1415 4.99737 18.2816 4.84327 18.4792C4.68917 18.6769 4.60577 18.9204 4.60645 19.171V22.875C4.60552 23.1254 4.68885 23.3689 4.84303 23.5663C4.9972 23.7636 5.21322 23.9033 5.45643 23.963L8.89649 24.727C9.06777 25.3407 9.33791 25.9223 9.69642 26.449L7.8025 29.6111C7.67333 29.8257 7.61959 30.0773 7.65003 30.3259C7.68048 30.5746 7.79333 30.8059 7.97047 30.983L10.5984 33.599C10.7026 33.7051 10.8272 33.7891 10.9647 33.8458C11.1022 33.9025 11.2497 33.9309 11.3984 33.9291C11.6012 33.9294 11.8003 33.8747 11.9745 33.771L14.9445 31.881C15.4999 32.1931 16.1024 32.4127 16.7284 32.531L17.6205 36.1111C17.6817 36.3526 17.8213 36.5668 18.0175 36.7203C18.2137 36.8738 18.4554 36.9577 18.7045 36.959H22.4085C22.6586 36.96 22.9018 36.877 23.0991 36.7233C23.2964 36.5695 23.4364 36.3539 23.4965 36.1111L24.2604 32.6731C24.8737 32.5009 25.4552 32.2307 25.9824 31.873L29.1425 33.769C29.3168 33.8725 29.5157 33.927 29.7184 33.927C29.8671 33.9287 30.0146 33.9003 30.1521 33.8436C30.2896 33.7869 30.4142 33.7031 30.5184 33.597L33.1365 30.973C33.3141 30.7959 33.4275 30.5645 33.4586 30.3155C33.4898 30.0666 33.437 29.8145 33.3085 29.599L31.4185 26.631C31.7299 26.0776 31.9487 25.477 32.0664 24.853L35.7625 23.9551C36.006 23.8961 36.2227 23.7574 36.3782 23.5609C36.5337 23.3645 36.619 23.1216 36.6205 22.8711V19.167C36.6209 18.9142 36.5357 18.6687 36.3788 18.4705C36.2219 18.2722 36.0026 18.1329 35.7565 18.0751ZM30.1904 23.605C29.9648 24.4457 29.6285 25.2528 29.1904 26.005C29.0894 26.1783 29.0361 26.3754 29.0361 26.576C29.0361 26.7767 29.0894 26.9738 29.1904 27.1471L30.9104 30.011L29.5325 31.3871L26.6725 29.675C26.4996 29.5748 26.3032 29.522 26.1034 29.522C25.9036 29.522 25.7073 29.5748 25.5344 29.675C24.7818 30.1123 23.9748 30.4485 23.1344 30.675C22.941 30.7272 22.7649 30.8298 22.6243 30.9725C22.4837 31.1152 22.3837 31.2929 22.3345 31.4871L21.5225 34.719H19.5805L18.7804 31.475C18.7313 31.2805 18.6313 31.1026 18.4907 30.9596C18.3501 30.8165 18.1741 30.7135 17.9805 30.661C17.1399 30.4349 16.3329 30.0986 15.5805 29.661C15.4085 29.5594 15.2122 29.5063 15.0125 29.5071C14.8115 29.5065 14.614 29.5596 14.4404 29.661L11.5764 31.379L10.1964 30.009L11.9144 27.1431C12.0163 26.9704 12.07 26.7735 12.07 26.573C12.07 26.3725 12.0163 26.1757 11.9144 26.003C11.477 25.2505 11.1408 24.4435 10.9144 23.603C10.8627 23.4094 10.7601 23.2331 10.6173 23.0924C10.4745 22.9517 10.2968 22.8518 10.1024 22.803L6.86842 21.9871V20.0431L10.1065 19.2311C10.3017 19.1831 10.4804 19.0835 10.6239 18.9427C10.7675 18.802 10.8706 18.6252 10.9225 18.431C11.149 17.5906 11.4852 16.7836 11.9225 16.031C12.0243 15.8579 12.078 15.6609 12.078 15.4601C12.078 15.2593 12.0243 15.0621 11.9225 14.889L10.2024 12.0231L11.5704 10.641L14.4364 12.359C14.6089 12.4605 14.8054 12.514 15.0055 12.514C15.2056 12.514 15.402 12.4605 15.5745 12.359C16.3267 11.9209 17.1338 11.5847 17.9745 11.359C18.1689 11.3062 18.3456 11.2023 18.4863 11.0581C18.627 10.9139 18.7265 10.7347 18.7744 10.5391L19.5905 7.18909H21.5285L22.3445 10.547C22.3923 10.7428 22.4916 10.9222 22.6323 11.0664C22.773 11.2106 22.9499 11.3145 23.1444 11.3671C23.9849 11.5936 24.7918 11.9298 25.5444 12.3671C25.7174 12.4693 25.9146 12.5232 26.1155 12.5232C26.3164 12.5232 26.5135 12.4693 26.6864 12.3671L29.5504 10.649L30.9285 12.027L29.2084 14.8931C29.1079 15.0659 29.0551 15.2622 29.0551 15.462C29.0551 15.6619 29.1079 15.8582 29.2084 16.031C29.6414 16.784 29.9731 17.5911 30.1945 18.431C30.2474 18.6257 30.3516 18.8027 30.4962 18.9434C30.6408 19.0841 30.8205 19.1834 31.0165 19.2311L34.3744 20.047V21.977L31.0165 22.7931C30.8183 22.8411 30.6367 22.942 30.4912 23.085C30.3458 23.2279 30.2418 23.4076 30.1904 23.605Z"
      fill="white"
    />
    <path
      d="M20.5549 14.3418C19.2341 14.3414 17.9428 14.7328 16.8444 15.4663C15.7459 16.1999 14.8897 17.2427 14.3839 18.4629C13.8782 19.6831 13.7456 21.0259 14.0031 22.3214C14.2605 23.6169 14.8964 24.8071 15.8302 25.7412C16.7641 26.6753 17.9539 27.3115 19.2494 27.5693C20.5449 27.8272 21.8877 27.6951 23.108 27.1897C24.3284 26.6843 25.3715 25.8283 26.1054 24.7301C26.8392 23.6319 27.231 22.3406 27.231 21.0198C27.2289 19.2497 26.5249 17.5526 25.2735 16.3008C24.022 15.0489 22.3251 14.3444 20.5549 14.3418ZM20.5549 16.5878C21.4315 16.5878 22.2884 16.8477 23.0172 17.3347C23.7461 17.8217 24.3141 18.5139 24.6496 19.3237C24.985 20.1336 25.0729 21.0247 24.9019 21.8844C24.7309 22.7441 24.3087 23.5339 23.6889 24.1537C23.069 24.7735 22.2793 25.1957 21.4196 25.3667C20.5598 25.5377 19.6687 25.4498 18.8589 25.1144C18.0491 24.7789 17.3569 24.2109 16.8699 23.4821C16.3829 22.7532 16.1229 21.8963 16.1229 21.0198C16.1266 19.8462 16.5951 18.7219 17.4257 17.8928C18.2563 17.0637 19.3814 16.5974 20.5549 16.5958V16.5878Z"
      fill="white"
    />
  </svg>
);
export const VectorIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="335"
    height="200"
    viewBox="0 0 335 200"
    fill="none"
    className={className}
  >
    <path
      d="M232.854 198.916H32.9256C24.2347 198.901 15.9049 195.422 9.76479 189.243C3.62473 183.065 0.176256 174.691 0.17627 165.96V33.7896C0.191393 25.0689 3.64662 16.7097 9.78504 10.5433C15.9235 4.37682 24.2446 0.905818 32.9256 0.890625H76.3435C76.8063 0.890625 77.25 1.07528 77.5772 1.40398C77.9044 1.73267 78.0883 2.17848 78.0883 2.64332C78.0883 3.10817 77.9044 3.55395 77.5772 3.88264C77.25 4.21134 76.8063 4.396 76.3435 4.396H32.9256C25.1703 4.40361 17.7353 7.50379 12.2542 13.0153C6.77309 18.5269 3.69427 25.9989 3.69427 33.7896V165.96C3.69427 173.751 6.77309 181.223 12.2542 186.734C17.7353 192.246 25.1703 195.346 32.9256 195.354H232.854C240.609 195.346 248.044 192.246 253.526 186.734C259.007 181.223 262.085 173.751 262.085 165.96V116.942C262.085 116.47 262.272 116.016 262.605 115.682C262.937 115.348 263.389 115.161 263.859 115.161H331.474C331.902 115.216 332.295 115.425 332.58 115.751C332.865 116.076 333.023 116.494 333.023 116.928C333.023 117.361 332.865 117.78 332.58 118.105C332.295 118.43 331.902 118.64 331.474 118.695H265.689V165.96C265.689 170.29 264.84 174.578 263.189 178.579C261.539 182.579 259.12 186.213 256.07 189.274C253.021 192.335 249.401 194.762 245.417 196.416C241.434 198.071 237.165 198.92 232.854 198.916Z"
      fill="#026987"
    />
  </svg>
);
export const AboutProcessRightArrow: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="30"
    viewBox="0 0 19 30"
    fill="none"
    className={className}
  >
    <path
      d="M2.8928 29.3083L0.490234 26.7224L13.1323 14.942L0.490234 3.13282L2.8928 0.546875L18.2806 14.942L2.8928 29.3083Z"
      fill="#026987"
    />
  </svg>
);
export const VectorNoArrowIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="266"
    height="199"
    viewBox="0 0 266 199"
    fill="none"
    className={className}
  >
    <path
      d="M232.787 198.584H32.8866C24.2182 198.538 15.9207 195.045 9.80989 188.869C3.69908 182.692 0.272603 174.336 0.280286 165.627V33.457C0.325434 24.7864 3.77614 16.4843 9.88208 10.3558C15.988 4.22739 24.2554 0.768214 32.8866 0.730469H76.276C76.7387 0.730469 77.1825 0.915128 77.5097 1.24382C77.8369 1.57252 78.0207 2.01832 78.0207 2.48317C78.0207 2.94801 77.8369 3.39382 77.5097 3.72251C77.1825 4.0512 76.7387 4.23586 76.276 4.23586H32.8866C25.1287 4.24347 17.6908 7.34273 12.2051 12.8534C6.71946 18.3642 3.63434 25.8361 3.62677 33.6294V165.8C3.63434 173.593 6.71946 181.065 12.2051 186.576C17.6908 192.087 25.1287 195.186 32.8866 195.193H232.787C236.642 195.19 240.46 194.421 244.019 192.932C247.579 191.443 250.81 189.262 253.529 186.515C256.247 183.768 258.399 180.509 259.861 176.924C261.323 173.34 262.065 169.501 262.046 165.627V116.609C262.046 116.145 262.23 115.699 262.558 115.37C262.885 115.041 263.328 114.857 263.791 114.857C264.254 114.857 264.698 115.041 265.025 115.37C265.352 115.699 265.536 116.145 265.536 116.609V165.627C265.536 174.358 262.087 182.732 255.947 188.911C249.807 195.09 241.478 198.569 232.787 198.584Z"
      fill="#026987"
    />
  </svg>
);
