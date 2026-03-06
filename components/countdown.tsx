'use client';

import { useEffect, useMemo, useState } from 'react';

type CountdownProps = {
  targetIso: string;
};

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  done: boolean;
};

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function calculate(targetTimestamp: number): CountdownState {
  const diff = targetTimestamp - Date.now();

  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      done: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    done: false,
  };
}

export function Countdown({ targetIso }: CountdownProps) {
  const targetTimestamp = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [state, setState] = useState<CountdownState>(() => calculate(targetTimestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState(calculate(targetTimestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTimestamp]);

  if (state.done) {
    return (
      <div className="countdown" aria-label="Festival prebieha">
        <span>Festival prave prebieha</span>
      </div>
    );
  }

  return (
    <div className="countdown" aria-label="Odpocet do festivalu">
      <span>DD: {state.days}</span>
      <span>HH: {state.hours}</span>
      <span>MM: {state.minutes}</span>
      <span>SS: {state.seconds}</span>
    </div>
  );
}
