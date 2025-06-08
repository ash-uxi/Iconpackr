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
 * Piarrowdowncirclesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdowncirclesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down circle icon",
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
      d="M22.1501 11.9999C22.1501 17.6055 17.6058 22.1499 12.0001 22.1499C6.39441 22.1499 1.8501 17.6055 1.8501 11.9999C1.8501 6.39416 6.39441 1.84985 12.0001 1.84985C17.6058 1.84985 22.1501 6.39416 22.1501 11.9999ZM15.1917 11.4628C14.5321 12.3688 13.7987 13.2127 13.0001 13.9857L13.0001 7.99995C13.0001 7.44767 12.5524 6.99995 12.0001 6.99995C11.4478 6.99995 11.0001 7.44767 11.0001 7.99995L11.0001 13.9857C10.2016 13.2127 9.46815 12.3688 8.80859 11.4628C8.48355 11.0163 7.85808 10.9178 7.41158 11.2429C6.96508 11.5679 6.86663 12.1934 7.19167 12.6399C8.27913 14.1336 9.55009 15.4761 10.9728 16.6337C11.2699 16.8755 11.6335 17 12.0001 17C12.3668 17 12.7304 16.8755 13.0275 16.6337C14.4502 15.4761 15.7211 14.1336 16.8086 12.6399C17.1336 12.1934 17.0352 11.5679 16.5887 11.2429C16.1422 10.9178 15.5167 11.0163 15.1917 11.4628Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piarrowdowncirclesolid;
