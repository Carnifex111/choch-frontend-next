import { getDataWatchCourse } from '@/app/api/courses'
import { createDomain } from 'effector'
import { IWatchCourse } from '../types/watchCourse'

const watchCourse = createDomain()

export const setWatchCourse = watchCourse.createEvent<IWatchCourse>()

export const $watchCourse = watchCourse
  .createStore<IWatchCourse>({} as IWatchCourse)
  .on(setWatchCourse, (_, part) => part)

getDataWatchCourse.done.watch(({ result }) => {
  if (result) {
    setWatchCourse(result)
  }
})
