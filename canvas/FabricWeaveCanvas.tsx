'use client';

import { useEffect, useRef } from 'react';

const FabricWeaveCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 1;

            const width = canvas.width;
            const height = canvas.height;
            const gap = 40; // Spacing between threads

            // Vertical threads (Warp)
            ctx.strokeStyle = 'rgba(212, 196, 168, 0.05)'; // Accent color very low opacity
            for (let x = 0; x < width; x += gap) {
                ctx.beginPath();
                for (let y = 0; y < height; y += 10) {
                    const offsetX = Math.sin((y + time) * 0.02) * 2;
                    ctx.lineTo(x + offsetX, y);
                }
                ctx.stroke();
            }

            // Horizontal threads (Weft)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            for (let y = 0; y < height; y += gap) {
                ctx.beginPath();
                for (let x = 0; x < width; x += 10) {
                    const offsetY = Math.cos((x + time) * 0.02) * 2;
                    ctx.lineTo(x, y + offsetY);
                }
                ctx.stroke();
            }

            time += 0.5;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
        />
    );
};

export default FabricWeaveCanvas;
