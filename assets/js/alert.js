    let fullName = document.getElementById('fuName');
    let emailAdd = document.getElementById('email');
    let clickedRadio = document.getElementsByClassName('radio');
    let textArea = document.getElementById('teArea');
    /**
     * Alert to stop accidentally closing of window while filling the form 
     */
    window.addEventListener("beforeunload", () => {
        let sign = prompt("What's your sign?");
        // function alert() {
        //     if (fullName.value === "" ) {

        //         alert('You are about to leave the page without sending your message.\n Are you sure you want to continue?');

        //     }
        // };

        // alert();
        sign = window.prompt('Are you feeling lucky');
    });