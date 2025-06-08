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
 * Pifacesmileupsidedownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacesmileupsidedownduostroke = ({
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
      d="M14.9998 14.4961V13.4961M8.99983 14.4961L8.99983 13.4961M15.5706 9.99609C14.6632 9.07041 13.3986 8.49609 11.9999 8.49609C10.6012 8.49609 9.33666 9.07041 8.4292 9.99609"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.8501 12.1964C2.8501 7.14298 6.94669 3.04639 12.0001 3.04639C17.0535 3.04639 21.1501 7.14298 21.1501 12.1964C21.1501 17.2498 17.0535 21.3464 12.0001 21.3464C6.94669 21.3464 2.8501 17.2498 2.8501 12.1964Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifacesmileupsidedownduostroke;
