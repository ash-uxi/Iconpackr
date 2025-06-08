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
 * Pimaximizetwoarrowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizetwoarrowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "maximize two arrow icon",
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
      <path d="M12 6.289a20.8 20.8 0 0 1 5.347-.202.625.625 0 0 1 .566.566A20.8 20.8 0 0 1 17.71 12l-.046-.06a32 32 0 0 0-5.605-5.605zM12 17.711a20.8 20.8 0 0 1-5.347.202.624.624 0 0 1-.566-.566A20.8 20.8 0 0 1 6.29 12l.046.06a32 32 0 0 0 5.605 5.605z" />
    </g>
    <path d="M17.347 6.087A20.8 20.8 0 0 0 12 6.29l3.212 2.499 2.5 3.212c.297-1.779.365-3.576.2-5.347a.624.624 0 0 0-.565-.566M6.653 17.913c1.771.164 3.568.096 5.347-.202l-3.212-2.499L6.288 12a20.8 20.8 0 0 0-.2 5.347.625.625 0 0 0 .565.566" />
  </Svg>
);

export default Pimaximizetwoarrowcontrast;
