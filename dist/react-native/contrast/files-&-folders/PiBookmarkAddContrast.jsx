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
 * Pibookmarkaddcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibookmarkaddcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bookmark add icon",
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
    <path d="M12 13v-3m0 0V7m0 3H9m3 0h3m4 12V9c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C14.792 2 13.861 2 12 2s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C5 6.208 5 7.139 5 9v13l1.794-1.537c1.848-1.584 2.771-2.376 3.808-2.678a5 5 0 0 1 2.796 0c1.037.302 1.96 1.094 3.808 2.678z" />
    <path
      fill={color}
      d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22z"
      opacity={0.28}
    />
  </Svg>
);

export default Pibookmarkaddcontrast;
