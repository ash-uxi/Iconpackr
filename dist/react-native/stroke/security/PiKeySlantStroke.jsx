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
 * Pikeyslantstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyslantstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key slant icon",
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
      d="M10.1107 12.8284C11.6728 14.3905 11.6728 16.9232 10.1107 18.4853C8.54856 20.0474 6.0159 20.0474 4.4538 18.4853C2.8917 16.9232 2.8917 14.3905 4.4538 12.8284C6.0159 11.2663 8.54856 11.2663 10.1107 12.8284ZM10.1107 12.8284L18.5959 4.34314L20.7173 6.46446M15.7675 7.17157L17.1817 8.58578"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pikeyslantstroke;
