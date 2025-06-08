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
 * Pishare01duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishare01duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "share01 icon",
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
      d="M15.41 17.49c-2.583-.773-4.925-2.033-6.82-3.98m6.82-7c-2.583.773-4.924 2.032-6.82 3.98"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M18 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8M18 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
    />
  </Svg>
);

export default Pishare01duosolid;
