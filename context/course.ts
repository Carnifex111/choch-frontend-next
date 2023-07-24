import { ICoursesData } from '@/types/course'
import { createDomain } from 'effector'

const course = createDomain()

export const setCourse = course.createEvent<ICoursesData>()

export const $courses = course
  .createStore<ICoursesData>({} as ICoursesData)
  .on(setCourse, (_, item) => item)
