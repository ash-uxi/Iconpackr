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
 * Piarrowleftupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left up icon",
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
      fill={color}
      d="M5.591 6.432a30.2 30.2 0 0 0 .152 7.797l4.03-4.455 4.456-4.03a30.2 30.2 0 0 0-7.797-.153.95.95 0 0 0-.84.84"
      opacity={0.28}
    />
    <path d="m9.774 9.774-4.03 4.455a30.2 30.2 0 0 1-.153-7.797.95.95 0 0 1 .84-.84 30.2 30.2 0 0 1 7.798.151zm0 0 8.817 8.817" />
  </Svg>
);

export default Piarrowleftupcontrast;
