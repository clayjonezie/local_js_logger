var llog = function(info) {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/log",
        dataType: "json",
        data: {
            info: JSON.stringify(info)
        }
    });
};