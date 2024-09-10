(() => {
  type UserID = string | number
  let userId: UserID

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes
  shirtSize = 'M'
  shirtSize = 'dfgdsag'

  function information(userId: UserID, shirtSize: Sizes) {

  }

  information(231432, 'M')

  information(324, 'fdgdfsg')
})()

