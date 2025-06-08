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
 * Piuploadupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuploadupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "upload up icon",
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
      d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15M9 6.81153C9.74024 5.82454 10.599 4.93322 11.5564 4.15739C11.6859 4.05246 11.843 4 12 4M15 6.81153C14.2598 5.82454 13.401 4.93322 12.4436 4.15739C12.3141 4.05246 12.157 4 12 4M12 4V15"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuploadupstroke;
