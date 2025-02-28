const submitButton = document.querySelector("#quotations-submit")
const author = document.querySelector('fname')
const text = document.querySelector('citations-text');

submitButton.addEventListener('submit',(event) => {
const text = document.querySelector('citations-text').value;
const author = document.querySelector('fname').value;
console.log(text,author)
}); 