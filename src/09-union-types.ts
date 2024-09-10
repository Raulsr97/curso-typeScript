(() => {
  let userId: string | number
  userId = 2133
  userId = 'fdefds'
  // userId = {}

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      myText.toString()
    }
  }

  greeting('Asdas')
  greeting(213213)
  // greeting(true)
})()
