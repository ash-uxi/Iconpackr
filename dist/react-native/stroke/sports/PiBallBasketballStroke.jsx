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
 * Piballbasketballstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piballbasketballstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ball basketball icon",
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
      d="M21.1496 12C21.1496 17.0534 17.053 21.15 11.9996 21.15M21.1496 12C21.1496 6.94657 17.053 2.84998 11.9996 2.84998M21.1496 12H2.84961M11.9996 21.15C6.9462 21.15 2.84961 17.0534 2.84961 12M11.9996 21.15V2.84998M2.84961 12C2.84961 6.94657 6.9462 2.84998 11.9996 2.84998M5.51836 5.5416C6.36587 6.38985 7.03781 7.39689 7.49574 8.50508C7.95367 9.61328 8.18861 10.8009 8.18711 12C8.18861 13.1991 7.95367 14.3867 7.49574 15.4949C7.03781 16.6031 6.36587 17.6101 5.51836 18.4583M18.4809 5.5416C16.772 7.2566 15.8125 9.57895 15.8125 12C15.8125 14.421 16.772 16.7433 18.4809 18.4583"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piballbasketballstroke;
