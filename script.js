function beforeSubmit() {
  let outputDate = document.querySelector(".outputDate");
  let inputDate = document.querySelector(".inputDate"); //string -> date
  //   en_US
  console.log(outputDate.value, inputDate.value);

  let formatedDate = new Date(inputDate.value).toLocaleDateString("en-US");
  outputDate.value = formatedDate;
}
