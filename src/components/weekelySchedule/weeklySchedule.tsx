import s from './weeklySchedule.module.scss'
export type TimeIntervalItemType = {
  end: string
  is_working: boolean
  next_day_end: boolean
  start: string
}

export type TimeIntervals = {
  [key: string]: TimeIntervalItemType
}

type AvitoScheduleProps = {
  timeIntervals: TimeIntervals
  updateTimeIntervals: (timeInterval: TimeIntervals) => void
}

export const WeeklySchedule = (props: AvitoScheduleProps) => {
  const { timeIntervals, updateTimeIntervals } = props

  return (
    <div className={s.wrapper}>
      {Object.keys(timeIntervals).map((dayOfWeek, index) => {
        return <div className={s.schedule} key={index}></div>
      })}
    </div>
  )
}
