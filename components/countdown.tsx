'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type CountdownProps = {
  startIso: string;
  endIso: string;
};

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  showDays: boolean;
};

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function calculate(startTimestamp: number, endTimestamp: number): CountdownState {
  const now = Date.now();

  if (now < startTimestamp || now >= endTimestamp) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      showDays: false,
    };
  }

  const totalSeconds = Math.floor((endTimestamp - now) / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const totalHours = days * 24 + hours;

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    showDays: totalHours >= 24,
  };
}

export function Countdown({ startIso, endIso }: CountdownProps) {
  const startTimestamp = useMemo(() => new Date(startIso).getTime(), [startIso]);
  const endTimestamp = useMemo(() => new Date(endIso).getTime(), [endIso]);
  const [state, setState] = useState<CountdownState>(() => calculate(startTimestamp, endTimestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState(calculate(startTimestamp, endTimestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTimestamp, endTimestamp]);

  const boxClass =
    'inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-[#164859] bg-[repeating-linear-gradient(#164859_50%,#397387_200%)] px-1.5 text-base font-bold leading-none text-white sm:h-9 sm:min-w-9 sm:text-xl';

  return (
    <ul className="flex list-none items-center gap-1" aria-label="Odpocet do festivalu">
      <li className={cn(boxClass, !state.showDays && 'hidden')}>{state.days}</li>
      <li className={boxClass}>{state.hours}</li>
      <li className={boxClass}>{state.minutes}</li>
      <li className={boxClass}>{state.seconds}</li>
    </ul>
  );
}
