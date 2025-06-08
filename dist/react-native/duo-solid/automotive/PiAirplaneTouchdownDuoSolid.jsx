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
 * Piairplanetouchdownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplanetouchdownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane touchdown icon",
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
    <path d="M3 20h18" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M8.675 1.034a1 1 0 0 0-1.254 1.063l.688 7.068-1.212-.325-1.98-2.253a2 2 0 0 0-.985-.612l-.673-.18A1 1 0 0 0 2.002 6.82l.25 4.155a4 4 0 0 0 2.957 3.624l13.366 3.581a2 2 0 0 0 2.45-1.414 4 4 0 0 0-2.829-4.898l-2.46-.66-3.89-7.91a4 4 0 0 0-2.554-2.099z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Piairplanetouchdownduosolid;
