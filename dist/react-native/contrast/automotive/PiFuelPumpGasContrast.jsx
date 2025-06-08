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
 * Pifuelpumpgascontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifuelpumpgascontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fuel pump gas icon",
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
    <path d="M11.5 6h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5" />
    <path
      fill={color}
      d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
      opacity={0.28}
    />
    <path d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M18 4l2.414 2.414A2 2 0 0 1 21 7.828V18.5a1.5 1.5 0 0 1-3 0v-1a2.5 2.5 0 0 0-2.5-2.5H15" />
    <path d="M19.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </Svg>
);

export default Pifuelpumpgascontrast;
