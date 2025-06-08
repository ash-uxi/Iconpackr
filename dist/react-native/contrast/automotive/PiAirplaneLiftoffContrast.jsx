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
 * Piairplaneliftoffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplaneliftoffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane liftoff icon",
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
    <path d="M3 20h18M7.572 15.516l13.367-3.581a1 1 0 0 0 .707-1.225 3 3 0 0 0-3.674-2.121l-2.898.776-7.701-5.157a3 3 0 0 0-2.445-.406l-.618.165 4.968 6.951-2.897.777-3.129-1.059a1 1 0 0 0-.58-.018l-.673.18 2.294 3.474a3 3 0 0 0 3.28 1.244" />
    <path
      fill={color}
      d="m7.573 15.514 13.367-3.582a1 1 0 0 0 .707-1.224 3 3 0 0 0-3.674-2.121l-2.898.776-7.701-5.158A3 3 0 0 0 4.928 3.8l-.617.165 4.968 6.95-2.898.777-3.128-1.058a1 1 0 0 0-.58-.019l-.673.18 2.293 3.474a3 3 0 0 0 3.28 1.245"
      opacity={0.28}
    />
  </Svg>
);

export default Piairplaneliftoffcontrast;
