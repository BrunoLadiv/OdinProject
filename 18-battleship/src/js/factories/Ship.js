export default class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length
    this.hits = Array(length).fill(false) 
  }

  hit(position) {
    if (position >= 0 && position < this.length) {
      this.hits[position] = true
    }
  }

  

  isSunk() {
    return this.hits.every((hit) => hit === true)
  }
}
