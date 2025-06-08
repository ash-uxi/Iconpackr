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
 * Piheartbreakduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheartbreakduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heart break icon",
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
      d="M13 16.0003C11.8451 14.9411 11.2599 13.5646 11.0078 12.0478C11.003 12.0189 11.0156 11.9899 11.04 11.9736L13.9361 10.0429C13.9747 10.0171 13.994 9.9706 13.9849 9.92505C13.6593 8.29722 12.9719 6.77068 12 5.42773"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M2 8.94427C2 15.9768 11 21 12 21C13 21 22 15.9768 22 8.94427C22 3.50672 15.1625 0.66165 12 5.4274C8.83207 0.653479 2 3.5018 2 8.94427Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheartbreakduostroke;
