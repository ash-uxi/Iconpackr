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
 * Pialignbottomstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignbottomstroke = ({
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
      d="M7.91667 11.9691C8.97531 13.4233 10.212 14.7294 11.5955 15.8551C11.7142 15.9517 11.8571 16 12 16M16.0833 11.9691C15.0247 13.4233 13.788 14.7294 12.4045 15.8551C12.2858 15.9517 12.1429 16 12 16M12 16V4M5 20H19"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialignbottomstroke;
