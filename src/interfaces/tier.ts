export type Tier = {
  id: string
  items: Items
}

export type Item = {
  id: string
  url: URL
}

export type Tierlist = Tier[]
export type Items = Array<Item>
