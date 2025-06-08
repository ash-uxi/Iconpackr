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
 * Pifeatherpenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifeatherpenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "feather pen icon",
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
    <path d="M2.5 21.5c0-1.226.18-2.965.68-4.891C4.716 10.689 9.266 3 20.842 3c.121 3.06-1.021 7.291-4.994 9.11-1.22.559-2.706.89-4.506.89" />{" "}
    <path
      fill={color || "#000"}
      d="m21.842 2.96.008.31c.04 3.093-1.115 7.34-5.01 9.458-.084 1.416-.678 3.04-2.58 4.124-1.968 1.12-5.186 1.563-10.316.875-.322 1.495-.444 2.816-.444 3.773a1 1 0 1 1-2 0c0-1.314.193-3.137.713-5.143l.16-.582c.843-2.94 2.415-6.261 5.18-8.913C10.527 4.012 14.81 2 20.844 2h.96z"
      opacity={0.28}
    />
  </Svg>
);

export default Pifeatherpenduosolid;
