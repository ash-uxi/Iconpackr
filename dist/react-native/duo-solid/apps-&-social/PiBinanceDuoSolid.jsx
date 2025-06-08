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
 * Pibinanceduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibinanceduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "binance icon",
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
      fill={color || "#000"}
      d="M13.516 8.668a2.145 2.145 0 0 0-3.034 0l-1.815 1.815a2.145 2.145 0 0 0 0 3.034l1.815 1.815a2.145 2.145 0 0 0 3.034 0l1.815-1.815a2.145 2.145 0 0 0 0-3.034z"
    />{" "}
    <path
      d="m3.411 13.718-.341-.342a1.947 1.947 0 0 1 0-2.753l.341-.34m17.177 0 .342.34c.76.76.76 1.993 0 2.753l-.342.341m-3.435 3.436-3.534 3.534a2.29 2.29 0 0 1-3.239 0l-3.533-3.534M17.153 6.847l-3.534-3.534a2.29 2.29 0 0 0-3.239 0L6.847 6.847"
      opacity={0.28}
    />
  </Svg>
);

export default Pibinanceduosolid;
