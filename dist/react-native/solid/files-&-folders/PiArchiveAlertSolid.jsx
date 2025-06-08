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
 * Piarchivealertsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivealertsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive alert icon",
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
      d="M3 2C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H21C21.5304 7 22.0391 6.78929 22.4142 6.41421C22.7893 6.03914 23 5.53043 23 5V4C23 3.46957 22.7893 2.96086 22.4142 2.58579C22.0391 2.21071 21.5304 2 21 2H3ZM3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H20C20.2652 9 20.5196 9.10536 20.7071 9.29289C20.8946 9.48043 21 9.73478 21 10V17C21 18.3261 20.4732 19.5979 19.5355 20.5355C18.5979 21.4732 17.3261 22 16 22H8C6.67392 22 5.40215 21.4732 4.46447 20.5355C3.52678 19.5979 3 18.3261 3 17V10ZM13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V12ZM13 18C13 17.7348 12.8946 17.4804 12.7071 17.2929C12.5196 17.1054 12.2652 17 12 17C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18V18.01C11 18.2752 11.1054 18.5296 11.2929 18.7171C11.4804 18.9046 11.7348 19.01 12 19.01C12.2652 19.01 12.5196 18.9046 12.7071 18.7171C12.8946 18.5296 13 18.2752 13 18.01V18Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piarchivealertsolid;
