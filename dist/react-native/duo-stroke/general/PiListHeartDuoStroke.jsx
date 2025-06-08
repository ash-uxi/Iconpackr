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
 * Pilistheartduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistheartduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list heart icon",
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
      d="M17.7143 18.3271C18.0857 18.3271 21.4286 16.5217 21.4286 13.994C21.4286 12.7301 20.3143 11.8431 19.2 11.8274C18.6429 11.8195 18.0857 12.0079 17.7143 12.5496C17.3429 12.0079 16.7761 11.8274 16.2286 11.8274C15.1143 11.8274 14 12.7301 14 13.994C14 16.5217 17.3429 18.3271 17.7143 18.3271Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 12H10M4 18H10M4 6H20"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pilistheartduostroke;
