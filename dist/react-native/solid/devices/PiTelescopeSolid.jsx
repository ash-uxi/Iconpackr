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
 * Pitelescopesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitelescopesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "telescope icon",
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
      d="M19.7129 2.30765C20.213 2.22693 20.7029 2.53721 20.8369 3.03714L23.2851 12.1739C23.4278 12.7072 23.1115 13.2556 22.5781 13.3985L20.6465 13.916C19.4675 14.232 18.2663 13.7977 17.543 12.9082L14.9697 13.42C14.968 13.4323 14.9677 13.4448 14.9658 13.4571C14.8701 14.0835 14.5783 14.6443 14.1582 15.0801L16.8945 20.5528L16.9355 20.6465C17.1153 21.1205 16.9104 21.663 16.4473 21.8946C15.9842 22.126 15.4275 21.9643 15.1562 21.5362L15.1055 21.4473L12.3691 15.9766C12.2481 15.9914 12.125 16 12 16C11.8743 16 11.7506 15.9906 11.6289 15.9756L8.89452 21.4473C8.64752 21.9412 8.04669 22.1415 7.55273 21.8946C7.05884 21.6475 6.85852 21.0467 7.10546 20.5528L9.84081 15.0791C9.68042 14.9126 9.54061 14.7274 9.42187 14.5274L4.03515 15.6026C3.00143 15.8086 1.98478 15.1763 1.71191 14.1582L1.16112 12.1045C0.888423 11.0864 1.45295 10.0308 2.45116 9.69242L3.30468 9.40335L3.13183 8.75882C2.98904 8.22554 3.3057 7.6773 3.83886 7.53421C4.3723 7.39134 4.92152 7.70781 5.06444 8.24124L5.20312 8.75882L15.4961 5.27054C15.6782 4.1391 16.502 3.1635 17.6807 2.84769L19.6123 2.33011L19.7129 2.30765ZM3.09374 11.5869L3.64355 13.6407L9.03124 12.5655C9.24179 11.1146 10.4908 10.0001 12 10C13.0934 10 14.047 10.5869 14.5713 11.461L16.7646 11.0244L15.7646 7.29007L3.09374 11.5869Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pitelescopesolid;
