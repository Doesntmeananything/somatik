import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {
  isAnimated?: boolean;
}

export const Logo = ({ isAnimated, ...props }: Props) => {
  const type: Props["type"] = isAnimated ? "rotate" : undefined;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 8C16 9.90488 15.3203 11.7472 14.0831 13.1957C12.846 14.6442 11.1326 15.6036 9.25118 15.9016C7.36974 16.1995 5.44374 15.8163 3.81962 14.8209C2.1955 13.8255 0.979862 12.2832 0.39136 10.4716C-0.197142 8.65987 -0.119878 6.69764 0.609255 4.93783C1.33839 3.17802 2.67153 1.73614 4.36889 0.871534C6.06625 0.00693108 8.01641 -0.223642 9.8686 0.221289C11.7208 0.66622 13.3534 1.75745 14.4729 3.2987L8 8H16Z"
        fill="url(#paint0_linear_3_50)"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type={type}
          from="360 8 8"
          to="0 8 8"
          dur="14s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M9.29864 13.8578C7.90388 14.167 6.44457 13.9684 5.18317 13.2977C3.92178 12.627 2.94109 11.5282 2.4175 10.199C1.8939 8.8698 1.86178 7.39738 2.32689 6.04659C2.792 4.69581 3.72383 3.55531 4.95477 2.83023C6.1857 2.10515 7.63497 1.84308 9.04188 2.09115C10.4488 2.33923 11.721 3.08117 12.6297 4.18353C13.5385 5.28588 14.024 6.67631 13.9991 8.10471C13.9742 9.53311 13.4404 10.9057 12.4937 11.9757L8 8L9.29864 13.8578Z"
        fill="url(#paint1_linear_3_50)"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type={type}
          from="0 8 8"
          to="360 8 8"
          dur="12s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M5.42885 4.93582C6.15844 4.32362 7.08253 3.99184 8.03491 4.00015C8.98728 4.00846 9.90544 4.35632 10.6242 4.98116C11.343 5.606 11.8153 6.46681 11.9561 7.40876C12.0968 8.35071 11.8969 9.31198 11.3922 10.1197C10.8875 10.9274 10.1112 11.5285 9.20283 11.8149C8.29449 12.1013 7.31378 12.0542 6.43708 11.682C5.56038 11.3099 4.84523 10.6371 4.42026 9.7848C3.9953 8.93245 3.88841 7.95644 4.11882 7.03232L8 8L5.42885 4.93582Z"
        fill="url(#paint2_linear_3_50)"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type={type}
          from="360 8 8"
          to="0 8 8"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="8" cy="8" r="2" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_3_50"
          x1="8"
          y1="0"
          x2="8"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A2885" />
          <stop offset="1" stopColor="#0F0D51" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_50"
          x1="8"
          y1="2"
          x2="8"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F81212" />
          <stop offset="1" stopColor="#4C67F4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3_50"
          x1="8"
          y1="4"
          x2="8"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE606" />
          <stop offset="1" stopColor="#F86412" />
        </linearGradient>
      </defs>
    </svg>
  );
};
