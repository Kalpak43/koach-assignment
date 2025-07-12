"use client";

const Grid = () => {
  const size = 20; // 20 x 20 grid = 400 cells
  const cells = Array.from({ length: size * size });

  return (
    <div
      className="absolute inset-0 -z-10 grid [mask-image:radial-gradient(ellipse_150%_150%_at_0%_0%,transparent_70%,#000_100%)]"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
    >
      {cells.map((_, i) => {
        const opacity = Math.random() * 0.4 + 0.1; // Random between 0.1–0.5
        return <div key={i} className="bg-primary/70" style={{ opacity }} />;
      })}
    </div>
  );
};

export default Grid;
