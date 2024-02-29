import React, { useRef, useEffect, useState } from 'react';

export function CanvasComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            console.log("Canvas not found");
            return;
        }
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const centerX = canvas.width/2;
        const centerY = canvas.height/2;
        const largeCircleRadius = 50;

        // draw large circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, largeCircleRadius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();

        // parametesrs for the vector
        const vectorlength = 50;
        const vectorAngle = 55; // angles in deggress from the x-axis

        // calutalt eend point of the vector
        const endX =  centerX + vectorlength * Math.cos(vectorAngle * Math.PI / 180);
        const endY =  centerY + vectorlength * Math.cos(vectorAngle * Math.PI / 180);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // Parameters for the small circle at the end of the vector
        const smallCircleRadius = 10;

        // Draw the small circle at the end of the vector
        ctx.beginPath();
        ctx.arc(endX, endY, smallCircleRadius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }, []);
    return <canvas ref={canvasRef} className='h-full w-full'/>;
}