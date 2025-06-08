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
 * Pidivertleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidivertleftduostroke = ({
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
      d="M22 9L15.1213 15.8787C13.9497 17.0503 12.0503 17.0503 10.8787 15.8787L3.29492 8.29492"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 8.28858C7.22143 7.99076 5.42407 7.92321 3.65281 8.08707C3.50086 8.10113 3.36646 8.16659 3.26652 8.26652C3.16659 8.36646 3.10113 8.50086 3.08707 8.65281C2.92321 10.4241 2.99076 12.2214 3.28858 14"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidivertleftduostroke;
