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
 * Pifacebookmessengercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacebookmessengercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "facebook messenger icon",
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
      d="M3 11.73C3 6.715 6.93 3 12 3s9 3.717 9 8.732-3.93 8.73-9 8.73a9.9 9.9 0 0 1-2.605-.347.72.72 0 0 0-.482.036l-1.787.788a.72.72 0 0 1-1.01-.637l-.05-1.602a.71.71 0 0 0-.24-.513C4.076 16.621 3 14.353 3 11.73"
      opacity={0.28}
    />
    <path d="m8 14 2.165-3.031a.5.5 0 0 1 .752-.071l2.3 2.193a.5.5 0 0 0 .76-.083L16 10m-4-7c-5.07 0-9 3.715-9 8.73 0 2.623 1.076 4.891 2.826 6.457.146.13.236.315.24.513l.05 1.602a.72.72 0 0 0 1.01.637l1.787-.788a.72.72 0 0 1 .482-.036 9.9 9.9 0 0 0 2.605.347c5.07 0 9-3.715 9-8.73S17.07 3 12 3" />
  </Svg>
);

export default Pifacebookmessengercontrast;
