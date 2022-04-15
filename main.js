const icon = document.querySelector('.ic');


icon.addEventListener('click', function(){
    const links = document.querySelector('.links')
    links.classList.toggle('change-links')
});


const btn = document.getElementById('btn')

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

btn.addEventListener('click', () =>  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
}));

const main = document.getElementById('page');

function slide() {
    main.classList.add('show')
}

document.body.onload = setTimeout(slide, 1000)

document.body.onload = setTimeout(showPage, 1000);
 

const showContact = document.querySelector('.form');
function showPage() {
    showContact.classList.add('show-form')
};


/**Start of Email JS  */
(function () {
    emailjs.init("MWzXJKDDEzAjLrrPt");
  })();

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const templateParams = {
       from_name : document.getElementById('name-info').value,
       email_id : document.getElementById('email-info').value,
       message : document.getElementById('sms').value
    }

    emailjs.send('service_vwdkg3s', 'template_yrfposg', templateParams).then(() => {
         alert('Success 200')
       })
});

/**End of Email JS */