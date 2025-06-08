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
 * Piexchange01duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchange01duosolid = ({
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
      fill={color || "#000"}
      d="M15.099 16.357a1 1 0 0 0-.887 1.61 15.7 15.7 0 0 0 2.59 2.614 1.92 1.92 0 0 0 2.395 0 15.7 15.7 0 0 0 2.591-2.614 1 1 0 0 0-.887-1.61l-.626.062a23 23 0 0 1-4.55 0z"
    />{" "}
    <path
      d="M18 17.532V7a3 3 0 1 0-6 0v10a3 3 0 1 1-6 0V6.468"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M6 3c-.423 0-.847.14-1.197.419a15.7 15.7 0 0 0-2.591 2.614 1 1 0 0 0 .887 1.61l.626-.062a23 23 0 0 1 4.55 0l.626.062a1 1 0 0 0 .887-1.61 15.7 15.7 0 0 0-2.59-2.614A1.92 1.92 0 0 0 6 3"
    />
  </Svg>
);

export default Piexchange01duosolid;
