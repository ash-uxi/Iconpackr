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
 * Pimonitor01stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimonitor01stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "monitor01 icon",
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
      d="M17 22H7M12 17V22M4.4 17H19.6C20.4401 17 20.8601 17 21.181 16.8365C21.4632 16.6927 21.6927 16.4632 21.8365 16.181C22 15.8601 22 15.4401 22 14.6V4.4C22 3.55992 22 3.13988 21.8365 2.81901C21.6927 2.53677 21.4632 2.3073 21.181 2.16349C20.8601 2 20.4401 2 19.6 2H4.4C3.55992 2 3.13988 2 2.81901 2.16349C2.53677 2.3073 2.3073 2.53677 2.16349 2.81901C2 3.13988 2 3.55992 2 4.4V14.6C2 15.4401 2 15.8601 2.16349 16.181C2.3073 16.4632 2.53677 16.6927 2.81901 16.8365C3.13988 17 3.55992 17 4.4 17Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimonitor01stroke;
