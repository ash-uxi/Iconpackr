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
 * Piheadingh4stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadingh4stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heading h4 icon",
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
      d="M4 12H12M4 18V6M12 18V6M17 10L16.2392 13.8039C16.1155 14.4227 16.5888 15 17.2198 15H21M21 15V12M21 15V18"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheadingh4stroke;
