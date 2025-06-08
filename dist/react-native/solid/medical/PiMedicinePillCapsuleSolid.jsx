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
 * Pimedicinepillcapsulesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepillcapsulesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pill capsule icon",
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
      d="M20.4853 3.51471C18.0438 1.07322 14.0854 1.07322 11.6439 3.51471L8.28637 6.87221L17.1278 15.7136L20.4853 12.3561C22.9268 9.91462 22.9268 5.95619 20.4853 3.51471ZM17.3261 5.49375C16.3982 5.05045 15.2514 5.21137 14.4806 5.98217L12.7128 7.74994C12.3223 8.14046 12.3223 8.77363 12.7128 9.16415C13.1033 9.55468 13.7365 9.55468 14.127 9.16415L15.8948 7.39639C16.0476 7.24355 16.2769 7.20901 16.4641 7.29841C16.9624 7.53647 17.5594 7.32547 17.7974 6.82713C18.0355 6.32878 17.8245 5.73181 17.3261 5.49375Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M3.51471 11.6439L6.87215 8.28643L15.7136 17.1278L12.3561 20.4853C9.91462 22.9268 5.95619 22.9268 3.51471 20.4853C1.07322 18.0438 1.07322 14.0854 3.51471 11.6439Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pimedicinepillcapsulesolid;
