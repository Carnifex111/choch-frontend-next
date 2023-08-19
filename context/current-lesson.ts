import { createStore, createEvent } from 'effector'

export const setSelectedLesson = createEvent<any | null>()

export const $selectedLesson = createStore<any | null>(null)

$selectedLesson.on(setSelectedLesson, (_, lesson) => lesson)
