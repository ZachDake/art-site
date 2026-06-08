// components/ArtworkCard.tsx

import Link from "next/link";
import Image from "next/image";

type ArtworkCardProps = {
  slug: string;
  title: string;
  image: string;
};

export default function ArtworkCard({
  slug,
  title,
  image,
}: ArtworkCardProps) {
  return (
    <Link href={`/artwork/${slug}`} className="artwork-card">
      <div className="artwork-image-wrapper">
        <Image
          src={image}
          alt={title}
          width={800}
          height={1200}
          className="artwork-image"
        />

        <div className="artwork-overlay">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
}