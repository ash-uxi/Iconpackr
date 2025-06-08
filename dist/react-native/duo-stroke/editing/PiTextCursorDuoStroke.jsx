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
 * Pitextcursorduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextcursorduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text cursor icon",
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
      d="M10 12H14.0085"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8 22C8.92997 22 9.39496 22 9.77645 21.8978C10.8117 21.6204 11.6204 20.8117 11.8978 19.7765C12 19.395 12 18.93 12 18M12 18C12 18.93 12 19.395 12.1022 19.7765C12.3796 20.8117 13.1883 21.6204 14.2235 21.8978C14.605 22 15.07 22 16 22M12 18L12 6M8 2C8.92997 2 9.39496 2 9.77645 2.10222C10.8117 2.37962 11.6204 3.18827 11.8978 4.22354C12 4.60504 12 5.07003 12 6M12 6C12 5.07003 12 4.60504 12.1022 4.22354C12.3796 3.18827 13.1883 2.37962 14.2235 2.10222C14.605 2 15.07 2 16 2"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitextcursorduostroke;
