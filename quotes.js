const q = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Believe you can and you're halfway there.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Act as if what you do makes a difference. It does.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Don’t wait. The time will never be just right.",
  "Dream big and dare to fail.",
  "You miss 100% of the shots you don’t take.",
  "Whether you think you can or you think you can’t, you’re right.",
  "I am not a product of my circumstances. I am a product of my decisions.",
  "It does not matter how slowly you go as long as you do not stop.",
  "If you’re going through hell, keep going.",
  "Strive not to be a success, but rather to be of value.",
  "Start where you are. Use what you have. Do what you can.",
  "Opportunities don't happen. You create them.",
  "The best way to predict your future is to create it."
];


// const button=document.querySelector('button');
// button.addEventListener('click',()=>{
//      const first= document.getElementById('quotes');
//      const index= Math.floor(Math.random()*q.length);
//      first.textContent=q[index];
// })

button=document.querySelector('button');
button.addEventListener('click',()=>{
  const first=document.getElementById('quotes');
  const index=Math.floor(Math.random()*q.length);
  first.textContent=q[index];
})