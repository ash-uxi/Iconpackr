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
 * Pitranslateduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitranslateduostroke = ({
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
      d="M21 21.0004V20.9375C21 19.9442 20.8949 18.9601 20.6902 18.0004M13 21.0004V20.9375C13 19.9442 13.1051 18.9601 13.3098 18.0004M13.3098 18.0004C13.7639 15.8726 14.7082 13.8652 16.0841 12.1453C16.5537 11.5584 17.4463 11.5584 17.9159 12.1453C19.2918 13.8652 20.2361 15.8726 20.6902 18.0004M13.3098 18.0004H20.6902"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3 5H7M7 5H11C11 7.96113 9.39121 10.5465 7 11.9297M7 5L7 3M7 11.9297C5.82331 12.6104 4.45715 13 3 13M7 11.9297C5.78549 11.2272 4.77281 10.2145 4.07026 9M7 11.9297C8.17669 12.6104 9.54285 13 11 13"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pitranslateduostroke;
