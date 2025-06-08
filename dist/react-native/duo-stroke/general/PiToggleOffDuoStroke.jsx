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
 * Pitoggleoffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitoggleoffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "toggle off icon",
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
      d="M5 12C5 9.79086 6.79086 8 9 8C11.2091 8 13 9.79086 13 12C13 14.2091 11.2091 16 9 16C6.79086 16 5 14.2091 5 12Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 5H15C18.866 5 22 8.13401 22 12C22 15.866 18.866 19 15 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pitoggleoffduostroke;
