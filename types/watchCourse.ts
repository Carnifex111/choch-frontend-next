export interface Lesson {
  id: number
  title: string
  content: string[]
  url: string
  moduleId: number
  createdAt: string
  updatedAt: string
}

export interface Module {
  id: number
  title: string
  courseId: number
  createdAt: string
  updatedAt: string
  lessons: Lesson[]
}

export interface IWatchCourse {
  id: number
  currentLesson?: number
  course_logo: string[]
  course_name: string
  category: string
  price: string
  start_lesson: string
  start_lesson_logo: string
  you_learn: string
  course_content: string[]
  images: string
  popularity: number
  bestsellerts: boolean
  new: boolean
  createdAt: string
  updatedAt: string
  modules: Module[]
}
