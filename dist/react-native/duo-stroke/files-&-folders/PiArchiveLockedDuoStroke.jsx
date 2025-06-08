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
 * Piarchivelockedduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivelockedduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive locked icon",
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
      d="M13.9201 14.0508C13.7121 14.0098 13.4301 14.0098 12.9381 14.0098H11.0611C10.5711 14.0098 10.2881 14.0098 10.0801 14.0508M13.9201 14.0508C14.5611 14.1788 15.0401 14.7808 15.0761 15.4238C15.1061 15.9528 14.9091 16.7068 14.6691 17.1838C14.5695 17.382 14.4271 17.5557 14.2523 17.6923C14.0775 17.8289 13.8745 17.925 13.6581 17.9738C13.4951 18.0098 13.3101 18.0098 12.9381 18.0098H11.0611C10.6911 18.0098 10.5051 18.0098 10.3421 17.9728C10.1258 17.9239 9.92307 17.8277 9.74842 17.6911C9.57378 17.5545 9.43159 17.3809 9.33209 17.1828C9.09209 16.7068 8.89309 15.9528 8.92409 15.4228C8.96109 14.7818 9.43909 14.1788 10.0801 14.0508M13.9201 14.0508C13.8691 13.4348 13.8901 12.7608 13.7441 12.1568C13.6744 11.8681 13.5206 11.6066 13.3022 11.4055C13.0837 11.2043 12.8105 11.0725 12.5171 11.0268C12.1941 10.9768 11.8071 10.9768 11.4831 11.0268C11.1897 11.0725 10.9165 11.2043 10.698 11.4055C10.4796 11.6066 10.3258 11.8681 10.2561 12.1568C10.1091 12.7608 10.1311 13.4348 10.0801 14.0508"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 8H20V17C20 18.0609 19.5786 19.0783 18.8284 19.8284C18.0783 20.5786 17.0609 21 16 21H8C6.93913 21 5.92172 20.5786 5.17157 19.8284C4.42143 19.0783 4 18.0609 4 17V8Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarchivelockedduostroke;
