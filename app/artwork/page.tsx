import ArtworkCard from "@/components/ArtworkCard";
import { artworks } from "@/lib/artworks";

export default function Artwork() {
  return (
    <main className="gallery-page">
      <section className="gallery-header">
        <h1>Gallery</h1>
      </section>

      <section className="gallery-grid">
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.slug}
            slug={artwork.slug}
            title={artwork.title}
            image={artwork.image}
          />
        ))}
      </section>
    </main>
  );
}