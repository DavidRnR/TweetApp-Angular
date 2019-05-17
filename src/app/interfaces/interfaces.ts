export interface Tweet {
  id?: number,
  tweet: string,
  ranking?: number,
  edit: boolean,
  date?: Date,
  isRemoved: boolean
}
