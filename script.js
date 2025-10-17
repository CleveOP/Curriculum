document.addEventListener('DOMContentLoaded', () => {
    tsParticles.load({
        id: "particles-container",
        options: {
            background: {
                color: {
                    value: "transparent" // Fundo transparente para usar o do CSS
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse" // As partículas se afastam do mouse
                    }
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#9f70fd" // Cor roxa vibrante do novo tema
                },
                links: {
                    color: "#f0f0f0", // Cor do texto principal para as linhas
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80 // Quantidade de partículas
                },
                opacity: {
                    value: 0.4
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 1, max: 3 }
                }
            }
        }
    });
});