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
 * Pimusicbeamnoteoffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicbeamnoteoffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music beam note off icon",
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
    <g fill={color || "#000"} opacity={0.28}>
      {" "}
      <path d="M14.954 10.454 9 12.746V16a.99.99 0 0 1-.885.974.97.97 0 0 1-.287.58l-4.242 4.16a1.01 1.01 0 0 1-1.414 0A3.87 3.87 0 0 1 1 18.94c0-2.165 1.79-3.92 4-3.92.728 0 1.412.19 2 .524V8.023c0-1.21.755-2.295 1.903-2.737l10.683-4.114a2.53 2.53 0 0 1 2.912.807c.301.39.262.938-.09 1.284l-7.113 6.971q-.147.144-.341.22M23 7.818a.99.99 0 0 0-1-.98.99.99 0 0 0-1 .98v4.785a4.04 4.04 0 0 0-2-.525c-2.21 0-4 1.756-4 3.921s1.79 3.922 4 3.922 4-1.756 4-3.922z" />{" "}
    </g>{" "}
    <path d="M22 2 2 22" />
  </Svg>
);

export default Pimusicbeamnoteoffduosolid;
