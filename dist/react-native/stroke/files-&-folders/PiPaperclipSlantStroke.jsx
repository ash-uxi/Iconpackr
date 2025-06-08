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
 * Pipaperclipslantstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipaperclipslantstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "paperclip slant icon",
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
      d="M19.4748 12.781L15.9146 18.9474C14.2292 21.8665 10.4966 22.8667 7.57751 21.1813C4.65841 19.496 3.65825 15.7633 5.34359 12.8442L10.4296 4.03507C11.5531 2.089 14.0416 1.42223 15.9876 2.54579C17.9337 3.66935 18.6005 6.15778 17.4769 8.10385L12.3909 16.913C11.8291 17.886 10.5849 18.2194 9.6119 17.6576C8.63886 17.0959 8.30548 15.8517 8.86726 14.8786L13.4446 6.95037"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipaperclipslantstroke;
