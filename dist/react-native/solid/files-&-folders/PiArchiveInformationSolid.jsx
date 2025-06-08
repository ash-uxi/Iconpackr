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
 * Piarchiveinformationsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchiveinformationsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive information icon",
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
      d="M3 2C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H21C21.5304 7 22.0391 6.78929 22.4142 6.41421C22.7893 6.03914 23 5.53043 23 5V4C23 3.46957 22.7893 2.96086 22.4142 2.58579C22.0391 2.21071 21.5304 2 21 2H3ZM3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H20C20.2652 9 20.5196 9.10536 20.7071 9.29289C20.8946 9.48043 21 9.73478 21 10V17C21 18.3261 20.4732 19.5979 19.5355 20.5355C18.5979 21.4732 17.3261 22 16 22H8C6.67392 22 5.40215 21.4732 4.46447 20.5355C3.52678 19.5979 3 18.3261 3 17V10ZM13 18.01C13 18.2752 12.8946 18.5296 12.7071 18.7171C12.5196 18.9046 12.2652 19.01 12 19.01C11.7348 19.01 11.4804 18.9046 11.2929 18.7171C11.1054 18.5296 11 18.2752 11 18.01V15.01C11 14.7448 11.1054 14.4904 11.2929 14.3029C11.4804 14.1154 11.7348 14.01 12 14.01C12.2652 14.01 12.5196 14.1154 12.7071 14.3029C12.8946 14.4904 13 14.7448 13 15.01V18.01ZM13 12.01C13 12.2752 12.8946 12.5296 12.7071 12.7171C12.5196 12.9046 12.2652 13.01 12 13.01C11.7348 13.01 11.4804 12.9046 11.2929 12.7171C11.1054 12.5296 11 12.2752 11 12.01V12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V12.01Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piarchiveinformationsolid;
