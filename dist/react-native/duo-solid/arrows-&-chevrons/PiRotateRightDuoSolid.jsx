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
 * Pirotaterightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotaterightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate right icon",
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
      d="M17.793 1.67a1 1 0 0 0-.921.59l-.243.539a23 23 0 0 1-2.311 4.003l-.346.48a1 1 0 0 0 .931 1.577 16 16 0 0 0 3.808-.943c.155-.06.454-.182.703-.429.302-.3.48-.732.407-1.235a16 16 0 0 0-1.118-3.975 1 1 0 0 0-.91-.607"
    />{" "}
    <path d="M18.26 7.017A8 8 0 1 0 19.748 14" opacity={0.28} />
  </Svg>
);

export default Pirotaterightduosolid;
