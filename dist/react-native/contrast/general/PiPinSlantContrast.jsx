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
 * Pipinslantcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipinslantcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pin slant icon",
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
      fill={color}
      d="M12.764 4.247a1.6 1.6 0 0 1 2.385-.396 38 38 0 0 1 5 5 1.6 1.6 0 0 1-.396 2.386l-3.592 2.196c-.666.407-.838 1.15-.662 1.865a4.54 4.54 0 0 1-1.197 4.3.505.505 0 0 1-.66.047c-1.76-1.32-3.436-2.738-4.993-4.294-1.556-1.556-2.973-3.234-4.293-4.993a.504.504 0 0 1 .047-.66 4.54 4.54 0 0 1 4.3-1.197c.714.177 1.457.004 1.865-.662z"
      opacity={0.3}
    />
    <path d="m8.649 15.351-5.167 5.167m5.167-5.167c-1.556-1.556-2.974-3.234-4.294-4.993a.504.504 0 0 1 .047-.66 4.54 4.54 0 0 1 4.3-1.197c.715.177 1.458.004 1.865-.662l2.197-3.592a1.6 1.6 0 0 1 2.385-.396 38 38 0 0 1 5 5c.622.75.435 1.877-.396 2.386l-3.592 2.196c-.666.407-.839 1.15-.662 1.865a4.54 4.54 0 0 1-1.197 4.3.505.505 0 0 1-.66.047c-1.76-1.32-3.437-2.738-4.993-4.294" />
  </Svg>
);

export default Pipinslantcontrast;
