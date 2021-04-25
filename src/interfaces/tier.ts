export type Tier = {
  id: string
  items: Items
}

export type Item = {
  id: string
  url: string
}

export type Tierlist = Array<Tier>
export type Items = Array<Item>
