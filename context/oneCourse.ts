import { ICoursesData, ICourseData } from '@/types/course'
import { createDomain } from 'effector'

const oneCourse = createDomain()

export const setOneCourse = oneCourse.createEvent<any>()

export const $oneCourse = oneCourse
  .createStore<ICourseData>({} as ICourseData)
  .on(setOneCourse, (_, part) => part)
