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
 * Pilabflaskconicalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilabflaskconicalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lab flask conical icon",
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
    <path d="M9 16H9.01" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M9.99999 3H14M9.99999 3H8.99999M9.99999 3V8.52257C9.99999 8.83318 9.90356 9.13613 9.72402 9.3896L6.7639 13.5686M14 3H15M14 3V8.52257C14 8.83318 14.0964 9.13613 14.2759 9.3896L18.0754 14.7535M18.0754 14.7535L19.7056 17.055C20.8783 18.7106 19.6944 21 17.6655 21H6.33446C4.30555 21 3.12165 18.7106 4.2944 17.055L6.7639 13.5686M18.0754 14.7535C13.9218 16.6414 12.3875 10.9814 6.7639 13.5686"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilabflaskconicalstroke;
