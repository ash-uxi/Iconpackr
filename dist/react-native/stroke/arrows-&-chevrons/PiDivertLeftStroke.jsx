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
 * Pidivertleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidivertleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "divert left icon",
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
      d="M9 8.28858C7.22143 7.99076 5.42407 7.92321 3.65281 8.08707C3.50086 8.10113 3.36646 8.16659 3.26652 8.26652M3.26652 8.26652C3.16659 8.36646 3.10113 8.50086 3.08707 8.65281C2.92321 10.4241 2.99076 12.2214 3.28858 14M3.26652 8.26652L10.8787 15.8787C12.0503 17.0503 13.9497 17.0503 15.1213 15.8787L22 9"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidivertleftstroke;
