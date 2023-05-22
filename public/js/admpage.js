// фронтовий js статей

const formArticles = document.forms.addArticles;
const elArticlePreview = document.querySelector('.articlePreview');
const elAutorSelect = document.querySelector('[name=autorNameSelect]');

let arrArticles = [];
let i = 0;

let expAutors = JSON.parse(localStorage.getItem('arrAutors'));

const selector = () => {
    console.log(expAutors);
    const html = expAutors.map((item) => {
        const _html = `<option value=${i+1}>${item.asurname}</option>`;
        i = i+1;
        return _html;
    }).join('');

    elAutorSelect.innerHTML = html;
};

selector();

formArticles.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    
    const pname = formData.get('articleName');
    const ptext = formData.get('articleContent');

    //console.log(pname, ptext);

    arrArticles.push({pname, ptext});
    //console.log(arrArticles);
      
    const html = `<b>${elAutorSelect.value}</b> <p>${pname}</p> ${ptext}`;
        
    elArticlePreview.innerHTML = html;

})