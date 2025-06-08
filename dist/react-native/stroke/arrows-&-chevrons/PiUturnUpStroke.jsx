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
 * Piuturnupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn up icon",
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
      d="M20.0833 8.03089C19.0247 6.57669 17.788 5.2706 16.4045 4.14485C16.2858 4.04828 16.1429 4 16 4M11.9167 8.03089C12.9753 6.57669 14.212 5.2706 15.5955 4.14485C15.7142 4.04828 15.8571 4 16 4M16 4L16 15C16 17.7614 13.7614 20 11 20C8.23858 20 6 17.7614 6 15V12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuturnupstroke;
