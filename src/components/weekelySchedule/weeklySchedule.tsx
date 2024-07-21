import s from './weeklySchedule.module.scss'

import { DialogWindow } from '../dialogWindow'

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

const dayOfWeekLabels: Record<string, string> = {
  '0': 'Пн',
  '1': 'Вт',
  '2': 'Ср',
  '3': 'Чт',
  '4': 'Пт',
  '5': 'Сб',
  '6': 'Вс',
}
const dayOfWeekLabelsModal: Record<string, string> = {
  '0': 'Понедельник',
  '1': 'Вторник',
  '2': 'Среду',
  '3': 'Четверг',
  '4': 'Пятницу',
  '5': 'Субботу',
  '6': 'Воскресенье',
}

export const WeeklySchedule = (props: AvitoScheduleProps) => {
  const { timeIntervals, updateTimeIntervals } = props

  return (
    <div className={s.wrapper}>
      {Object.keys(timeIntervals).map((dayOfWeek, index) => {
        return (
          <div className={s.schedule} key={index}>
            <DialogWindow title={`Расписание работы на «${dayOfWeekLabelsModal[dayOfWeek]}»`}>
              <div></div>
            </DialogWindow>
          </div>
        )
      })}
    </div>
  )
}
