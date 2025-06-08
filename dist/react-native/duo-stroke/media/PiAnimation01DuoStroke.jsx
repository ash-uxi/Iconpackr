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
 * Pianimation01duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pianimation01duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "animation01 icon",
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
      d="M15.6855 15.0175C14.9037 16.8307 13.1001 18.1 11.0001 18.1C10.9715 18.1 10.943 18.0997 10.9146 18.0993M8.98285 8.31445C7.16948 9.09621 5.9001 10.8998 5.9001 13C5.9001 13.0285 5.90033 13.0571 5.9008 13.0855M5.9008 13.0855C4.14479 13.549 2.8501 15.1483 2.8501 17.05C2.8501 19.3144 4.68573 21.15 6.9501 21.15C8.85179 21.15 10.4511 19.8553 10.9146 18.0993M5.9008 13.0855C5.94601 15.8343 8.16585 18.0541 10.9146 18.0993"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8.9502 8.9501C8.9502 5.58116 11.6813 2.8501 15.0502 2.8501C18.4191 2.8501 21.1502 5.58116 21.1502 8.9501C21.1502 12.319 18.4191 15.0501 15.0502 15.0501C11.6813 15.0501 8.9502 12.319 8.9502 8.9501Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pianimation01duostroke;
