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
 * Piamiesoduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piamiesoduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "amie so icon",
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
      d="M11 14V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8.21053 21C9.70361 21 11.05 20.372 12 19.3657C12.95 20.372 14.2964 21 15.7895 21C18.6672 21 21 18.6672 21 15.7895C21 14.2964 20.372 12.95 19.3657 12C20.372 11.05 21 9.70361 21 8.21053C21 5.33283 18.6672 3 15.7895 3C14.2964 3 12.95 3.628 12 4.63427C11.05 3.628 9.70361 3 8.21053 3C5.33283 3 3 5.33283 3 8.21053C3 9.70361 3.628 11.05 4.63427 12C3.628 12.95 3 14.2964 3 15.7895C3 18.6672 5.33283 21 8.21053 21Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piamiesoduostroke;
