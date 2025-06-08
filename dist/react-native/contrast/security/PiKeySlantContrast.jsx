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
 * Pikeyslantcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyslantcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key slant icon",
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
    <path d="M10.112 12.828a4 4 0 1 1-5.657 5.657 4 4 0 0 1 5.657-5.657m0 0 8.485-8.485 2.121 2.121m-4.95.708 1.415 1.414" />
    <path
      fill={color}
      d="M4.455 18.485a4 4 0 1 0 5.657-5.656 4 4 0 0 0-5.657 5.656"
      opacity={0.28}
    />
  </Svg>
);

export default Pikeyslantcontrast;
