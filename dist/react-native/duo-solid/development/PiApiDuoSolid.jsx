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
 * Piapiduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piapiduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "api icon",
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
      fill={color || "#000"}
      d="M1 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C4.04 4 5.16 4 7.4 4h9.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C23 7.04 23 8.16 23 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C19.96 20 18.84 20 16.6 20H7.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C1 16.96 1 15.84 1 13.6z"
      opacity={0.28}
    />{" "}
    <path d="M12 13V8h2.5a2.5 2.5 0 0 1 0 5zm0 0v3m8-8v8M9 13v-1.867a3.15 3.15 0 0 0-1.98-2.925 1.4 1.4 0 0 0-1.04 0A3.15 3.15 0 0 0 4 11.133V13m5 0v3m0-3H4m0 0v3" />
  </Svg>
);

export default Piapiduosolid;
