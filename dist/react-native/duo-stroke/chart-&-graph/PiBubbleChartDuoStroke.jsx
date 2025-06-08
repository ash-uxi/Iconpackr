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
 * Pibubblechartduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibubblechartduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bubble chart icon",
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
    <g opacity={0.28} fill="none">
      <path
        d="M9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14C3 12.3431 4.34315 11 6 11C7.65685 11 9 12.3431 9 14Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M15.5 18C15.5 19.1046 14.6046 20 13.5 20C12.3954 20 11.5 19.1046 11.5 18C11.5 16.8954 12.3954 16 13.5 16C14.6046 16 15.5 16.8954 15.5 18Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
    </g>
    <path
      d="M20 8.5C20 10.9853 17.9853 13 15.5 13C13.0147 13 11 10.9853 11 8.5C11 6.01472 13.0147 4 15.5 4C17.9853 4 20 6.01472 20 8.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibubblechartduostroke;
