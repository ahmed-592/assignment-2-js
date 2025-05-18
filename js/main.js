var pargraf = [
  '<p>"You miss 100% of the shots you dont take."</p><p>--Wayne Gretzy</p>',
  '<p>"It is not what happens to you, but how you react to it that matters."</p><p>--Epictetus</p>',
  '<p>"Resentment is like drinking poison and waiting for your enemies to die."</p><p>--Nelson Mandela</p>',
  '<p>"The best revenge is massive success."</p><p>--Frank Sinatra</p>',
  '<p>"Do not take life too seriously. You will not get out alive."</p><p>--Elbert Hubbard</p>',
];

var count = 0;

document.getElementById("test").addEventListener("click", function () {
  if (count < pargraf.length) {
    document.getElementById("demo").innerHTML = pargraf[count];
    count++;
  } else {
    count = 0;
  }
});
