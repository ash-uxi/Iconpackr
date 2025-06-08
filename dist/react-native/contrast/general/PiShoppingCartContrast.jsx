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
 * Pishoppingcartcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishoppingcartcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shopping cart icon",
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
    <path d="M2 3h1.225c.984 0 1.476 0 1.872.181a2 2 0 0 1 .852.739c.235.366.304.853.443 1.827l1.216 8.506c.139.974.208 1.46.443 1.827a2 2 0 0 0 .852.74c.396.18.888.18 1.872.18h3.497c2.025 0 3.038 0 3.844-.378a4 4 0 0 0 1.717-1.536c.464-.76.576-1.766.8-3.779l.09-.82c.097-.867.145-1.3.01-1.645a1.5 1.5 0 0 0-.609-.73c-.315-.194-.75-.225-1.62-.285L6.571 7M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fill={color}
      d="M7.607 14.253 6.571 7l11.933.827c.87.06 1.305.09 1.62.285.277.17.49.427.61.73.134.344.086.778-.01 1.644l-.092.821c-.223 2.013-.335 3.02-.8 3.78a4 4 0 0 1-1.716 1.535C17.31 17 16.297 17 14.272 17h-3.497c-.984 0-1.476 0-1.872-.18a2 2 0 0 1-.852-.74c-.235-.366-.304-.853-.444-1.827"
      opacity={0.28}
    />
  </Svg>
);

export default Pishoppingcartcontrast;
