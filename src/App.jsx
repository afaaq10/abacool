/**
 * Abacool
 *
 * @author    Afaaq Majeed
 * @link      https://github.com/afaaq10/abacool
 * @copyright 2025 Afaaq Majeed
 */

import React from 'react';
import { RotateCcw } from 'lucide-react';

const Abacus = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const columnCount = isMobile ? 7 : 13;

    const [columns, setColumns] = React.useState(
        Array(13).fill(null).map(() => ({
            upperActive: false,
            lowerCount: 0
        }))
    );

    const [animating, setAnimating] = React.useState({});

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleUpperBead = (colIndex) => {
        setAnimating(prev => ({ ...prev, [`upper-${colIndex}`]: true }));

        setColumns(prev => {
            const newCols = [...prev];
            newCols[colIndex] = {
                ...newCols[colIndex],
                upperActive: !newCols[colIndex].upperActive
            };
            return newCols;
        });

        setTimeout(() => {
            setAnimating(prev => ({ ...prev, [`upper-${colIndex}`]: false }));
        }, 300);
    };

    const toggleLowerBead = (colIndex, beadIndex) => {
        setAnimating(prev => ({ ...prev, [`lower-${colIndex}`]: true }));

        setColumns(prev => {
            const newCols = [...prev];
            const currentCount = newCols[colIndex].lowerCount;

            if (beadIndex < currentCount) {
                newCols[colIndex] = {
                    ...newCols[colIndex],
                    lowerCount: beadIndex
                };
            } else {
                newCols[colIndex] = {
                    ...newCols[colIndex],
                    lowerCount: beadIndex + 1
                };
            }
            return newCols;
        });

        setTimeout(() => {
            setAnimating(prev => ({ ...prev, [`lower-${colIndex}`]: false }));
        }, 300);
    };

    const calculateValue = () => {
        const visibleColumns = columns.slice(0, columnCount);
        return visibleColumns.map(col => {
            const upperValue = col.upperActive ? 5 : 0;
            const lowerValue = col.lowerCount;
            return upperValue + lowerValue;
        })
            .reverse()
            .reduce((acc, val, idx) => acc + val * Math.pow(10, idx), 0);
    };

    const reset = () => {
        setColumns(Array(13).fill(null).map(() => ({
            upperActive: false,
            lowerCount: 0
        })));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-4xl font-bold text-white">ABACOOL</h1>
            </div>
            <div className="max-w-full p-3 overflow-x-auto border-4 border-gray-700 rounded-lg shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 sm:p-6">
                <div className="relative min-w-fit">
                    <div className="absolute top-0 left-0 right-0 h-3 -mt-3 bg-gray-800 rounded-t-lg"></div>
                    <div className="relative flex gap-2 p-3 rounded sm:gap-3 bg-gradient-to-b from-slate-800 to-slate-900 sm:p-4" style={{ userSelect: 'none' }}>
                        <div className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded shadow-lg z-20" style={{ top: '38%', boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)' }}></div>

                        {columns.slice(0, columnCount).map((col, colIdx) => (
                            <div key={colIdx} className="relative flex flex-col items-center">
                                <div className="absolute top-0 bottom-0 w-1.5 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 left-1/2 -translate-x-1/2 rounded-full shadow-inner"></div>
                                <div
                                    className="relative flex flex-col items-center justify-start h-24 mb-2"
                                >
                                    <button
                                        onClick={() => toggleUpperBead(colIdx)}
                                        className="relative z-30 transition-all duration-300 ease-out border-2 rounded-full shadow-xl w-9 h-9 hover:scale-110 bg-gradient-to-br from-emerald-400 to-emerald-600 border-emerald-700"
                                        style={{
                                            marginTop: col.upperActive ? 'auto' : '8px',
                                            marginBottom: col.upperActive ? '8px' : 'auto',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                                            transform: animating[`upper-${colIdx}`] ? 'scale(0.95)' : 'scale(1)'
                                        }}
                                    />
                                </div>
                                <div className="h-1.5 my-2"></div>
                                <div className="relative flex flex-col items-center justify-start py-2 mt-2 h-52" >
                                    {[0, 1, 2, 3].map((beadIdx) => {
                                        const isActive = beadIdx < col.lowerCount;

                                        return (
                                            <button
                                                key={beadIdx}
                                                onClick={() => toggleLowerBead(colIdx, beadIdx)}
                                                className="relative z-30 transition-all duration-300 ease-out border-2 border-blue-700 rounded-full shadow-xl w-9 h-9 hover:scale-110 bg-gradient-to-br from-blue-400 to-blue-600"
                                                style={{
                                                    cursor: 'pointer',
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                                                    transform: animating[`lower-${colIdx}`] ? 'scale(0.95)' : 'scale(1)',
                                                    position: 'absolute',
                                                    top: isActive
                                                        ? `${8 + beadIdx * 40}px`
                                                        : `${30 + (beadIdx * 50)}px`
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-3 -mb-3 bg-gray-800 rounded-b-lg"></div>
                </div>
            </div>
            <div className="mt-8 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-xl p-6 min-w-[300px] border-2 border-purple-700">
                <div className="text-center">
                    <p className="mb-2 text-sm text-purple-300">Current Value</p>
                    <p className="font-mono text-5xl font-bold text-white">
                        {calculateValue().toLocaleString()}
                    </p>
                </div>
            </div>
            <button
                onClick={reset}
                className="flex items-center gap-2 px-6 py-3 mt-6 text-white transition-all duration-200 border border-purple-500 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:scale-105"
            >
                <RotateCcw size={20} />
                Reset
            </button>
            <div className="max-w-md p-4 mt-8 text-center border border-gray-700 rounded-lg bg-gray-800/80">
                <p className="text-sm text-gray-300">
                    <span className="font-semibold text-white">How to use:</span> Touch any bead to move it to the bar. Touch an active bead to move it back.
                </p>
            </div>
        </div>
    );
};

export default Abacus;
