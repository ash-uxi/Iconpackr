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
 * Picloudsunduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudsunduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud sun icon",
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
      d="M10.5817 2.27088L10.6037 2.17334M2.17285 7.49572L2.27039 7.51777M5.28545 3.08834L5.33883 3.1729M14.9268 5.33935L15.0114 5.28597M3.08748 12.8137L3.17204 12.7603M8.17885 12.9027C6.02406 12.4157 4.67204 10.2742 5.15903 8.11936C5.64602 5.96457 7.78761 4.61255 9.9424 5.09954C11.475 5.44592 12.6015 6.62934 12.9491 8.05921C10.4644 8.4218 8.50599 10.4063 8.18306 12.9037L8.17885 12.9027Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8.28733 14.9333C8.15829 14.3871 8.10988 13.7973 8.15136 13.2222M8.15136 13.2222C6.19428 13.431 4.66992 15.0875 4.66992 17.1C4.66992 19.2539 6.41601 21 8.56992 21H17.2366C19.8691 21 22.0033 18.8659 22.0033 16.2333C22.0033 14.268 20.8138 12.5805 19.1156 11.8513C18.3699 9.61346 16.2583 8 13.7699 8C13.4912 8 13.2172 8.02024 12.9494 8.05933C10.36 8.4372 8.34218 10.5766 8.15136 13.2222Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picloudsunduostroke;
