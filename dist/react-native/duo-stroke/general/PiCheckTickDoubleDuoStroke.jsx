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
 * Pichecktickdoubleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichecktickdoubleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "check tick double icon",
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
      d="M2.60547 11.7812L7.1292 17.0048L7.50331 16.3507C9.50918 12.8432 12.2851 9.83693 15.6219 7.55842L16.4468 6.99512"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21.5529 7.60889L20.6831 8.09997C17.1646 10.0863 14.1429 12.8456 11.8459 16.1696L11.4175 16.7896L11.1201 16.4371"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pichecktickdoubleduostroke;
