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
 * Piscreenaddduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscreenaddduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "screen add icon",
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
      d="M12 20.875V17M12 20.875C10.25 20.875 8.5 21.25 7 22M12 20.875C13.75 20.875 15.5 21.25 17 22"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M14.3529 2H4.4C3.55992 2 3.13988 2 2.81901 2.16349C2.53677 2.3073 2.3073 2.53677 2.16349 2.81901C2 3.13988 2 3.55992 2 4.4V14.6C2 15.4401 2 15.8601 2.16349 16.181C2.3073 16.4632 2.53677 16.6927 2.81901 16.8365C3.13988 17 3.55992 17 4.4 17H19.6C20.4401 17 20.8601 17 21.181 16.8365C21.4632 16.6927 21.6927 16.4632 21.8365 16.181C22 15.8601 22 15.4401 22 14.6V11.4648"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 8V5M20 5V2M20 5H17M20 5H23"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piscreenaddduostroke;
