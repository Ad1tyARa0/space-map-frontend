export type SatelliteType = {
  name: string
  noradCatId: string
  intlDes: string | null
  launchDate: string | null
  decayDate: string | null
  objectType: string | null
  orbitCode: string | null
  countryCode: string | null
  imageUrl: string | undefined
}

export type SatellitePaginatedType = {
  total: number
  totalPages: number
  currentPage: number
  satellites: SatelliteType[]
}
