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
 * Pialignbottomduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignbottomduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align bottom icon",
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
      d="M5 20H19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7.91675 11.9691C8.9754 13.4233 10.2121 14.7294 11.5956 15.8551C11.7143 15.9517 11.8572 16 12.0001 16M16.0834 11.9691C15.0248 13.4233 13.788 14.7294 12.4045 15.8551C12.2859 15.9517 12.143 16 12.0001 16M12.0001 16V4"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialignbottomduostroke;
