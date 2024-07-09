export type TypeService = 'bridges' | 'swaps' | 'landings' | 'mints'

export interface IProtocol {
  icon: string
  title: string
}

export interface IServices {
  services: Partial<Record<TypeService, IProtocolService[]>>
}

export interface IProtocolServices extends IProtocol, IServices {}

export interface IProtocolService {
  name: string
  icon: string
  link: string
}
