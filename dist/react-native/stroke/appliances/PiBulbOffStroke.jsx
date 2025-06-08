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
 * Pibulboffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibulboffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bulb off icon",
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
      d="M10.3789 21H13.621M6.3125 10.4681C6.3125 7.44504 8.85888 4.99438 12 4.99438C15.1411 4.99438 17.6875 7.44504 17.6875 10.4681C17.6875 12.1252 16.9224 13.6103 15.7136 14.614C15.203 15.038 14.764 15.5644 14.5972 16.2068L14.3698 17.0821C14.2302 17.6193 13.7453 17.9944 13.1902 17.9944H10.8098C10.2547 17.9944 9.76975 17.6193 9.6302 17.0821L9.40282 16.2068C9.23596 15.5644 8.797 15.038 8.28642 14.614C7.07762 13.6103 6.3125 12.1252 6.3125 10.4681Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibulboffstroke;
