function gup(name, url) {
    //function gup(url) {
    //var url = location.href;
    //var url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}


window.onload = function () {
    if(window.location.href.indexOf("code") > -1) {
    var code2 = gup('code', location.href);
    var el2 = document.getElementById('codeboxtoken');
    el2.value = code2;
  }else{
    var code = gup('access_token', location.href.replace("#", "?"));
    var el = document.getElementById('codeboxtoken');
    el.value = code;
    }
};
//# sourceMappingURL=app.js.map