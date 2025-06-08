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
 * Pidribbbleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidribbbleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "dribbble icon",
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
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M17.1077 3.40105C15.9358 5.23776 14.3872 6.81161 12.5707 8.01325C11.477 6.06588 10.2082 4.23031 8.78563 2.52783C8.12306 2.7526 7.49169 3.04494 6.89971 3.39663C8.39046 5.1245 9.71083 7.00325 10.8348 9.00674C8.78165 10.0115 6.47333 10.5757 4.03092 10.5757C3.38299 10.5757 2.7446 10.536 2.11801 10.459C2.04032 10.9613 2 11.4759 2 12C2 12.1543 2.00349 12.3077 2.0104 12.4603C2.67355 12.5365 3.34778 12.5757 4.03092 12.5757C6.80459 12.5757 9.42974 11.9298 11.7619 10.7796C12.0351 11.3416 12.2934 11.9123 12.5361 12.4911C9.29496 13.7155 6.51389 15.8736 4.51979 18.6369C4.96668 19.1402 5.4636 19.5981 6.00275 20.0028C7.78102 17.4566 10.3043 15.4695 13.2548 14.3575C14.063 16.6563 14.632 19.0681 14.932 21.5633C15.6019 21.3582 16.242 21.0845 16.844 20.7506C16.5153 18.3422 15.9492 16.0088 15.1699 13.7751C16.3091 13.5082 17.4974 13.3669 18.7198 13.3669C19.7956 13.3669 20.8453 13.4764 21.8587 13.6847C21.9516 13.137 22 12.5742 22 12C22 11.8906 21.9982 11.7816 21.9948 11.673C20.9336 11.4721 19.8387 11.3669 18.7198 11.3669C17.249 11.3669 15.8193 11.5486 14.4527 11.8911C14.1586 11.1795 13.8425 10.4794 13.5052 9.79162C15.5886 8.44766 17.3685 6.67318 18.7188 4.59332C18.2244 4.14453 17.6848 3.74457 17.1077 3.40105Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pidribbbleduosolid;
