/*
## Badger's Revenge

Fed up with students clapping him after ever warmup, Badger devises a cunning plan to put an end to it - or at least _look like_ he's putting an end to it. You see, Badger secretly enjoys the adulation - mocking though it may be - so he doesn't want the clapping to stop altogether.

The names of those who are witnessed clapping Badger _more than twice_ in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create an object (`revengeOfBadger`) to do this, but if you can get it working using standalone functions, that's cool.

Your program should:

- Track how many times each student in the class has clapped this week;
- Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
- Pick a random student to deliver the solution to Friday's warmup.
*/

var fridayDraw = [];

var wdi16 = {
  addStudent: function(name) {
    this.students = this.students || [];
    this.students.push({
      "name": name,
      "claps": 0
    })
  },
  caughtClap: function(name) {
    for (var i = 0; i<this.students.length; i++) {
      if (this.students[i]["name"]===name) {
        this.students[i]["claps"]++;
      }
    }
  },
  clapMoreThanTwice: function() {
    for (var i =0; i<this.students.length; i++) {
      if (this.students[i]["claps"]>2) {
        fridayDraw.push(this.students[i]);
      }
    }
  },
  randomDraw: function() {
    var randomPick = fridayDraw[Math.floor(Math.random()*fridayDraw.length)];
    console.log(randomPick["name"]+" who clapped "+randomPick["claps"]+" times this week.");
  }
};

wdi16.addStudent("howie");
wdi16.addStudent("tom");
wdi16.addStudent("lucas");
wdi16.addStudent("pri");
wdi16.addStudent("jon");
wdi16.addStudent("steve");
wdi16.addStudent("arpan");
wdi16.addStudent("yangmei");
wdi16.addStudent("pete");
wdi16.addStudent("andrew");
wdi16.addStudent("samit");

wdi16.caughtClap("howie");
wdi16.caughtClap("howie");
wdi16.caughtClap("howie");
wdi16.caughtClap("tom");
wdi16.caughtClap("tom");
wdi16.caughtClap("tom");
wdi16.caughtClap("pri");
wdi16.caughtClap("pri");
wdi16.caughtClap("pri");

wdi16.clapMoreThanTwice();
wdi16.randomDraw();


//## Badger solution

var revengeOfBadger = {
  record: {
    Andrew: 0,
    Arpan: 0,
    Jong: 0,
    Howie: 0,
    Lucas: 0,
    Peter: 0,
    Priyanka: 0,
    Samit: 0,
    Stephen: 0,
    Tomas: 0,
    Yangmei: 0
  },

  getCandidates: function() {
    for (var prop in this.record) {
      if (this.record[prop] > 2) {
        this.candidates.push(prop);
      }
    }
  },

  candidates: [],

  draw: function() {
    this.candidates = [];
    var winner;
    this.getCandidates();
    if (this.candidates.length === 0) {
      winner = "Badger";
    } else {
      var numberOfCandidates = this.candidates.length;
      var random = Math.floor(Math.random()*numberOfCandidates);
      winner = this.candidates[random];
      console.log("Lucky "+ winner);
    }
  }
};
