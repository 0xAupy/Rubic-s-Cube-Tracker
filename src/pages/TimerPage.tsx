import React, { useState, useEffect, useRef, useCallback } from 'react';
import TimerDisplay from '../components/Timer/TimerDisplay';
import ScrambleDisplay from '../components/Timer/ScrambleDisplay';
import SolvesList from '../components/Timer/SolvesList';
import StatsCard from '../components/Timer/StatsCard';
import { Solve } from '../types';
import { solves as initialSolves } from '../data/mockData';
import { generateScramble } from '../data/mockData';
import { calculateAo5, calculateAo12 } from '../utils/calculateAverages';

const TimerPage: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPreparing, setIsPreparing] = useState<boolean>(false);
  const [solves, setSolves] = useState<Solve[]>(initialSolves);
  const [scramble, setScramble] = useState<string>(generateScramble());

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const prepTimerRef = useRef<number | null>(null);

  const ao5 = calculateAo5(solves);
  const ao12 = calculateAo12(solves);
  const bestTime = solves.length > 0 
    ? Math.min(...solves.filter(s => !s.dnf).map(s => s.time))
    : 0;

  const generateNewScramble = useCallback(() => {
    setScramble(generateScramble());
  }, []);

  const startTimer = useCallback(() => {
    if (isRunning) return;

    setIsRunning(true);
    startTimeRef.current = Date.now(); // Set start time when starting the timer

    const updateTimer = () => {
      if (startTimeRef.current) {
        setTime(Date.now() - startTimeRef.current); // Continuously update the time
        requestAnimationFrame(updateTimer); // Request the next animation frame
      }
    };

    requestAnimationFrame(updateTimer); // Start the timer updates
  }, [isRunning]);

  const stopTimer = useCallback(() => {
    if (!isRunning) return;

    setIsRunning(false);
    const finalTime = startTimeRef.current ? Date.now() - startTimeRef.current : 0;

    // Reset startTimeRef to null to ensure the timer does not continue next time
    startTimeRef.current = null;

    // Add new solve
    const newSolve: Solve = {
      id: `solve-${Date.now()}`,
      userId: '1', // Current user ID
      time: finalTime,
      date: new Date(),
      scramble: scramble,
      dnf: false,
      plusTwo: false
    };

    setSolves(prevSolves => [newSolve, ...prevSolves]);
    generateNewScramble();
    setTime(0); // Reset the time to 0 after the stop
  }, [isRunning, scramble, generateNewScramble]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space' && !isRunning && !isPreparing) {
      e.preventDefault();
      setIsPreparing(true);

      prepTimerRef.current = window.setTimeout(() => {
        setIsPreparing(true);
      }, 300);
    }
  }, [isRunning, isPreparing]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault();

      if (prepTimerRef.current) {
        clearTimeout(prepTimerRef.current);
        prepTimerRef.current = null;
      }

      if (isPreparing) {
        setIsPreparing(false);
        startTimer();
      } else if (isRunning) {
        stopTimer();
      }
    }
  }, [isPreparing, isRunning, startTimer, stopTimer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      if (prepTimerRef.current) {
        clearTimeout(prepTimerRef.current);
      }
    };
  }, [handleKeyDown, handleKeyUp]);

  const handleDeleteSolve = (id: string) => {
    setSolves(prevSolves => prevSolves.filter(solve => solve.id !== id));
  };

  const handleToggleDNF = (id: string) => {
    setSolves(prevSolves => 
      prevSolves.map(solve => 
        solve.id === id ? { ...solve, dnf: !solve.dnf } : solve
      )
    );
  };

  const handleTogglePlusTwo = (id: string) => {
    setSolves(prevSolves => 
      prevSolves.map(solve => 
        solve.id === id ? { ...solve, plusTwo: !solve.plusTwo } : solve
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cube Timer</h1>
      
      <ScrambleDisplay 
        scramble={scramble} 
        onNewScramble={generateNewScramble} 
      />
      
      <div className="mb-12 flex items-center justify-center">
        <TimerDisplay 
          time={time} 
          isRunning={isRunning} 
          isPreparing={isPreparing} 
        />
      </div>
      
      <StatsCard 
        ao5={ao5} 
        ao12={ao12} 
        bestTime={bestTime} 
      />
      
      <SolvesList 
        solves={solves} 
        onDeleteSolve={handleDeleteSolve}
        onToggleDNF={handleToggleDNF}
        onTogglePlusTwo={handleTogglePlusTwo}
      />
    </div>
  );
};

export default TimerPage;
