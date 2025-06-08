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
 * Pirotaterightsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotaterightsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate right icon",
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
      d="M16.8715 2.25948C17.0344 1.89749 17.3961 1.66615 17.793 1.66997C18.19 1.67379 18.5471 1.91204 18.703 2.2771C19.2462 3.54867 19.622 4.88477 19.8215 6.25189C19.8949 6.75464 19.7163 7.18733 19.4136 7.48712C19.1648 7.73365 18.866 7.85631 18.711 7.91567C18.6849 7.92567 18.6588 7.9356 18.6326 7.94547C18.6179 7.95137 18.6032 7.95691 18.5883 7.96208C17.4006 8.40578 16.1635 8.70703 14.903 8.85889C14.5089 8.90638 14.124 8.71624 13.9222 8.37438C13.7204 8.03252 13.74 7.60368 13.972 7.28158L14.3176 6.80187C14.5763 6.44268 14.8245 6.07628 15.0619 5.70315C14.1369 5.25253 13.098 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.2603 19 18.0024 16.7701 18.7795 13.7507C18.9172 13.2159 19.4624 12.8939 19.9972 13.0316C20.5321 13.1692 20.8541 13.7144 20.7164 14.2493C19.7174 18.1308 16.195 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.4618 3 14.8423 3.34882 16.0627 3.96722C16.2623 3.58328 16.4511 3.19359 16.6289 2.7986L16.8715 2.25948Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pirotaterightsolid;
