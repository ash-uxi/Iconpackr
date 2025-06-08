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
 * Pipaperclipverticalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipaperclipverticalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "paperclip vertical icon",
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
      d="M18 9L18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6L14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16L10 7"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipaperclipverticalstroke;
