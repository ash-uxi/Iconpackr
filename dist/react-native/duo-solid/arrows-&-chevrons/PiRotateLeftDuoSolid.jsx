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
 * Pirotateleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotateleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate left icon",
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
    <path d="M5.739 7.017A8 8 0 1 1 4.25 14" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M6.205 1.67a1 1 0 0 1 .922.59l.242.539a23 23 0 0 0 2.312 4.003l.345.48a1 1 0 0 1-.93 1.577 16 16 0 0 1-3.809-.943 2 2 0 0 1-.703-.429 1.42 1.42 0 0 1-.407-1.235 16 16 0 0 1 1.118-3.975 1 1 0 0 1 .91-.607"
    />
  </Svg>
);

export default Pirotateleftduosolid;
