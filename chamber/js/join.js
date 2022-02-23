function hiddenDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var time = today.toLocaleTimeString('en-US', { hour12: false });

    if (dd < 10) {
        dd = '0' + dd
    };

    if (mm < 10) {
        mm = '0' + mm
    };

    today = mm + '/' + dd + '/' + yyyy + ' ' + time;
    console.log(today);
    document.getElementById("date").value = today;
}

hiddenDate();