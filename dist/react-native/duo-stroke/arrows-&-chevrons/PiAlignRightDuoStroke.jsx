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
 * Pialignrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align right icon",
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
      d="M11.9691 7.91675C13.4233 8.97539 14.7294 10.2121 15.8551 11.5956C15.9517 11.7143 16 11.8572 16 12.0001M11.9691 16.0834C13.4233 15.0248 14.7294 13.788 15.8551 12.4045C15.9517 12.2859 16 12.143 16 12.0001M16 12.0001L4 12.0001"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 5V19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pialignrightduostroke;
