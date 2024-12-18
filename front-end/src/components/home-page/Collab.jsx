import React from "react";

export default function Collab() {
  const collaborators = [
    { src: "/monos.jpg" },
    { src: "/cityfarm.jpg" },
    { src: "/khurmen.png" },
    { src: "/mago.jpg" },
    { src: "/monfa.jpg" },
    { src: "/tavinus.jpg" },
    { src: "/zuun.jpg" },
    { src: "/tsahildag.jpg" },
  ];

  // Double the array to create seamless loop
  const duplicatedCollaborators = [...collaborators, ...collaborators];

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-track {
          animation: scroll 20s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container flex flex-col justify-center items-center py-7 gap-7">
        <p className="font-bold text-2xl text-[#00BBD3]">
          Хамтрагч байгууллагууд
        </p>

        <div className="container overflow-hidden">
          <div className="carousel-track inline-flex gap-16">
            {duplicatedCollaborators.map((collab, index) => (
              <div
                key={index}
                className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={collab.src}
                  alt="Collaborator logo"
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
