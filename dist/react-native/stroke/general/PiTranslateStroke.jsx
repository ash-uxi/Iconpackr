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
 * Pitranslatestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitranslatestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "translate icon",
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
      d="M3 5H7M7 5H11C11 7.96113 9.39121 10.5465 7 11.9297M7 5L7 3M7 11.9297C5.82331 12.6104 4.45715 13 3 13M7 11.9297C5.78549 11.2272 4.77281 10.2145 4.07026 9M7 11.9297C8.17669 12.6104 9.54285 13 11 13M21 21V20.937C21 19.9437 20.8949 18.9596 20.6902 18M13 21V20.937C13 19.9437 13.1051 18.9596 13.3098 18M13.3098 18C13.7639 15.8721 14.7082 13.8648 16.0841 12.1448C16.5537 11.5579 17.4463 11.5579 17.9159 12.1448C19.2918 13.8648 20.2361 15.8721 20.6902 18M13.3098 18H20.6902"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitranslatestroke;
