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
 * Pibanleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibanleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ban left icon",
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
      d="M5.53056 5.53007C7.18638 3.87425 9.47388 2.8501 12.0006 2.8501C17.054 2.8501 21.1506 6.94669 21.1506 12.0001C21.1506 14.5268 20.1264 16.8143 18.4706 18.4701M5.53056 5.53007C3.87473 7.18589 2.85059 9.47339 2.85059 12.0001C2.85059 17.0535 6.94718 21.1501 12.0006 21.1501C14.5273 21.1501 16.8148 20.1259 18.4706 18.4701M5.53056 5.53007L18.4706 18.4701"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibanleftstroke;
