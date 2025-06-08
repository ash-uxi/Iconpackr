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
 * Piexchange02solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchange02solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "exchange02 icon",
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
      d="M17.0281 5.07503C17.0572 4.68813 16.8599 4.31932 16.5219 4.12883C16.1839 3.93833 15.7662 3.96055 15.4503 4.18583C13.9269 5.27223 12.5572 6.54236 11.3758 7.96472C11.1293 8.26138 11 8.62777 11 9C11 9.37223 11.1293 9.73863 11.3758 10.0353C12.5572 11.4577 13.9269 12.7278 15.4503 13.8142C15.7662 14.0395 16.1839 14.0617 16.5219 13.8712C16.8599 13.6807 17.0572 13.3119 17.0281 12.925L16.8626 10.7253C16.8444 10.4837 16.8301 10.2419 16.8196 10H20C20.5523 10 21 9.55229 21 9C21 8.44772 20.5523 8 20 8H16.8196C16.8301 7.7581 16.8444 7.51626 16.8626 7.27469L17.0281 5.07503Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M6.97192 11.075C6.94281 10.6881 7.14012 10.3193 7.47813 10.1288C7.81614 9.93833 8.23383 9.96055 8.54972 10.1858C10.0731 11.2722 11.4428 12.5424 12.6242 13.9647C12.8707 14.2614 13 14.6278 13 15C13 15.3722 12.8707 15.7386 12.6242 16.0353C11.4428 17.4577 10.0731 18.7278 8.5497 19.8142C8.23381 20.0395 7.81613 20.0617 7.47812 19.8712C7.14012 19.6807 6.94281 19.3119 6.97192 18.925L7.13742 16.7253C7.15558 16.4837 7.16992 16.2419 7.18044 16H4C3.44771 16 3 15.5523 3 15C3 14.4477 3.44771 14 4 14H7.18044C7.16992 13.7581 7.15557 13.5163 7.13741 13.2747L6.97192 11.075Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piexchange02solid;
