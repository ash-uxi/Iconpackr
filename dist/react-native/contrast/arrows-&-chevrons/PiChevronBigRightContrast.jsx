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
 * Pichevronbigrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronbigrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron big right icon",
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
      fill={color}
      d="M14.817 12.51A30.6 30.6 0 0 1 9 18 72 72 0 0 0 9 6a30.6 30.6 0 0 1 5.817 5.49c.244.3.244.72 0 1.02"
      opacity={0.28}
    />
    <path d="M14.817 12.51A30.6 30.6 0 0 1 9 18 72 72 0 0 0 9 6a30.6 30.6 0 0 1 5.817 5.49c.244.3.244.72 0 1.02" />
  </Svg>
);

export default Pichevronbigrightcontrast;
