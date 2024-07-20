import { useState } from 'react'

export type TimeIntervalItemType = {
  end: string
  is_working: boolean
  next_day_end: boolean
  start: string
}
export type TimeIntervals = {
  [key: string]: TimeIntervalItemType
}

const weeklySchedule = {
  '0': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
  '1': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
  '2': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
  '3': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
  '4': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
  '5': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
  '6': {
    end: '23:59',
    is_working: false,
    next_day_end: true,
    start: '00:00',
  },
} as TimeIntervals

export function App() {
  const [timeIntervals, setTimeIntervals] = useState<TimeIntervals>(weeklySchedule)
  const updateTimeInterval = (time: TimeIntervals) => {
    setTimeIntervals(time)
  }

  return <div>Hello</div>
}
