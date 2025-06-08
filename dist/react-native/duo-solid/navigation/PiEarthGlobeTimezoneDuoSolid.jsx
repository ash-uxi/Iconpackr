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
 * Piearthglobetimezoneduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piearthglobetimezoneduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "earth globe timezone icon",
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
    <path
      d="M13.919 3.052c4.132.882 7.23 4.553 7.23 8.948 0 .861-.118 1.694-.34 2.484M3.461 8.702a9.15 9.15 0 0 0 11.022 12.106"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M18 12.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m1 3.9a1 1 0 1 0-2 0v2.1a1 1 0 0 0 1 1h1.6a1 1 0 1 0 0-2H19z"
      clipRule="evenodd"
    />{" "}
    <path
      fill={color || "#000"}
      d="M2.53 8.342a10.15 10.15 0 0 1 11.598-6.268 1 1 0 0 1 .777.808Q14.999 3.43 15 4c0 2.589-1.496 4.81-3.666 6.018a4.15 4.15 0 0 1-.335 2.166 2.742 2.742 0 1 1-4.908 2.262 4.12 4.12 0 0 1-2.893-4.71 8 8 0 0 1-.327-.227 1 1 0 0 1-.342-1.167"
    />
  </Svg>
);

export default Piearthglobetimezoneduosolid;
