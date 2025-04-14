function showAlert(name, url) {
    var x = window.confirm("Wanna know more about " + name + "?");
    if (x) {
        window.alert("Great! Taking you to their page!");
        window.open(url, '_blank');
    } else {
        window.alert("Meh not cool :<");
    }
}
