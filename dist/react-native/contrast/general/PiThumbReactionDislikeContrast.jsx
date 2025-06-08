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
 * Pithumbreactiondislikecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithumbreactiondislikecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "thumb reaction dislike icon",
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
    <path d="M16 11.064V12.5a2.5 2.5 0 0 0 5 0v-6a2.5 2.5 0 0 0-5 0v1.768m0 2.796c-.002.813-.015 1.285-.1 1.742-.088.479-.234.945-.436 1.389-.226.5-.546.959-1.185 1.878l-3.012 4.326c-.077.11-.115.164-.15.205a1 1 0 0 1-1.382.123c-.042-.034-.09-.081-.184-.176-.164-.164-.245-.245-.315-.326a3 3 0 0 1-.602-2.845c.032-.102.073-.21.157-.426l.048-.124c.133-.346.2-.52.226-.656a1.5 1.5 0 0 0-1.199-1.748c-.137-.026-.322-.026-.694-.026H4.786c-.96 0-1.44 0-1.785-.195a1.5 1.5 0 0 1-.66-.766c-.142-.37-.07-.844.071-1.794l.532-3.555c.217-1.451.325-2.177.679-2.722A3 3 0 0 1 4.899 4.27C5.49 4 6.224 4 7.69 4H11.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.29.57.323 1.297.327 2.63m0 2.796V8.268" />
    <path
      fill={color}
      d="m8.839 16.83-.048.124c-.084.216-.125.324-.157.426a3 3 0 0 0 .602 2.845c.07.08.151.162.315.326.095.095.142.142.184.176a1 1 0 0 0 1.382-.123c.035-.04.073-.095.15-.205l3.012-4.326c.64-.919.959-1.378 1.185-1.878q.303-.668.436-1.39c.085-.456.098-.928.1-1.741V8.268c-.004-1.333-.037-2.06-.327-2.63a3 3 0 0 0-1.311-1.311C13.72 4 12.88 4 11.2 4H7.691c-1.467 0-2.2 0-2.792.269a3 3 0 0 0-1.276 1.1c-.354.544-.462 1.27-.68 2.721l-.53 3.555c-.143.95-.214 1.424-.072 1.794a1.5 1.5 0 0 0 .66.766c.344.195.825.195 1.785.195h2.386c.372 0 .557 0 .694.026a1.5 1.5 0 0 1 1.199 1.748c-.026.137-.093.31-.226.656"
      opacity={0.28}
    />
  </Svg>
);

export default Pithumbreactiondislikecontrast;
