const coin = {
  state: 0,
  //state1: 1,
  flip: function () {
    return this.state = Math.floor(Math.random() * 2)

    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
  },
  toString: function () {
    if (this.state === 0) {
      return "Heads"
    } else if (this.state === 1) {
      return "Tails"
    }

    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
  },
  toHTML: function () {
    const image = document.createElement("img");
    if (this.state === 0) {
      image.src = "images/heads.png"
    } else if(this.state === 1){
      image.src = "images/tails.png"
    }
    // document.body.append(image)
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    return image;
  },
};

function display20Flips() {
  const results = [];
  for (let fC = 0; fC < 20; fC++) {
    coin.flip()
    results.push(coin.toString())
    
  }
//console.log(results)
document.body.append(results)
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string or the page.  After your loop completes, return an array with the result of each flip.
}

function display20Images() {
  const results = [];
  for (let i = 0; i < 20; i++) {
    coin.flip()
    const image = coin.toHTML()
    document.body.append(image)
    results.push(image)
  
  }
//console.log(image)
return results
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}