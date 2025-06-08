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
 * Pigooglecardboardvrduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigooglecardboardvrduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "google cardboard vr icon",
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
      d="M18 11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11C16 10.4477 16.4477 10 17 10C17.5523 10 18 10.4477 18 11Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.32698 7.63803C2 8.27976 2 9.11984 2 10.8V13.2C2 14.8802 2 15.7202 2.32698 16.362C2.6146 16.9265 3.07354 17.3854 3.63803 17.673C4.27976 18 5.11984 18 6.8 18H7.03572C7.75364 18 8.11259 18 8.4295 17.8907C8.70975 17.794 8.965 17.6363 9.1768 17.4288C9.41629 17.1943 9.57682 16.8732 9.89788 16.2311L10.5689 14.889C11.1586 13.7098 12.8414 13.7098 13.4311 14.889L14.1021 16.2311C14.4232 16.8732 14.5837 17.1943 14.8232 17.4288C15.035 17.6363 15.2903 17.794 15.5705 17.8907C15.8874 18 16.2464 18 16.9643 18H17.2C18.8802 18 19.7202 18 20.362 17.673C20.9265 17.3854 21.3854 16.9265 21.673 16.362C22 15.7202 22 14.8802 22 13.2V10.8C22 9.11984 22 8.27976 21.673 7.63803C21.3854 7.07354 20.9265 6.6146 20.362 6.32698C19.7202 6 18.8802 6 17.2 6H6.8C5.11984 6 4.27976 6 3.63803 6.32698C3.07354 6.6146 2.6146 7.07354 2.32698 7.63803Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigooglecardboardvrduostroke;
