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
 * Pidivertrightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidivertrightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "divert right icon",
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
    <path d="m1 9 6.879 6.879a3 3 0 0 0 4.242 0L17.5 10.5" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M13.835 7.302a21.8 21.8 0 0 1 5.604-.21 1.624 1.624 0 0 1 1.47 1.469c.172 1.858.1 3.742-.211 5.604a1 1 0 0 1-1.767.46l-.88-1.1a23 23 0 0 0-3.576-3.575l-1.1-.88a1 1 0 0 1 .46-1.768"
    />
  </Svg>
);

export default Pidivertrightduosolid;
