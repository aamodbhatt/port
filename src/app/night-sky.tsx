import Image from "next/image";
import type { CSSProperties } from "react";

// Bright points sampled across a grid of the original sky, in image coordinates.
// Distributing them across the sky keeps glints in view through narrow and wide crops.
// Keeping these inside the photo frame makes them track its responsive crop.
const stars = [
  [5, 8.679], [15.063, 9.369], [28.5, 5.03], [39.438, 5.72], [48.938, 6.706], [58.25, 5.03], [71.25, 8.974], [81.375, 6.41], [92, 6.114],
  [6.938, 13.905], [15.188, 14.497], [30.813, 12.426], [37.813, 12.229], [46.063, 14.201], [61, 12.525], [72.125, 13.905], [83.188, 15.779], [91.063, 12.525],
  [7.75, 23.373], [15.937, 19.034], [31.25, 20.217], [37.375, 22.387], [46.563, 20.118], [62.438, 19.625], [73.125, 18.935], [82.375, 20.118], [91.688, 21.696],
  [5.625, 29.29], [18.313, 27.022], [31.063, 30.178], [38, 27.712], [50.5, 30.276], [62.125, 27.712], [71.813, 25.74], [82.25, 27.12], [90.125, 27.219],
  [6, 34.122], [16.938, 32.249], [28.063, 32.643], [37.25, 35.404], [49.875, 32.051], [56, 32.643], [71.438, 32.15], [80.375, 34.024], [93.375, 35.897],
  [5.125, 40.927], [15.687, 41.519], [29.313, 38.955], [36.688, 40.927], [47.188, 42.406], [55.75, 38.757], [71.688, 38.757], [83.688, 39.941], [88.813, 40.434],
];

export default function NightSky() {
  return (
    <div className="night-backdrop" aria-hidden="true">
      <div className="night-photo-frame">
        <Image
          src="/annapurna-milky-way-original.jpg"
          alt=""
          fill
          sizes="(max-aspect-ratio: 6276/3976) 158vh, 100vw"
          quality={90}
          priority
          className="night-image"
        />
      </div>
      <div className="night-shade" />
      <div className="night-photo-frame night-glints">
        {stars.map(([x, y], index) => (
          <i key={`${x}-${y}`} className="photo-star" style={{
            "--star-x": `${x}%`,
            "--star-y": `${y}%`,
            "--star-size": `clamp(2.4px, ${.16 + (index % 3) * .03}vw, ${3.6 + (index % 3) * .5}px)`,
            "--star-duration": `${2.8 + (index * 7 % 9) * .3}s`,
            "--star-delay": `${-index * 2.37}s`,
          } as CSSProperties} />
        ))}
      </div>
      <div className="night-cloud" />
      <div className="night-cloud night-cloud-distant" />
    </div>
  );
}
