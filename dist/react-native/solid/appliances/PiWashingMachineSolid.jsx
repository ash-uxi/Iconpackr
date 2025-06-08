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
 * Piwashingmachinesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwashingmachinesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "washing machine icon",
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
      d="M3 9V18.8385C2.99998 19.3657 2.99997 19.8205 3.03057 20.195C3.06287 20.5904 3.13419 20.9836 3.32698 21.362C3.6146 21.9265 4.07355 22.3854 4.63803 22.673C5.01641 22.8658 5.40963 22.9371 5.80498 22.9694C6.17954 23 6.6343 23 7.16144 23H16.8386C17.3657 23 17.8205 23 18.195 22.9694C18.5904 22.9371 18.9836 22.8658 19.362 22.673C19.9265 22.3854 20.3854 21.9265 20.673 21.362C20.8658 20.9836 20.9371 20.5904 20.9694 20.195C21 19.8205 21 19.3657 21 18.8386V9H3ZM7.5 15C7.5 12.5147 9.51472 10.5 12 10.5C14.4853 10.5 16.5 12.5147 16.5 15C16.5 17.4853 14.4853 19.5 12 19.5C9.51472 19.5 7.5 17.4853 7.5 15Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M7.16146 1H16.8385C17.3657 0.999984 17.8205 0.99997 18.195 1.03057C18.5904 1.06287 18.9836 1.13419 19.362 1.32698C19.9265 1.6146 20.3854 2.07355 20.673 2.63803C20.8658 3.01641 20.9371 3.40963 20.9694 3.80498C21 4.17954 21 4.6343 21 5.16144V7H3V5.16146C2.99998 4.63435 2.99997 4.17953 3.03057 3.80498C3.06287 3.40963 3.13419 3.01641 3.32698 2.63803C3.6146 2.07355 4.07355 1.6146 4.63803 1.32698C5.01641 1.13419 5.40963 1.06287 5.80498 1.03057C6.17953 0.99997 6.63434 0.999984 7.16146 1ZM6 4C6 3.44772 6.44772 3 7 3H9C9.55229 3 10 3.44772 10 4C10 4.55229 9.55229 5 9 5H7C6.44772 5 6 4.55229 6 4ZM13 4C13 3.44772 13.4477 3 14 3H14.01C14.5623 3 15.01 3.44772 15.01 4C15.01 4.55229 14.5623 5 14.01 5H14C13.4477 5 13 4.55229 13 4ZM16 4C16 3.44772 16.4477 3 17 3H17.01C17.5623 3 18.01 3.44772 18.01 4C18.01 4.55229 17.5623 5 17.01 5H17C16.4477 5 16 4.55229 16 4Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piwashingmachinesolid;
