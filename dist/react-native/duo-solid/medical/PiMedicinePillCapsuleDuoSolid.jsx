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
 * Pimedicinepillcapsuleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepillcapsuleduosolid = ({
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
      d="M17.3261 5.49389C16.3982 5.05059 15.2514 5.21151 14.4806 5.98232L12.7128 7.75008C12.3223 8.14061 12.3223 8.77377 12.7128 9.1643C13.1033 9.55482 13.7365 9.55482 14.127 9.1643L15.8948 7.39653C16.0476 7.2437 16.2769 7.20915 16.4641 7.29855C16.9624 7.53661 17.5594 7.32561 17.7974 6.82727C18.0355 6.32893 17.8245 5.73196 17.3261 5.49389Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M20.4853 3.51471C18.0438 1.07322 14.0854 1.07322 11.6439 3.51471L3.51471 11.6439C1.07322 14.0854 1.07322 18.0438 3.51471 20.4853C5.95619 22.9268 9.91462 22.9268 12.3561 20.4853L20.4853 12.3561C22.9268 9.91462 22.9268 5.95619 20.4853 3.51471Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M8.99324 7.57948C8.60272 7.18895 7.96955 7.18895 7.57903 7.57948C7.1885 7.97 7.1885 8.60316 7.57903 8.99369L15.0062 16.4209C15.3967 16.8114 16.0299 16.8114 16.4204 16.4209C16.8109 16.0303 16.8109 15.3972 16.4204 15.0067L8.99324 7.57948Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pimedicinepillcapsuleduosolid;
