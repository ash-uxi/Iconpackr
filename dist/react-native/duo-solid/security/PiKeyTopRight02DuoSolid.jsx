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
 * Pikeytopright02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeytopright02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key top right02 icon",
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
    <path d="m10.732 10.94 6.364-6.364h2.828v2.828l-2.12 2.121h-1.622a.5.5 0 0 0-.5.5v1.622l-2.122 2.121" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M11.109 10.563a1 1 0 0 0-.39-.24 5.5 5.5 0 1 0 3.459 3.457 1 1 0 0 0-.241-.388l1.745-1.745v-1.622a.5.5 0 0 1 .5-.5h1.62l2.122-2.12v-2.83h-2.828z"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path
      strokeWidth="2.2"
      d="M8.964 16.95 7.55 15.537a1.25 1.25 0 0 0 1.414 1.415z"
    />
  </Svg>
);

export default Pikeytopright02duosolid;
