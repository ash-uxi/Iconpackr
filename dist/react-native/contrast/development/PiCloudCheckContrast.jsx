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
 * Picloudcheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudcheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud check icon",
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
      d="M22 14.5a5.5 5.5 0 0 1-5.5 5.5h-10a4.5 4.5 0 0 1-.483-8.974 6.5 6.5 0 0 1 12.651-1.582A5.5 5.5 0 0 1 22 14.5"
      opacity={0.28}
    />
    <path d="m9 13.597 2.341 2.339A15 15 0 0 1 15.9 11m.601 9a5.5 5.5 0 0 0 2.168-10.556 6.5 6.5 0 0 0-12.651 1.582A4.5 4.5 0 0 0 6.5 20z" />
  </Svg>
);

export default Picloudcheckcontrast;
