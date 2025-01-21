"use client";

const SpinningCube: React.FC = () => {
  return (
    <div className="w-6 h-6 relative animate-spin-diagonal ml-2">
      <div className="cube">
        <div className="face front bg-red"></div>
        <div className="face back bg-orange"></div>
        <div className="face left bg-blue"></div>
        <div className="face right bg-green"></div>
        <div className="face top bg-white"></div>
        <div className="face bottom bg-yellow"></div>
      </div>
      <style jsx>{`
        .cube {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: spin-diagonal 10s infinite linear;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid #000; /* Black border for separation */
          opacity: 0.9; /* Slight transparency for visual depth */
        }

        .front  { transform: rotateY(  0deg) translateZ(12px); } /* Red face */
        .back   { transform: rotateY(180deg) translateZ(12px); } /* Orange face */
        .left   { transform: rotateY(-90deg) translateZ(12px); } /* Blue face */
        .right  { transform: rotateY( 90deg) translateZ(12px); } /* Green face */
        .top    { transform: rotateX( 90deg) translateZ(12px); } /* White face */
        .bottom { transform: rotateX(-90deg) translateZ(12px); } /* Yellow face */

        @keyframes spin-diagonal {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        /* Additional CSS for colors */
        .bg-red { background-color: #ff0000; } /* Red */
        .bg-orange { background-color: #ff7f00; } /* Orange */
        .bg-blue { background-color: #0000ff; } /* Blue */
        .bg-green { background-color: #00ff00; } /* Green */
        .bg-white { background-color: #ffffff; } /* White */
        .bg-yellow { background-color: #ffff00; } /* Yellow */
      `}</style>
    </div>
  );
};

export default SpinningCube;
