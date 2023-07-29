export interface ICourseData {
  id: number
  course_logo: string
  course_name: string
  category: string
  price: string
  start_lesson: string
  start_lesson_logo: string
  you_learn: string
  course_content: string
  images: string
  popularity: number
  bestsellerts: boolean
  new: boolean
  module: string
  createdAt: string
  updatedAt: string
}

export interface ICoursesData {
  count: number
  rows: ICourseData[]
}

export interface IQueryParams {
  offset: string
  firs: string
  partId: string
}
