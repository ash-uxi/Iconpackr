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
 * Picloudsnowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudsnowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud snow icon",
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
      d="M5 15.001c0 .768.289 1.469.763 2a3 3 0 0 0-.523.82 4.502 4.502 0 0 1 .777-8.795 6.5 6.5 0 0 1 12.651-1.582 5.501 5.501 0 0 1-.168 10.181v-.965c.316-.475.5-1.046.5-1.659V15a3 3 0 0 0-5.895-.79A3 3 0 0 0 12 14c-.39 0-.763.075-1.105.21A3.001 3.001 0 0 0 5 15z"
      opacity={0.28}
    />
    <path d="M6.017 9.026A7 7 0 0 0 6 9.5m.017-.474a4.5 4.5 0 0 0-1.706 8.407m1.706-8.407a6.5 6.5 0 0 1 12.651-1.582 5.501 5.501 0 0 1 .652 9.779M8 15v.01m4 .99v.01M16 15v.01M8 19v.01m4 .99v.01M16 19v.01" />
  </Svg>
);

export default Picloudsnowcontrast;
