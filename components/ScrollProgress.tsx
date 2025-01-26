import { useState, useEffect } from 'react';

export default function ScrollProgressCircle() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <svg
                className="w-8 h-8"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Círculo de fundo */}
                <circle
                    className="text-gray-300"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="16"
                />
                {/* Círculo de progresso */}
                <circle
                    className="text-blue-500"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    strokeDasharray="100"
                    strokeDashoffset={100 - scrollProgress}
                    cx="18"
                    cy="18"
                    r="16"
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
            </svg>
        </div>
    );
}
