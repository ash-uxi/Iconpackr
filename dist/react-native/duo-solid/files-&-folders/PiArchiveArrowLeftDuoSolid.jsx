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
 * Piarchivearrowleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivearrowleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive arrow left icon",
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
    <path d="M11.41 18.57a12.9 12.9 0 0 1-2.275-2.19A.6.6 0 0 1 9 16m0 0c0-.139.048-.274.135-.381a12.9 12.9 0 0 1 2.275-2.19M9 15.999h6" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M3 2.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M4 9.5a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Piarchivearrowleftduosolid;
