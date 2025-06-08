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
 * Pigooglechromecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigooglechromecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "google chrome icon",
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
      d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3"
      opacity={0.28}
    />
    <path d="M12 8.246a3.754 3.754 0 1 1 0 7.508 3.754 3.754 0 0 1 0-7.508m0 0h8.347M8.753 13.877 4.576 6.651m10.671 7.226-4.169 7.227m0 0q.456.046.922.046A9.15 9.15 0 1 0 4.576 6.651m6.502 14.453A9.15 9.15 0 0 1 4.576 6.651" />
  </Svg>
);

export default Pigooglechromecontrast;
