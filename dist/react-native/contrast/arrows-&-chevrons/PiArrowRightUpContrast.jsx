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
 * Piarrowrightupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right up icon",
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
    <path d="m14.227 9.774 4.03 4.455c.387-2.588.438-5.208.152-7.797a.95.95 0 0 0-.84-.84 30.2 30.2 0 0 0-7.797.151zm0 0L5.409 18.59" />
    <path
      fill={color}
      d="M18.409 6.432c.286 2.589.235 5.21-.152 7.797l-4.03-4.455-4.456-4.03a30.2 30.2 0 0 1 7.797-.153.95.95 0 0 1 .84.84"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowrightupcontrast;
