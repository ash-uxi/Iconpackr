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
 * Pimedicalthermometercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicalthermometercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medical thermometer icon",
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
      d="M15.889 3.868a3 3 0 0 1 4.243 4.242l-9.27 9.27a3 3 0 0 1-4.243-4.242z"
      opacity={0.28}
    />
    <path d="m5.5 18.5 2.191-.157c.881-.064 1.321-.096 1.734-.217a4 4 0 0 0 1.035-.473c.361-.232.674-.544 1.298-1.169l8.374-8.374a3 3 0 0 0-4.243-4.242l-8.374 8.374c-.624.624-.936.936-1.169 1.298-.206.32-.365.67-.472 1.035-.122.412-.153.853-.217 1.733zm0 0L3 21m8.15-7.15 1.622 1.62m1.107-4.349 1.621 1.621m1-4.242 1.621 1.621" />
  </Svg>
);

export default Pimedicalthermometercontrast;
