import * as _ from './tier'

declare namespace App {
  export interface Tierlist extends _.Tierlist {}
  export interface Items extends _.Items {}

  export interface Tier extends _.Tier {}
  export interface Item extends _.Item {}
}

export = App
export as namespace App
