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
 * Piceilinglamponcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piceilinglamponcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ceiling lamp on icon",
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
      d="M12 5a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"
      opacity={0.28}
    />
    <path d="M12 5a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m0 0V2m0 19v-1m4.5-.134L16 19m-8.5.866L8 19m7-5a3 3 0 1 1-6 0z" />
  </Svg>
);

export default Piceilinglamponcontrast;
