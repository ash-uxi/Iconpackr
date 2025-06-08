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
 * Pitrucktrashcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrucktrashcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "truck trash icon",
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
    <path d="M15 18.5a2 2 0 0 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H9m6 0q.002-5 0-10m4 10c.61-.002 1.344.07 1.908-.218a2 2 0 0 0 .874-.874C22 16.98 22 16.42 22 15.3v-1.8l-1.195-2.988c-.29-.727-.436-1.09-.679-1.357a2 2 0 0 0-.781-.529c-.338-.126-.73-.126-1.511-.126H15m-6 10a2 2 0 0 1-4 0m4 0a2 2 0 1 0-4 0m0 0c-.61-.002-1.344.07-1.908-.218a2 2 0 0 1-.874-.874C2 16.98 2 16.42 2 15.3V10l13-4v2.5" />
    <path
      fill={color}
      d="M2 10v5.3c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.564.288 1.298.216 1.908.218a2 2 0 1 1 4 0h6q.002-5 0-10V6z"
      opacity={0.28}
    />
  </Svg>
);

export default Pitrucktrashcontrast;
