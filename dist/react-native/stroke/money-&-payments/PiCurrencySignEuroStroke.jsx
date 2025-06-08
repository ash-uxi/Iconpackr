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
 * Picurrencysigneurostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurrencysigneurostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "currency sign euro icon",
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
      d="M17 5.25469C15.8662 4.46381 14.4872 4 13 4C9.47353 4 6.55612 6.60771 6.07089 10M17 18.7453C15.8662 19.5362 14.4872 20 13 20C9.47353 20 6.55612 17.3923 6.07089 14M6.07089 10C6.02417 10.3266 6 10.6605 6 11V13C6 13.3395 6.02417 13.6734 6.07089 14M6.07089 10H3M6.07089 10L14 10M6.07089 14H3M6.07089 14H13"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picurrencysigneurostroke;
