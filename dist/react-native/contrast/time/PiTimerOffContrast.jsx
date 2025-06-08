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
 * Pitimeroffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitimeroffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "timer off icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M12 5a9 9 0 0 0-7.389 14.14 1 1 0 0 0 1.528.135L17.275 8.14a1 1 0 0 0-.135-1.528A8.96 8.96 0 0 0 12 5M20.08 10.03a1 1 0 0 0-1.605-.265l-10.71 10.71a1 1 0 0 0 .265 1.604A9 9 0 0 0 20.08 10.03" />
    </g>
    <path d="M12 2v4m0-4h-2m2 0h2m-2 4a8 8 0 0 0-6.568 12.568M12 6c1.698 0 3.273.53 4.568 1.432m2.614 3.04a8 8 0 0 1-10.71 10.71m8.096-13.75L22 2m-5.432 5.432L5.432 18.568m0 0L2 22" />
  </Svg>
);

export default Pitimeroffcontrast;
