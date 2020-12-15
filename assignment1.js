// 5 Random Numbers between 0 and 1

function five_random () {
  for (let number = 0 ; number < 5; number++) {
    let random = Math.floor(Math.random()*2)
    console.log(random)
  }
}

five_random()

// Random numbers between 0 (inclusive) and 10 (exclusive)

function getRandomInt () {
  for (let number = 0 ; number < 100; number++) {
    let random = Math.floor(Math.random()*10)
    console.log(random)
  }
}

getRandomInt()

// IMPROVED Random numbers between start (inclusive) and end (inclusive)

function getRandomInt3 (start, end) {
  for (let number = start ; number < 100; number++) {
    let random = Math.floor(Math.random()*(end+1))
    if (random >= start && random <= end) {
      console.log (random)
    } else {}
  }
}

getRandomInt3(5,8)



