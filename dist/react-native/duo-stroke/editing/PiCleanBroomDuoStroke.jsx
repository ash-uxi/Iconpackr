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
 * Picleanbroomduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picleanbroomduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clean broom icon",
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
      d="M10.7217 12.4648C8.61538 14.8655 6.14843 16.8956 3.42885 18.61C1.49973 19.826 6.67752 20.513 7.1393 20.5817M18.9986 14.6096C19.0273 16.3789 18.617 18.0924 17.8313 19.7407C17.1743 21.119 14.135 21.0035 12.4946 20.9938M7.1393 20.5817C8.91234 20.8454 10.702 20.9831 12.4946 20.9938M7.1393 20.5817C8.27901 19.9946 10.2841 18.3126 11.7375 16.2739M12.4946 20.9938C13.1297 20.3066 14.471 18.6976 15.2145 17.2933"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M15.6263 10.3368L18.6497 3M15.6263 10.3368C16.9006 10.6587 18.5017 11.1536 18.8012 12.7155C18.9235 13.3536 18.9884 13.985 18.9985 14.6095L10.7217 12.4648C12.3101 10.6545 12.976 9.66741 15.6263 10.3368Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picleanbroomduostroke;
