//Displays my picture, outlines a quick bio, my cyber certifications, and my social media pages (put into icons)

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faSpotify, faStrava, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Biography({ boxes }) {
  return (
    <section className="relative bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center space-y-4"
          >
            {box.image && (
                <Image
                src={box.image}
                alt="Profile picture"
                width={300}
                height={300}
                className="object-cover rounded-full"
              />
            )}
            <h2 className="text-3xl font-bold">{box.header}</h2>
            <p className="text-gray-300">{box.description}</p>

            <hr className="w-full border-gray-600 my-4" />

             {box.certifications && (
              <div className="w-full mt-6">
                <h2 className="text-3xl font-bold text-white mb-4">My Cybersecurity Certifications</h2>
                <div className="flex flex-wrap justify-center gap-8 text-center">
                  {box.certifications.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center space-y-2 w-24 sm:w-28"
                    >
                      {item.svg && (
                        <div className="w-16 h-16 sm:w-40 sm:h-20 flex items-center justify-center">
                          {item.svg}
                        </div>
                      )}
                      <p className="text-sm sm:text-base font-semibold text-gray-200">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <hr className="w-full border-gray-600 my-4" />

            <h3 className="text-2xl font-semibold">{box.secondaryHeader}</h3>

            <div className="flex flex-wrap justify-center gap-4 text-white text-5xl mt-2">
              {box.handshake && (
                <div className="flex justify-center items-center">
                    <a href={box.handshake} target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/third_party_logos/Handshake_Wordmark_White_RGB.png" 
                        alt="Handshake"
                        width={150}
                        height={150}
                        className="hover:opacity-85"
                    />
                    </a>
                </div>
              )}
              {box.email && (
                <a href={`mailto:${box.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} className="hover:text-gray-400" />
                </a>
              )}
              {box.github && (
                <a href={box.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400" />
                </a>
              )}
              {box.linkedin && (
                <a href={box.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#4682B4]" />
                </a>
              )}
              {box.instagram && (
                <a href={box.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-400" />
                </a>
              )}
              {box.spotify && (
                <a href={box.spotify} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSpotify} className="hover:text-green-400" />
                </a>
              )}
              {box.strava && (
                <a href={box.strava} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faStrava} className="hover:text-orange-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}