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
 * Pidrawpencilstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidrawpencilstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "draw pencil icon",
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
      d="M9.01192 13L8.00012 14.693V20.2313M9.01192 13L12.0001 8L14.9883 13M9.01192 13H14.9883M14.9883 13L16.0001 14.693V20.2313M16.0001 20.2313C19.049 18.747 21.1501 15.6187 21.1501 11.9996C21.1501 6.94621 17.0535 2.84961 12.0001 2.84961C6.94669 2.84961 2.8501 6.94621 2.8501 11.9996C2.8501 15.6187 4.9512 18.747 8.00012 20.2313M16.0001 20.2313C14.7917 20.8196 13.4345 21.1496 12.0001 21.1496C10.5658 21.1496 9.2085 20.8196 8.00012 20.2313"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidrawpencilstroke;
