chrome.tabs.query({active:true}, function(tabs){
    var qrcode = new QRCode("qr-icon", {
        text:tabs[0].url,
        width:256,
        height:256,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    });
});