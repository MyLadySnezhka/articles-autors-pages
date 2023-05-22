// фронтовий js авторів

const formAutors = document.forms.addAutors;
//const btnSend = document.querySelector('[name=btnAdd]');
const listAutorLnk = document.querySelector('.autorsListul');

let arrAutors;
arrAutors = [];

formAutors.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    
    const asurname = formData.get('autorSurname');
    const aname = formData.get('autorName');
    arrAutors.push({asurname, aname});
      
    const html = arrAutors.map((item) => {
        const _html = `<li><b>${item.asurname}</b> ${item.aname} (Edit)</li>`;
        return _html;
    }).join('');
    
    listAutorLnk.innerHTML = html;
    console.log(arrAutors);

    localStorage.setItem('arrAutors',  JSON.stringify(arrAutors));
})


