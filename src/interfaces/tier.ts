export type Tier = {
  id: string
  items: Items
}

export type Item = {
  id: string
  url: URL
}

export type Tierlist = Set<Tier>
export type Items = Set<Item>
