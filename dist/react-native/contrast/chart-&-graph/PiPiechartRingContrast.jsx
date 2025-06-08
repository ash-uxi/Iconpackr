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
 * Pipiechartringcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechartringcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart ring icon",
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
    <path d="M12 21.15a9.15 9.15 0 0 0 6.698-15.384M12 21.15V15m0 6.15A9.15 9.15 0 0 1 2.85 12m0 0a9.15 9.15 0 0 1 15.848-6.234M2.85 12H9m3 3a3 3 0 0 0 2.34-4.876M12 15a3 3 0 0 1-3-3m0 0a3 3 0 0 1 5.34-1.876m0 0 4.358-4.358" />
    <path
      fill={color}
      d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pipiechartringcontrast;
