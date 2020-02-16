function validateForm() {
    var type = document.getElementById("eventTy").value;
    var title = document.getElementById("eventTi").value;
    var start = document.getElementById("sdate").value;
    var end = document.getElementById("edate").value;
    var post = document.getElementById("pdate").value;
    
    if (type == "" || type == "choose") {
        alert ("Event Type must be chosen.");
        return false;
    } else if (title == "") {
        alert ("Event Title must be given.");
        return false;
    } else if (start == "") {
        alert ("No Start Date found.");
        return false;
    } else if (end == "") {
        alert ("No End Date found.");
        return false;
    }else if (post == "") {
        alert ("No Date for Posting the Event was found.");
        return false;
    } else {
        submit();
    }
}

function submit() {
    alert ("Event Created");
    document.getElementsByClassName("form").submit();
}

function reset() {
    alert ("Page Reset");
    document.getElementsByClassName("form").reset();
}