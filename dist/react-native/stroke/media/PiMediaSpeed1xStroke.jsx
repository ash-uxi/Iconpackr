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
 * Pimediaspeed1xstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimediaspeed1xstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "media speed1x icon",
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
      d="M13 19L16.5 14.5M16.5 14.5L20 10M16.5 14.5L20 19M16.5 14.5L13 10"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8.02245 19V5C6.21696 5.44211 4.83732 6.68537 4.01855 8.32289"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimediaspeed1xstroke;
