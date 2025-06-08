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
 * Pitextparagraphduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextparagraphduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text paragraph icon",
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
      d="M13 3H9.02914C5.69934 3 3 5.69934 3 9.02914C3 12.3589 5.69934 15.0583 9.02914 15.0583H13M13 3V15.0583M13 3H21M13 21V15.0583"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 3V21"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pitextparagraphduostroke;
