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
 * Piminimizetwoarrowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piminimizetwoarrowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "minimize two arrow icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M10.347 13.087A20.8 20.8 0 0 0 5 13.29l1.73 1.493c.89.767 1.72 1.599 2.488 2.487L10.71 19c.298-1.779.366-3.576.202-5.347a.625.625 0 0 0-.566-.566M13.653 10.913c1.771.164 3.568.096 5.347-.202l-1.73-1.493a24 24 0 0 1-2.488-2.487L13.29 5a20.8 20.8 0 0 0-.202 5.347.625.625 0 0 0 .566.566" />
    </g>
    <path d="M10.347 13.087A20.8 20.8 0 0 0 5 13.29l1.73 1.493c.89.767 1.72 1.599 2.488 2.487L10.71 19c.298-1.779.366-3.576.202-5.347a.625.625 0 0 0-.566-.566M13.653 10.913c1.771.164 3.568.096 5.347-.202l-1.73-1.493a24 24 0 0 1-2.488-2.487L13.29 5a20.8 20.8 0 0 0-.202 5.347.625.625 0 0 0 .566.566" />
  </Svg>
);

export default Piminimizetwoarrowcontrast;
