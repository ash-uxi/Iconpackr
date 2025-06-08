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
 * Pisparkleai01stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisparkleai01stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sparkle ai01 icon",
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
      d="M5 17.65V19M5 19V20.35M5 19H6.35M5 19H3.65M12.9 3C13.5401 8.03653 15.5305 11.1418 21 12C15.8102 12.8143 13.5701 15.7277 12.9 21C12.2299 15.7277 9.98984 12.8143 4.8 12C9.98984 11.1857 12.2299 8.2723 12.9 3ZM5.7 3C5.94808 4.50612 6.8515 5.44494 8.4 5.7C6.8515 5.95506 5.94808 6.89388 5.7 8.4C5.45192 6.89388 4.5485 5.95506 3 5.7C4.50612 5.45192 5.44494 4.5485 5.7 3Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisparkleai01stroke;
