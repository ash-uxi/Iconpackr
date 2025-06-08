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
 * Pipiechartrosestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechartrosestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart rose icon",
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
      d="M19.8578 13.0008C19.8578 17.8957 15.8898 21.8638 10.9949 21.8638V20.7559M19.8578 13.0008H21.1319C21.1319 7.40227 16.5934 2.86377 10.9949 2.86377V6.35357M19.8578 13.0008H10.9949M10.9949 20.7559C6.71187 20.7559 3.23975 17.2838 3.23975 13.0008H4.34767M10.9949 20.7559V13.0008M4.34767 13.0008C4.34767 9.32963 7.32373 6.35357 10.9949 6.35357M4.34767 13.0008H10.9949M10.9949 6.35357V13.0008"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipiechartrosestroke;
