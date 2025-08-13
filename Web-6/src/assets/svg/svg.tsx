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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAHnUlEQVR4nO2df4xUVxXHP+e+wV0CWkVk21pqCE1obAH/qDH9w2gNiKn+Ids0hdagQLM/xgWkalmWtj4QdmY1IQRYBpasmoJpLC2NqRqxBSM1TY31x5aIYmxig5ZWgTRodWd33z3+sS77ZmB3ZmfezJsy95PMH++8Ofd+T86ed999975ZcDgcDofD4XA4HA6Hw+FwOBwOh8PhuLYR057SuEVUmEHgLyBHbGJwF3v8S3ELmgwTt4Aq0AjcDrrVjDT+npbuW+MWNBn1kJAQOs945ies6Xl33Eomos4SAqDzTINuiFvFREjcAipOy44bxDOPCyy5bFNO2f2bF8WoakKu/Qrp23JOPfPFHJtwS0xqCnLtJwRg76bX8yzTY9FRBPWRkHcQiVqbh9jM5mt/XJsEVyE1hktIjeESUmMk6v2aXWu4Cqkx6qY68u8mBV5UWAzMKLPpt4HXEE5YtQfJbHmlnMbqNiEV5LAdathA/0MXS3GObT2k2mNXdePUVy3eZ8lsOjNVTzeGVASZb7C/pDW9eKqeiUrIeYfwB+vJSvZ2nprsS/mVdUVlJ7fPNdYsR+RRYHbozGxj9Mc2uf1O9j1ytlhRdVshxSSjKPY9ctbu79ptjd6qcCLv7AeNes+ycWfRDzPrdx4SRTLC9HZd0JYDnxHv4iHgvtCZxWYwu8tCazHN1G2FVIS+1mF7PrtKRZ/LO9PitaVXFNOES0jUHPGHNNu4AngtbFbRg7T3LCjk7hJSCfofumgxK4DhkHWmwT5ZaDyp+HpI3Y5RmU0v0Z76BtAdsi4y2ey3LKybyM1VSAWxmc60wrM5RqXDS6ZWTuTjElJRRDWha4G/h62qso+Ob867modLSKXZ0/VPi64ERsaN+l4vSPyAe/135X+9fuch1STT9QLJlI+yfcyk8FEzuzFl4avhr7oKqRJ2Tjal6LFcq2702rs/H7a4hFQL37eq01YB4T1iosgB1u6cNWZwCakm+7/+D2skbzxhjmnIbh07iGwe4saiIuntPElbahvCtss2pZUvd++ht+vPrkJiwNpZaSC8eDXNBOZr4C5Z8dDXOizowzk20ftpSV/nEhITQdPQj4DwwtUMY7jfzUMKcwl4z+WjjvTCSNZSfN+STD2Dsn7MpOgyVyEFEBgIH5tAn6AjvTCStlV+lXMsfKSe19SLQ/gOysdDlttMoK/Qniq7aeWKG9wmVyEFCOZkH1fk51XqrvGKeYgbU/Lwfatf8ZvJNh4V9K5Kd+cqpBh2+W9p0+ASEVYLvMDoQF8R3BhSLL5vA/geo5/IyL9CuQqpMVxCagyXkBrDJaTGcAmpMVxCagyXkBqjMvOQlvTNxrPNKrJUVBeAXD96Qt9QkTOC/MwycnQq703UBFWIK9qEJLfPNdbbhugDINNEIfc1RpkvynzQuw3et2lPH7YJeYw9m/4WqY6oqWJckV2yvGR3s1FvAOFLwLQiXKaBrjYjwYDXlloelY6oqXZckSTEa0utUZUjwPum7i2zVHjatKXbo9ASJXHEVXZCvGR3swoHr9LWAMh6K+bDdkZipp2RmGmt3obqBiD/XW5BdG8tVUpccZU3hnT03KiB7csTPSii64M5Q/34vs3zOG3hNL6/13uz4UGF3UDD/88ZFfpo2fESfVvOlaWrXGKMq6yEmEC3Ae8Pi7ZGltG7+eSkjqNPTvto7z5jkGOMi59tjLfVQks5usolzrhKv2R19NwI+oWwSUTX09s5uegwma5foLIxxya6ipYdN5Ssq1xijssA/8qxrOu5qZg+zYhtZvwvAGAgmDPUX4xvGHv94AGU8C6OBpMwsY0lVY3rys0Sl4zA6bBFAnugmKSo4VO5FrnatbUwvm8xkhOwhn/StcpULa6O9EIT6BM5PcFAQpFDoB+7bFTulhF7tuCuirwNE1bk+SmLHvMN7HPGjE+0RFkuFX73ccI9zdWKK7ha99pv7PnBg6j8ttROx/lv6Y9Bhr0afoRSnbgUTgRNQ4cMR/wha4PPCfym5I4dZaFwQhuy9+D7dvQuq2/LuSCYdScqSYEXgX9Pvdnpc0tWNF1vLtm34lQsrkuinBRhtTZll7LLfwvC85C+1mELGUY/BZFk6qgol+8ajA2WWvhjKbqN6qfDx4oc1UznPaW0VS5xx1XyPERs3i/fiKzF96fe3r1PeihrcpvS46XqKpe44yo5Idbap4FsyLTIe7Phwam2Yz7waitwe8g0aPGOlqqrXOKOq/SZet+WcyCHwyaF3bR3f6LoNtpSn0TZmWNTOcS+h98oWVe5xBxXWU97bRA8ClwImRoMcsy0pdsnLXPfNyaZShrhp+TOis9bYx4rR1MUxBlX2RurvbbUchWeIj+5yimM9FvheaZ7f+U/bwvS+CFj7VKQteSWM4AVI81Bb+cPy9UUBXHFFclOd68ttWaCtYNiUSBpM5v3R6EnKuKIyyuxo9xeXz7+O3PHklOILgWZ6j9LuSDoAzbTdbjwV6tLHHFFkhAAffn4n/SOu74v4l3HaNkWansI+K71zH26b/Ovo9IRNdWOqzIv56zrucmM6HJFlwksAMbWAV5XGN0uk5Bnan63ST7XalwOh8PhcDgcDofD4XA4JuB/p8lve0J8hEoAAAAASUVORK5CYII="
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
        xlinkHref="data:image/png;base64,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"
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
      stroke-width="1.5"
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
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M26.6665 22.9648C26.6665 21.8603 27.5619 20.9648 28.6665 20.9648H32.9998C34.1044 20.9648 34.9998 21.8603 34.9998 22.9648V31.8671C34.9998 32.9716 34.1044 33.8671 32.9998 33.8671H28.6665C27.5619 33.8671 26.6665 32.9716 26.6665 31.8671V22.9648Z"
      stroke="#026987"
      stroke-width="1.5"
    />
    <path
      d="M13.3335 22.9648C13.3335 21.8603 12.4381 20.9648 11.3335 20.9648H7.00016C5.89559 20.9648 5.00016 21.8603 5.00016 22.9648V31.8671C5.00016 32.9716 5.89559 33.8671 7.00016 33.8671H11.3335C12.4381 33.8671 13.3335 32.9716 13.3335 31.8671V22.9648Z"
      stroke="#026987"
      stroke-width="1.5"
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
