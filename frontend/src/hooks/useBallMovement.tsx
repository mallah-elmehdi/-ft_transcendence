import { useEffect, useRef, useState, RefObject } from 'react';

interface HookReturnType {
    ball_x: number;
    ball_y: number;
    ball_ref: RefObject<HTMLDivElement>;
}

export const useBallMovement = (speed: number, random: number): HookReturnType => {
    // MOVEMENT
    const ref = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [direction, setDirection] = useState({
        x: Math.cos(random * 2 * Math.PI),
        y: Math.sin(random * 2 * Math.PI),
    });

    useEffect(() => {
        let lastTime: number;
        const upddateAnimation = (time: number) => {
            if (lastTime) {
                const delta = time - lastTime;
                if (ref.current) {
                    // setX(x + direction.x * speed * delta);
                    // setY(y + direction.y * speed * delta);
                }
            }
            lastTime = time;
            window.requestAnimationFrame(upddateAnimation);
        };

        if (x >= 100 || x <= 0) setDirection({ y: direction.y, x: direction.x * -1 });
        if (y >= 100 || y <= 0) setDirection({ y: direction.y * -1, x: direction.x });

        window.requestAnimationFrame(upddateAnimation);
    },[direction]);

    return {
        ball_x: x,
        ball_y: y,
        ball_ref: ref,
    };
};
