import Image from "next/image";
import type { CSSProperties } from "react";

// Bright points sampled from the original photograph, in image coordinates.
// Keeping these inside the photo frame makes them track its responsive crop.
const stars = [
  [94.688, 8.383], [3.5, 2.86], [97.25, 19.822], [8.5, 10.552],
  [28.5, 4.931], [21.063, 2.663], [4.813, 19.724], [15.875, 11.045],
  [88.688, 3.945], [43.313, 5.03], [96.188, 30.276], [35.938, 5.424],
  [90.25, 16.075], [94.813, 40.927], [81.5, 16.667], [2.813, 39.25],
  [8.375, 29.586], [88, 33.432], [52.25, 2.564], [23.188, 16.174],
  [72.813, 16.075], [16.875, 22.288], [38.75, 15.779], [79.313, 3.254],
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
            "--star-size": `${1.8 + (index % 3) * .5}px`,
            "--star-duration": `${4.5 + (index * 7 % 6)}s`,
            "--star-delay": `${-index * 2.37}s`,
          } as CSSProperties} />
        ))}
      </div>
      <div className="night-cloud" />
      <div className="night-cloud night-cloud-distant" />
    </div>
  );
}
