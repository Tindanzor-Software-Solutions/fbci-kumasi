import type { IMinistryService, Ministry } from "./ministries.contract.types"
import { MINISTRIES } from "./ministries.data"

class MinistryService implements IMinistryService {
  private ministries: Ministry[] = MINISTRIES

  findById(id: string): Ministry | null {
    return this.ministries.find((ministry) => ministry.id === id) ?? null
  }

  find(filters?: { featured?: boolean }) {
    return this.ministries.filter((ministry) => {
      if (filters?.featured) {
        return ministry.featured
      }
      return true
    })
  }
}

export const ministryService = new MinistryService()
