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
 * Pifacesmileupsidedownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacesmileupsidedownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face smile upside down icon",
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
      d="M14.9999 14.4963V13.4963M8.99995 14.4963L8.99995 13.4963M15.5708 9.99629C14.6633 9.07061 13.3987 8.49629 12 8.49629C10.6013 8.49629 9.33678 9.07061 8.42932 9.99629M12.0001 3.04639C17.0535 3.04639 21.1501 7.14298 21.1501 12.1964C21.1501 17.2498 17.0535 21.3464 12.0001 21.3464C6.94669 21.3464 2.8501 17.2498 2.8501 12.1964C2.8501 7.14298 6.94669 3.04639 12.0001 3.04639Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifacesmileupsidedownstroke;
