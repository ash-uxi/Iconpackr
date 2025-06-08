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
 * Piverificationcheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piverificationcheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "verification check icon",
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
      d="M19.274 8.986c1.182.604 1.976 1.723 1.976 3.014s-.794 2.41-1.976 3.014c.415 1.255.18 2.617-.731 3.529-.912.911-2.274 1.137-3.529.73-.595 1.183-1.723 1.977-3.014 1.977s-2.41-.794-3.014-1.976c-1.255.406-2.617.18-3.529-.731-.911-.912-1.137-2.274-.722-3.529C3.553 14.41 2.75 13.291 2.75 12s.803-2.41 1.985-3.014c-.415-1.255-.19-2.617.722-3.529s2.274-1.146 3.538-.73C9.59 3.543 10.71 2.75 12 2.75s2.419.794 3.014 1.976c1.255-.415 2.617-.18 3.529.731.911.912 1.146 2.274.73 3.529"
      opacity={0.28}
    />
    <path d="m9 12.14 2.007 2.005a12.84 12.84 0 0 1 3.906-4.23l.087-.06M21.25 12c0-1.29-.794-2.41-1.976-3.014.415-1.255.18-2.617-.731-3.529-.912-.911-2.274-1.146-3.529-.73C14.42 3.543 13.291 2.75 12 2.75s-2.41.794-3.005 1.976c-1.264-.415-2.626-.18-3.538.731-.911.912-1.137 2.274-.722 3.529C3.553 9.59 2.75 10.709 2.75 12s.803 2.41 1.985 3.014c-.415 1.255-.19 2.617.722 3.529s2.274 1.137 3.529.73C9.59 20.457 10.709 21.25 12 21.25s2.419-.794 3.014-1.976c1.255.406 2.617.18 3.529-.731.911-.912 1.146-2.274.73-3.529 1.183-.604 1.977-1.723 1.977-3.014" />
  </Svg>
);

export default Piverificationcheckcontrast;
