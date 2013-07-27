var llog = function(info) {
    var d = new Date();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/log",
        dataType: "json",
        data: {
            info: info
        }
    });
}