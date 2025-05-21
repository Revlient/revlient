"use client";
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { Curve } from '@/components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const games = [
    { 
        id: 1, 
        name: "Game 1", 
        scene: "https://prod.spline.design/s5VgRsBwm7mq-Wqm/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 2, 
        name: "Game 2", 
        scene: "https://prod.spline.design/G46bcMRddu7fV2GY/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 3, 
        name: "Game 3", 
        scene: "https://prod.spline.design/kq0Sk-NbtEC7Gdkc/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 4, 
        name: "Game 4", 
        scene: "https://prod.spline.design/yxjkoyT5oby9JLPy/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 5, 
        name: "Game 5", 
        scene: "https://prod.spline.design/U-0mKQBHIpiTKr3z/scene.splinecode",
        image: "/nuke.png"
    }
];

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const [hoveredGame, setHoveredGame] = useState<number | null>(null);

    return (
        <Curve backgroundColor="#f1f1f1">
            <main className="w-screen h-screen relative">
                {!selectedGame ? (
                    <div className="absolute inset-0 flex bg-black z-50">
                        {/* Bold Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                        
                        {/* Bold Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        
                        {/* Left Side - Featured Game */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col justify-center pl-20 pr-10"
                            >
                                <h1 className="text-white text-7xl font-black mb-6 tracking-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                        SELECT
                                    </span>
                                    <br />
                                    <span className="text-[#FF4D4D]">YOUR GAME</span>
                                </h1>
                                <p className="text-white/30 text-lg tracking-wider uppercase mb-12">Choose your adventure</p>
                                
                                {hoveredGame !== null && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="relative h-[400px] w-full"
                                    >
                                        <Image
                                            src={games[hoveredGame].image}
                                            alt={games[hoveredGame].name}
                                            fill
                                            className="object-cover"
                                            priority
                                            quality={90}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-8">
                                            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{games[hoveredGame].name}</h2>
                                            <button
                                                onClick={() => {
                                                    setSelectedGame(games[hoveredGame].scene);
                                                    setIsLoading(true);
                                                }}
                                                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 
                                                         transition-all duration-300 border border-white/10 
                                                         tracking-wider text-sm"
                                            >
                                                PLAY NOW
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>

                        {/* Right Side - Game Grid */}
                        <div className="w-1/2 h-full p-8 overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                {games.map((game, index) => (
                                    <motion.button
                                        key={game.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onMouseEnter={() => setHoveredGame(index)}
                                        onMouseLeave={() => setHoveredGame(null)}
                                        className="group relative overflow-hidden bg-white/5 
                                                 hover:bg-white/10 transition-all duration-300 
                                                 transform hover:scale-[1.02]
                                                 border border-white/10 aspect-square"
                                    >
                                        <Image
                                            src={game.image}
                                            alt={game.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 2}
                                            quality={75}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-4">
                                            <h2 className="text-xl font-bold text-white tracking-tight">{game.name}</h2>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {isLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="text-white text-2xl mb-8 tracking-wider">LOADING</div>
                                    <div className="text-white/30 text-sm space-y-3 tracking-wider">
                                        <p className="font-bold text-white/50">CONTROLS</p>
                                        <p>CLICK AND DRAG - ROTATE VIEW</p>
                                        <p>WASD - MOVEMENT</p>
                                        <p>↑↓ - CAMERA ANGLES</p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                        <Spline
                            scene={selectedGame}
                            onLoad={() => setIsLoading(false)}
                        />
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => {
                                setSelectedGame(null);
                                setIsLoading(false);
                            }}
                            className="absolute top-20 right-4 bg-white/5 hover:bg-white/10 text-white px-8 py-4 
                                     transition-all duration-300 z-50 border border-white/10 tracking-wider text-sm"
                        >
                            BACK TO MENU
                        </motion.button>
                    </>
                )}
            </main>
        </Curve>
    );
}
