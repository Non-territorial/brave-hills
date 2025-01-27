"use client";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white font-ibm-plex-mono">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Main Content */}
      <main className="relative flex flex-col justify-center items-center flex-grow z-10 px-4">
        <div className="flex flex-col items-start max-w-4xl mx-auto mb-20 text-gray-400 text-sm leading-relaxed">
          <h1 className="text-lg text-white mb-4">BRAVE HILLS</h1>
          <p className="mb-2">Brave Hills is a Concept Studio</p>
          <p className="mb-4">ブレイブヒルズはコンセプトスタジオ</p>
          <p className="mb-4">
            "Is there still an aesthetic illusion? And if not, a path to an
            "aesthetic" illusion, the radical illusion of secret, seduction, and
            magic? Is there still, on the edges of hyper-visibility, of
            virtuality, room for an image? Room for an enigma? Room for the power
            of illusion, a veritable strategy of forms and appearances?" 
            Jean Baudrillard Aesthetic Illusion and Disillusion, 1995
          </p>
          <p className="mt-4">
            <a href="mailto:i@bravehills.net" className="text-gray-400 hover:text-white">
              i@bravehills.net
            </a>
          </p>
          <p>
            <a href="tel:+393515635054" className="text-gray-400 hover:text-white">
              +39 351 563 5054
            </a>
          </p>
          <p className="mt-4">&copy; 2025 Brave Hills. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
