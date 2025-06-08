import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pipeoplefemalefemaleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipeoplefemalefemaleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "people female female icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <g opacity={0.28}>
      <path
        d="M3 5C3 3.34315 4.34314 2 6 2C7.65685 2 9 3.34315 9 5C9 6.65685 7.65685 8 6 8C4.34314 8 3 6.65685 3 5Z"
        fill={color || "#000"}
      />
      <path
        d="M18 2C16.3432 2 15 3.34315 15 5C15 6.65685 16.3432 8 18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2Z"
        fill={color || "#000"}
      />
    </g>{" "}
    <path
      d="M6.00427 9C4.12989 9 2.52533 10.3441 2.19679 12.1895L1.01549 18.8246C0.963629 19.1159 1.04342 19.4152 1.23341 19.642C1.4234 19.8688 1.70408 19.9999 1.99995 19.9999L2.46555 19.9999C2.91809 20 3.31421 20.3039 3.43137 20.741L3.52765 21.1002C3.82797 22.2206 4.84325 22.9997 6.00321 22.9998C7.1669 23 8.1847 22.2163 8.4819 21.0912L8.57346 20.7446C8.68939 20.3057 9.08637 20 9.54029 20H10C10.2957 20 10.5762 19.8692 10.7662 19.6426C10.9562 19.4161 11.0362 19.1171 10.9847 18.8259L9.81259 12.1942C9.48603 10.3467 7.88047 9 6.00427 9ZM18.0043 9C16.1299 9 14.5253 10.3441 14.1968 12.1895L13.0155 18.8246C12.9636 19.1159 13.0434 19.4152 13.2334 19.642C13.4234 19.8688 13.7041 19.9999 14 19.9999L14.4655 19.9999C14.918 20 15.3142 20.3039 15.4313 20.741L15.5276 21.1002C15.828 22.2206 16.8433 22.9997 18.0032 22.9998C19.1669 23 20.1847 22.2163 20.4819 21.0912L20.5734 20.7446C20.6893 20.3058 21.0863 20 21.5403 20H22C22.2957 20 22.5762 19.8692 22.7662 19.6426C22.9562 19.4161 23.0362 19.1171 22.9847 18.8259L21.8126 12.1942C21.486 10.3467 19.8805 9 18.0043 9Z"
      fill={color || "#000"}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pipeoplefemalefemaleduosolid;
