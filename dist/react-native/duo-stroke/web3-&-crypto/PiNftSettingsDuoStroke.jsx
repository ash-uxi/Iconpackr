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
 * Pinftsettingsduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinftsettingsduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "nft settings icon",
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
      d="M11.174 21h-.428c-.773 0-1.33 0-1.778-.035a3.8 3.8 0 0 1-.907-.167 4 4 0 0 1-1.466-.856c-.477-.437-.812-1.036-1.482-2.234l-1.454-2.6c-.635-1.134-.952-1.702-1.076-2.302a4 4 0 0 1 0-1.612c.124-.6.441-1.168 1.076-2.302l1.454-2.6c.67-1.198 1.005-1.797 1.482-2.233a4 4 0 0 1 1.466-.857C8.676 3 9.366 3 10.746 3h2.486c1.38 0 2.07 0 2.685.202.545.179 1.044.47 1.466.857.477.436.812 1.035 1.482 2.233l1.49 2.663c.546.978.853 1.526 1.004 2.045q.032.107.054.213"
      opacity={0.28}
      fill="none"
    />
    <path d="M18 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="none" />
    <path
      d="M18.7 13.286a1 1 0 0 0-1.4 0l-.891.873-1.248.013a1 1 0 0 0-.99.99l-.012 1.247-.873.891a1 1 0 0 0 0 1.4l.873.891.013 1.248a1 1 0 0 0 .99.99l1.247.012.891.873a1 1 0 0 0 1.4 0l.891-.873 1.248-.013a1 1 0 0 0 .99-.99l.012-1.247.873-.891a1 1 0 0 0 0-1.4l-.873-.891-.013-1.248a1 1 0 0 0-.99-.99l-1.247-.012zm-1.179 2.583.479-.47.479.47a1 1 0 0 0 .69.285l.67.007.007.67a1 1 0 0 0 .285.69l.47.479-.47.479a1 1 0 0 0-.285.69l-.007.67-.67.007a1 1 0 0 0-.69.285l-.479.47-.479-.47a1 1 0 0 0-.69-.285l-.67-.007-.007-.67a1 1 0 0 0-.285-.69l-.47-.479.47-.479a1 1 0 0 0 .285-.69l.007-.67.67-.007a1 1 0 0 0 .69-.285M6.96 9c0-1.111.906-2 2.008-2s2.007.889 2.007 2-.905 2-2.007 2A2.003 2.003 0 0 1 6.96 9"
      fill="none"
    />
    <path
      d="M8.373 19.848a3 3 0 0 1-.396-.162c.005-.208.014-.388.03-.558.426-4.84 4.287-8.668 9.147-9.09.437-.038.944-.038 1.82-.038h.818c.352.64.518.975.607 1.28q.021.072.036.141c.05.239.183.44.36.579h-1.758c-.956 0-1.37 0-1.71.03-3.903.34-6.988 3.41-7.328 7.273-.017.184-.024.39-.028.695-.379-.003-.673-.01-.924-.03a2.8 2.8 0 0 1-.674-.12"
      fill="none"
    />
  </Svg>
);

export default Pinftsettingsduostroke;
