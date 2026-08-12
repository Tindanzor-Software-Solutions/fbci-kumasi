export type Ministry = {
  featured: boolean
  id: string
  name: string
  description: string
  image: string
  schedule: string[] | null
  cta: [/*title */ string, /*url*/ string][] | null
}

export interface IMinistryService {
  find(filters?: { featured?: boolean }): Ministry[]
  findById(id: string): Ministry | null
}
