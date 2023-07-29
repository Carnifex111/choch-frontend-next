export const jsonparse = (value: any) => {
  return value ? (JSON.parse(value) as string[]) : []
}
