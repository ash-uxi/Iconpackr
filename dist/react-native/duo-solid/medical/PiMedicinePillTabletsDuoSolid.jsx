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
 * Pimedicinepilltabletsduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepilltabletsduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pill tablets icon",
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
        d="M12.8662 5.73498C12.167 2.49588 8.97438 0.43689 5.73528 1.13609C2.4962 1.8353 0.437128 5.02793 1.13634 8.26704C1.83554 11.5062 5.02824 13.5651 8.26733 12.8659C11.5064 12.1667 13.5654 8.97408 12.8662 5.73498Z"
        fill={color || "#000"}
      />
      <path
        d="M19.0638 11.3668C15.952 10.2279 12.506 11.8273 11.3671 14.9391C10.2282 18.051 11.8276 21.4969 14.9395 22.6358C18.0513 23.7747 21.4972 22.1753 22.6361 19.0635C23.775 15.9516 22.1756 12.5057 19.0638 11.3668Z"
        fill={color || "#000"}
      />
    </g>{" "}
    <path
      d="M12.0999 6.92349C12.6397 6.80696 12.9829 6.27486 12.8664 5.73501C12.7498 5.19516 12.2177 4.85199 11.6779 4.96852L1.90297 7.07858C1.36312 7.19511 1.01996 7.72721 1.13649 8.26706C1.25303 8.80691 1.78513 9.15008 2.32498 9.03355L12.0999 6.92349Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M12.65 14.3438C12.1314 14.154 11.557 14.4205 11.3672 14.9392C11.1774 15.4578 11.444 16.0321 11.9626 16.2219L21.3535 19.6589C21.8721 19.8487 22.4464 19.5822 22.6363 19.0635C22.8261 18.5449 22.5595 17.9706 22.0409 17.7807L12.65 14.3438Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pimedicinepilltabletsduosolid;
