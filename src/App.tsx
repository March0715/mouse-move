import { useEffect, useState } from 'react';

type MousePosType = {
  x: number,
  y: number,
};

export default function App() {
  const [mousePos, setMousePos] = useState<MousePosType>({x: 0, y: 0});

  const onMouseMove = (e: MouseEvent) => {
    setMousePos({x: e.clientX, y: e.clientY});
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return() =>
      window.removeEventListener('mousemove', onMouseMove);
  }, []);
  return (
      <svg version="1.1"
        baseProfile="full"
        width="6000" height="6000"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="300"
          x2={mousePos.x}
          y1="300"
          y2={mousePos.y}
          stroke="#4A4A4A"
          strokeWidth="2"
        />
        <circle cx="300" cy="300" r="5" fill="green" />
        <circle cx={mousePos.x} cy={mousePos.y} r="5" fill="red" />
      </svg>
  );
}
