import { getUserCoursesFx } from '@/app/api/courses'
import { createDomain } from 'effector'

const userCourse = createDomain()

export const setUserCourse = userCourse.createEvent<any>()

export const $userCourses = userCourse
  .createStore<any>({} as any)
  .on(getUserCoursesFx.doneData, (_, courses) => courses)
