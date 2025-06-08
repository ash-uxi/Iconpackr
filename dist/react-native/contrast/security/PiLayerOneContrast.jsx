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
 * Pilayeronecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilayeronecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "layer one icon",
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
      fill={color}
      d="M4.3 13.081c-.737-.348-1.105-.522-1.223-.757a.72.72 0 0 1 0-.648c.118-.235.486-.41 1.222-.757l6.272-2.966c.524-.248.786-.372 1.06-.42a2.1 2.1 0 0 1 .737 0c.275.048.537.172 1.061.42l6.272 2.966c.736.348 1.104.522 1.222.757a.72.72 0 0 1 0 .648c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42z"
      opacity={0.28}
    />
    <path d="M4.3 13.081c-.737-.348-1.105-.522-1.223-.757a.72.72 0 0 1 0-.648c.118-.235.486-.41 1.222-.757l6.272-2.966c.524-.248.786-.372 1.06-.42a2.1 2.1 0 0 1 .737 0c.275.048.537.172 1.061.42l6.272 2.966c.736.348 1.104.522 1.222.757a.72.72 0 0 1 0 .648c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42z" />
  </Svg>
);

export default Pilayeronecontrast;
