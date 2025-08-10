// src/components/ParticleBackground.jsx
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const options = {
        background: {
            color: {
                value: "transparent", // الخلفية ستكون شفافة لتظهر خلفية الموقع الرئيسية
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // يجعل الجسيمات تبتعد عن الماوس
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#d4af37", // لون ذهبي
            },
            links: {
                color: "#eabda8", // لون الخطوط بين الجسيمات
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50, // عدد الجسيمات
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        />
    );
};

export default ParticleBackground;