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
 * Pimagicwandcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimagicwandcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "magic wand icon",
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
    <path d="M15.5 18c.319.808.67 1.172 1.5 1.5-.83.328-1.181.692-1.5 1.5-.319-.808-.67-1.172-1.5-1.5.83-.328 1.181-.692 1.5-1.5M16.13 10.095l3.786-3.786a1 1 0 0 0 0-1.414l-1.06-1.06a1 1 0 0 0-1.415 0L13.654 7.62m2.475 2.474L6.06 20.165a1 1 0 0 1-1.414 0l-1.06-1.06a1 1 0 0 1 0-1.414l10.07-10.07m2.474 2.474-2.475-2.474M20.5 12c.319.808.67 1.172 1.5 1.5-.83.328-1.181.692-1.5 1.5-.319-.808-.67-1.172-1.5-1.5.83-.328 1.181-.692 1.5-1.5" />
    <path
      fill={color}
      d="m3.584 19.106 1.06 1.06a1 1 0 0 0 1.415 0l9.363-9.363a1 1 0 0 0 0-1.414l-1.06-1.06a1 1 0 0 0-1.415 0L3.584 17.69a1 1 0 0 0 0 1.415"
      opacity={0.28}
    />
    <path d="M7.475 2c.531 1.347 1.116 1.954 2.5 2.5-1.384.546-1.969 1.153-2.5 2.5-.531-1.347-1.116-1.954-2.5-2.5 1.384-.546 1.969-1.153 2.5-2.5" />
  </Svg>
);

export default Pimagicwandcontrast;
