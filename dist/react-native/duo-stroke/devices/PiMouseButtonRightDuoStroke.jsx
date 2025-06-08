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
 * Pimousebuttonrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousebuttonrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse button right icon",
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
      d="M19 10C19 6.13401 15.866 3 12 3V7.8C12 8.92011 12 9.48016 12.218 9.90798C12.4097 10.2843 12.7157 10.5903 13.092 10.782C13.5198 11 14.0799 11 15.2 11H19V10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5 14V10C5 6.13401 8.13401 3 12 3V7.8C12 8.92011 12 9.48016 12.218 9.90798C12.4097 10.2843 12.7157 10.5903 13.092 10.782C13.5198 11 14.0799 11 15.2 11H19V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pimousebuttonrightduostroke;
