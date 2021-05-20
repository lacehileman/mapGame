var reply_click;

function startGame() {


  var fiftyStates = {
    "states": [
      ["ca-path", ['Nickname: Golden State', 'Capital: Sacramento ', 'Home of the Giant Redwoods']],
      ["ga-path", ['Nickname: Peach', 'Capital: Atlanta', 'Home of the Telfair Museum of Art']],
      ["mo-path", ['Nickname: Show Me', 'Capital: Jefferson', 'Home to the Arch']],
      ["nj-path", ['Nickname: Garden', 'Capital: Trenton', 'State bird Eastern Goldfinch']],
      ["tx-path", ['Nickname: Lone Star', 'Capital: Austin', 'State flower Bluebonnet']],
      ["al-path", ['Nickname: Heart of Dixie', 'Capital: Montgomery', 'Motto: We Dare Defend Out Rights']]
    ]
  };

  var getItem = [];
  for (var i = 0, len = fiftyStates.states.length; i < len; i++) {
    getItem.push(fiftyStates.states[i]);
  }


  function randomState(arr) {
    const myIndex = Math.floor(Math.random() * arr.length);
    const myItem = arr[myIndex];
    return myItem;
  }
  var pickedState = randomState(getItem);
  //console.log(pickedState)

  let getRandomState = pickedState[0]; 
  //console.log(getRandomState)

  let getRandomFacts = pickedState[1];

  for (var i = 0; i < getRandomFacts.length; i++) {
  //console.log(getRandomFacts[i])
 }

  var clues = document.getElementById("t");
  clues.innerHTML = getRandomFacts.join("<br />");

//var x = document.getElementsByClassName("state")[0].id;
//console.log(x)

    reply_click = function() {
      //console.log(event.srcElement.id)
      if (getRandomState == event.srcElement.id){
        //console.log("match")
        alert("Great Job Agent!\n To Play again click New Clues.")
      }else{
        console.log("no match")
      }
    }


  }
  startGame();

  /*
TODO add fail rate to clicks
  */
