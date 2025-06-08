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
 * Pivoicerecordingduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivoicerecordingduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "voice recording icon",
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
      d="M18.0001 16.0002C20.2921 16.0002 22.1501 14.1422 22.1501 11.8502C22.1501 9.55821 20.2921 7.7002 18.0001 7.7002C15.7081 7.7002 13.8501 9.55821 13.8501 11.8502C13.8501 14.1422 15.7081 16.0002 18.0001 16.0002Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 16H18"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.0001 16.0002C8.29208 16.0002 10.1501 14.1422 10.1501 11.8502C10.1501 9.55821 8.29208 7.7002 6.0001 7.7002C3.70812 7.7002 1.8501 9.55821 1.8501 11.8502C1.8501 14.1422 3.70812 16.0002 6.0001 16.0002Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivoicerecordingduostroke;
