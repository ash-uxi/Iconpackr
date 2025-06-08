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
 * Piusershieldstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusershieldstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user shield icon",
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
      d="M11.0469 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H10.1602M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM17.1132 14.4055L14.8073 15.1353C14.3598 15.2769 14.051 15.6663 14.0314 16.1138L14.0043 16.7315C13.9251 18.5357 14.9474 20.2219 16.6304 21.0629L16.9566 21.2259C17.2805 21.3878 17.6666 21.3916 17.9939 21.2362L18.2783 21.1012C20.079 20.2463 21.1501 18.4366 20.9829 16.5317L20.9432 16.0794C20.9055 15.6494 20.6014 15.2821 20.1703 15.1456L17.8318 14.4055C17.5986 14.3316 17.3464 14.3316 17.1132 14.4055Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piusershieldstroke;
