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
 * Piswipedefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswipedefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swipe default icon",
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
    <g opacity={0.28}>
      <path
        d="M15.2111 3.39384C14.6713 3.27724 14.1391 3.62034 14.0225 4.16018C13.9059 4.70002 14.249 5.23216 14.7889 5.34876C16.8488 5.79369 18.7568 6.64839 20.4236 7.82409C20.8749 8.14243 21.4988 8.03465 21.8171 7.58335C22.1355 7.13204 22.0277 6.50812 21.5764 6.18977C19.6951 4.86274 17.5395 3.89677 15.2111 3.39384Z"
        fill={color || "#000"}
      />
      <path
        d="M5.39436 6.24738C5.9019 6.02962 6.13683 5.44165 5.91908 4.93411C5.70132 4.42656 5.11335 4.19164 4.60581 4.40939C3.47895 4.89285 2.41334 5.49105 1.42367 6.18916C0.972364 6.50751 0.86458 7.13143 1.18293 7.58274C1.50127 8.03404 2.12519 8.14182 2.5765 7.82348C3.45338 7.20493 4.39704 6.67526 5.39436 6.24738Z"
        fill={color || "#000"}
      />
    </g>{" "}
    <path
      d="M7.00563 3.99805C7.00563 2.34119 8.34878 0.998047 10.0056 0.998047C11.6625 0.998047 13.0056 2.3412 13.0056 3.99805V9.15092L16.9783 9.81305C18.05 9.99171 18.9171 10.4415 19.5705 11.1025C20.2167 11.7563 20.6073 12.5688 20.8158 13.4097C21.2267 15.0678 20.9635 16.9583 20.402 18.4559C19.3205 21.3398 16.3906 22.8327 13.5409 23.0733C10.6926 23.3138 7.5351 22.3398 5.89264 19.8129L1.64956 13.2851C1.06715 12.3891 1.39422 11.1858 2.35004 10.7078C3.89999 9.93281 5.74802 10.2052 7.00563 11.3454V3.99805Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Piswipedefaultduosolid;
