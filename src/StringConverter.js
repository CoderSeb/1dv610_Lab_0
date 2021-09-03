class StringConverter {
  #theName

  constructor() {
    this.#theName = ''
  }

  setName(theName) {
    this.#theName = theName
  }

  getName() {
    return this.#theName
  }

}