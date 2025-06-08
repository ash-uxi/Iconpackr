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
 * Pigamingpadduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigamingpadduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gaming pad icon",
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
      d="M22 16.9098V11.6667C22 7.98477 19.0152 5 15.3333 5H8.66667C4.98477 5 2 7.98477 2 11.6667V16.9098C2 18.6165 3.38352 20 5.09017 20C6.26064 20 7.33065 19.3387 7.8541 18.2918L8 18C8.61287 16.7743 9.86566 16 11.2361 16H12.7639C14.1343 16 15.3871 16.7743 16 18L16.1459 18.2918C16.6693 19.3387 17.7394 20 18.9098 20C20.6165 20 22 18.6165 22 16.9098Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8 13V11M8 11V9M8 11H6M8 11H10M15.01 9L15 9.00098M18.01 12L18 12.001"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigamingpadduostroke;
