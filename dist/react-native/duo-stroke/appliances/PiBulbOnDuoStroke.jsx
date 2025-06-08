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
 * Pibulbonduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibulbonduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bulb on icon",
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
      d="M10.3789 21H13.621M12 2V1M19 4.70711L19.7071 4M4.70711 4.70711L4 4M22 11H21M3 11H2"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12.0002 4.99426C8.85912 4.99426 6.31274 7.44491 6.31274 10.4679C6.31274 12.125 7.07787 13.6101 8.28666 14.6139C8.79725 15.0379 9.23621 15.5643 9.40307 16.2066L9.63044 17.0819C9.77 17.6192 10.255 17.9943 10.81 17.9943H13.1904C13.7455 17.9943 14.2305 17.6192 14.37 17.0819L14.5974 16.2066C14.7643 15.5643 15.2032 15.0379 15.7138 14.6139C16.9226 13.6101 17.6877 12.125 17.6877 10.4679C17.6877 7.44491 15.1414 4.99426 12.0002 4.99426Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibulbonduostroke;
