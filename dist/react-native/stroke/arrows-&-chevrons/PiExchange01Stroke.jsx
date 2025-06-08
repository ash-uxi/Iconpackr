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
 * Piexchange01stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchange01stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "exchange01 icon",
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
      d="M21 17.3517C20.2936 18.2567 19.4793 19.0779 18.5742 19.7989C18.4059 19.933 18.203 20 18 20M15 17.3517C15.7064 18.2567 16.5207 19.0779 17.4258 19.7989C17.5941 19.933 17.797 20 18 20M18 20V7C18 5.34315 16.6569 4 15 4C13.3431 4 12 5.34315 12 7V17C12 18.6569 10.6569 20 9 20C7.34315 20 6 18.6569 6 17L6 4M3 6.64825C3.70641 5.74331 4.52073 4.92208 5.42576 4.20111C5.59405 4.06704 5.79703 4 6 4M9 6.64825C8.29359 5.74331 7.47927 4.92208 6.57424 4.20111C6.40595 4.06704 6.20297 4 6 4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piexchange01stroke;
