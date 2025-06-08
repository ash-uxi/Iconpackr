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
 * Pivisionprostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivisionprostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "vision pro icon",
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
      d="M11.9999 6.5C16.0876 6.49999 21.9089 6.64174 21.9768 12C22.0088 14.5242 20.8645 17.1718 18.0789 17.4753C15.5041 17.7559 14.3939 15.0921 11.9999 15.0937C9.63506 15.0953 8.52625 17.7102 5.99985 17.4832C3.17732 17.2295 1.99079 14.5517 2.0231 12C2.09096 6.64182 7.91218 6.50001 11.9999 6.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivisionprostroke;
