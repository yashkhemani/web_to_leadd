let captchaChecked = false;

function beforeSubmit(event) {
  if (captchaChecked) {
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate"); //string -> date
    //   en_US
    console.log(outputDate.value, inputDate.value);

    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formatedDate;
  } else {
    alert("Please verify that you are not a robot.");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
