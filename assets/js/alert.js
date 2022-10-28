    let fullName = document.getElementById('fuName');
    let emailAdd = document.getElementById('email');
    let clickedRadio = document.getElementsByClassName('radio');
    let textArea = document.getElementById('teArea');

    /**
     * Alert to stop accidentally closing of window while filling the form 
     */
    
    window.addEventListener("beforeunload", (event) => {

        if (fullName !== '' || emailAdd !== '' || clickedRadio !== '' || textArea !== '') {

            event.returnValue = 'You are about to leave the page without sending your message.\n Are you sure you want to continue?';

        } else {

            window.onbeforeunload = null;
        }
    });