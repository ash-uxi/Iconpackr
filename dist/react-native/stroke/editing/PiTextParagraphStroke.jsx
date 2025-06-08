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
 * Pitextparagraphstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextparagraphstroke = ({
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
      d="M13 3H18M13 3H9.02914C5.69934 3 3 5.69934 3 9.02914C3 12.3589 5.69934 15.0583 9.02914 15.0583H13M13 3V15.0583M18 3V21M18 3H21M13 21V15.0583"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitextparagraphstroke;
