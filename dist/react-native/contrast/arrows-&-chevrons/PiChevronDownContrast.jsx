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
 * Pichevrondowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevrondowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron down icon",
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
      d="M11.702 13.894A20.4 20.4 0 0 1 8 10l4 .304L16 10a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0"
      opacity={0.28}
    />
    <path d="M11.702 13.894A20.4 20.4 0 0 1 8 10l4 .304L16 10a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0" />
  </Svg>
);

export default Pichevrondowncontrast;
