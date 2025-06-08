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
 * Piplaystationcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaystationcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "playstation icon",
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
      d="M11 2v7.53l1 .329V5a1 1 0 1 1 2 0v5.84h.995l1.582.518c4.554 1.246 4.677-6.172 0-7.575z"
      opacity={0.28}
    />
    <path d="m8.04 13.872-4.2 1.903c-4.052 1.55-.695 5.323 3.165 4.075l1.035-.421m5.958-3.266 2.951-1.079c3.686-1.303 7.362 2.608 3.22 4.076L14 21.126M15 10.841l1.577.517c4.554 1.246 4.677-6.172 0-7.575L11 2v20" />
  </Svg>
);

export default Piplaystationcontrast;
