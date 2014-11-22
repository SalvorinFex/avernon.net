/**
 * Created with JetBrains WebStorm.
 * User: kroesener
 * Date: 12/26/12
 * Time: 7:38 PM
 * To change this template use File | Settings | File Templates.
 */
var Convert = {
    initialize: function() {
        var spans = document.getElementsByTagName("span");
        for (var i = 0; i < spans.length; i++) {
            if(spans[i].getAttribute("class") == "address") {
                string = spans[i].childNodes[0].nodeValue;
                email = string.split("_")[0] + "@" + string.split("_")[2];
                spans[i].innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
            }
        }
    }
}
window.onload = Convert.initialize;
