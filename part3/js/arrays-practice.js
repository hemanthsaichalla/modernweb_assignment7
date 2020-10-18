//STEP 1
var myFavMovies = ['Accountant', 'Rundown', 'Legend', 'Alone', 'Starboy'];
window.console.log(myFavMovies[1]);

//STEP 2
var movies = new Array(5);
for(var i = 0; i < 5; i++) {
  movies[i] = 'Accountant';
}
window.console.log(movies[0]);

//STEP 3
movies.splice(2, 0, 'Rundown');
window.console.log(movies.length);

//STEP 4
movies = [];
for(var i = 0; i < 5; i++) {
  movies[i] = 'Accountant';
}
delete movies[0];
window.console.log(movies);

//STEP 5
movies = [];
for(var i = 0; i < 7; i++) {
  movies[i] = 'Accountant';
}

for(var i = 0; i < movies.length; i++) {
  window.console.log(movies[i]);
}

//STEP 6
for(var index in movies) {
  if(movies.hasOwnProperty(index)) {
    window.console.log(movies[index]);
  }
}

//STEP 7
window.console.log(movies.sort());

//STEP 8
var leastFavMovies = ['Accountant', 'Rundown', 'Legend'];
window.console.log("Movies I like:");
window.console.log("");
myFavMovies.forEach(function(movie) {
  window.console.log(movie);
});
window.console.log("...");
window.console.log("");
window.console.log("Movies I regret watching:");
window.console.log("");
leastFavMovies.forEach(function(movie) {
  window.console.log(movie);
});
window.console.log("...");

//STEP 9
var joinedMovies = myFavMovies.concat(leastFavMovies);
window.console.log(joinedMovies.sort().reverse());

//STEP 10
var lastElement = joinedMovies.pop();
window.console.log(lastElement);