import { artworks } from "@/lib/artworks";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArtworkDetail({
  params,
}: Props) {
  const { slug } = await params;

  const artwork = artworks.find(
    (art) => art.slug === slug
  );

  if (!artwork) {
    notFound();
  }

  return (
    <main className="artwork-page">
      <div className="artwork-container">

        <div className="artwork-image-container">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={1200}
            height={1800}
            priority
            className="artwork-detail-image"
          />
        </div>

        <div className="artwork-meta">
          <h1>{artwork.title}</h1>

          {artwork.description && (
            <p>{artwork.description}</p>
          )}

          {artwork.category && (
            <p className="artwork-category">
              {artwork.category}
            </p>
          )}
        </div>

      </div>
    </main>
  );
}