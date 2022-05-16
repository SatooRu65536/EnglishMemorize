const word = document.getElementById('word')
const input = document.getElementById('input')
const canswer = document.getElementById('canswer')
const 

const words = {a:"hello", b:"hi"}
let words_len = 0
let words_key = []
let words_val = []

for (let i in words){
  words_len++
  word_key.push(i)
  word_val.push(words[i])
}

function change(){
  i = Math.floor(Math.random*words.length)
  let w = words_key[i]
  word.innerText = w
}

function check(){
  input_w = input.value
  canswer.innerText = words_val[i]
}
