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
 * Piuserthreestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserthreestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user three icon",
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
      d="M5.09178 10.5161C3.84575 9.83853 3 8.51792 3 6.99978C3 5.48163 3.84576 4.16101 5.09182 3.4834M3.02937 15.4169C1.82391 16.0405 1 17.2989 1 18.7498C1 19.7863 1.70087 20.6591 2.65456 20.9201M21.3454 20.9201C22.2991 20.6591 23 19.7863 23 18.7498C23 17.2989 22.1761 16.0406 20.9706 15.417M18.9082 10.5161C20.1543 9.83853 21 8.51792 21 6.99978C21 5.48162 20.1542 4.16101 18.9082 3.4834M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM8.25 21H15.75C16.9926 21 18 19.9926 18 18.75C18 16.6789 16.3211 15 14.25 15H9.75C7.67893 15 6 16.6789 6 18.75C6 19.9926 7.00736 21 8.25 21Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuserthreestroke;
