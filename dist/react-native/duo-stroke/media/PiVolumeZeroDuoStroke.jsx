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
 * Pivolumezeroduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumezeroduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume zero icon",
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
      d="M13.6738 20.6439C15.0661 21.6384 17 20.6431 17 18.9322V5.10721C17 3.39628 15.0661 2.40106 13.6738 3.39552"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17 18.9322V5.10721C17 3.39628 15.0661 2.40106 13.6739 3.39552L10.8609 5.40477C10.2934 5.81012 9.6464 6.09043 8.96255 6.2272C6.6585 6.68801 5 8.71106 5 11.0607V12.9787C5 15.3284 6.6585 17.3514 8.96255 17.8122C9.6464 17.949 10.2934 18.2293 10.8609 18.6347L13.6739 20.6439C15.0661 21.6384 17 20.6431 17 18.9322Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pivolumezeroduostroke;
