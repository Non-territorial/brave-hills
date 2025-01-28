"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-ibm-plex-mono">
      {/* Video Section */}
      <section className="h-[73vh] w-full relative">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </section>

      {/* Text Content Section */}
      <main className="h-[27vh] w-full py-4 px-2 text-white leading-relaxed text-left">
        <div className="max-w-none">
          <h1 className="text-base text-white mb-2">BRAVE HILLS</h1>
          <p className="text-base">Brave Hills is a Concept Studio</p>
          <p className="text-base mb-2">ブレイブヒルズはコンセプトスタジオ</p>
          <p className="text-base">
          &quot;Is there still an aesthetic illusion? And if not, a path to an
            &quot;aesthetic&quot; illusion, the radical illusion of secret, seduction, and
            magic? Is there still, on the edges of hyper-visibility, of
            virtuality, room for an image? Room for an enigma? Room for the power
            of illusion, a veritable strategy of forms and appearances?&quot; Jean
            Baudrillard Aesthetic Illusion and Disillusion, 1995
          </p>
          <p className="mt-2">
            <a href="mailto:i@bravehills.net" className="text-base text-gray-400 hover:text-gray-800">
              i@bravehills.net
            </a>
          </p>
          <p>
            <a href="tel:+393515635054" className="text-base text-gray-400 hover:text-gray-800">
              +39 351 563 5054
            </a>
          </p>
          <p className="mt-2 text-sm">&copy; 2025 Brave Hills. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
