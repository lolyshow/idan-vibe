'use client';

import { useEffect } from 'react';

// type InstagramGridProps = {
//   posts: string[];
//   title?: string;
//   profileUrl?: string;
// };

export default function InstagramSection({
  posts,
  title = 'Follow us on Instagram',
  profileUrl,
}) {
  useEffect(() => {
    if (!(window).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window).instgrm.Embeds.process();
    }
  }, [posts]);

  return (
    <section className="py-12 sm:mx-[20px] " >
      {/* Title */}
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-8">
          {title}
        </h2>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((url) => (
          <div
            key={url}
            className="flex justify-center rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <div className="w-full max-w-[540px] mx-20">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      {profileUrl && (
        <div className="text-center mt-8">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:text-pink-600 transition"
          >
            View more on Instagram →
          </a>
        </div>
      )}
    </section>
  );
}
