export type TypeService = 'bridges' | 'swaps' | 'landings' | 'mints'

export interface IProtocolServices {
  icon: string
  title: string
  services: Partial<Record<TypeService, IProtocolService[]>>
}

export interface IProtocolService {
  name: string
  icon: string
  link: string
}
