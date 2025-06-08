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
 * Pipowercirclesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipowercirclesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "power circle icon",
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
      d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V7ZM8.79897 9.60089C9.13061 9.15927 9.04146 8.53241 8.59984 8.20077C8.15822 7.86912 7.53136 7.95827 7.19972 8.39989C6.44663 9.4027 6 10.6506 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 10.6506 17.5534 9.4027 16.8003 8.39989C16.4686 7.95827 15.8418 7.86912 15.4002 8.20077C14.9585 8.53241 14.8694 9.15927 15.201 9.60089C15.703 10.2693 16 11.0985 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 11.0985 8.29703 10.2693 8.79897 9.60089Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pipowercirclesolid;
