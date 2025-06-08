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
 * Pifigmaduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifigmaduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "figma icon",
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
      d="M12 12.5C12 10.567 13.567 9 15.5 9C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16C13.567 16 12 14.433 12 12.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 2H8.5C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9M12 2V9M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12M12 9H8.5M12 9V16M8.5 9C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16M12 16H8.5M12 16V19.5C12 21.433 10.433 23 8.5 23C6.567 23 5 21.433 5 19.5C5 17.567 6.567 16 8.5 16"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifigmaduostroke;
