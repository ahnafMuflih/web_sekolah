let counter =1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
},5000);

document.getElementById('question').addEventListener('submit', function(e){
    e.preventDefault();
    const questionInput = document.getElementById('questionInput');
    const questionText = questionInput.value;

    if(questionText.trim() !== "") {
        const questionList = document.getElementById('questionList');

        //Membuat Elemen baru
        const questionItem = document.createElement('div');
        questionItem.className = 'question';
        questionItem.textContent = questionText;

        //menambahkan pertanyaan ke rekapan
        questionList.appendChild(questionItem);

        //mengosongkan input
        questionInput.value = '';
    }
})