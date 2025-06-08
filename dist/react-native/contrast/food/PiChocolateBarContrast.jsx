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
 * Pichocolatebarcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichocolatebarcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chocolate bar icon",
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
      d="M11.211 2a5 5 0 0 0 4.818 3.422A3 3 0 0 0 19 8v11.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-15A2.5 2.5 0 0 1 7.5 2z"
      opacity={0.28}
    />
    <path d="M19 15V8a3 3 0 0 1-2.97-2.578h-.073A5 5 0 0 1 11.211 2H7.5A2.5 2.5 0 0 0 5 4.5V15m14 0v4.5a2.5 2.5 0 0 1-2.5 2.5H12m7-7H5m7 7H7.5A2.5 2.5 0 0 1 5 19.5V15m7 7V3.48M5 9h14" />
  </Svg>
);

export default Pichocolatebarcontrast;
