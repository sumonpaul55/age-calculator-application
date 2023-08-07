function output(event) {
  event.preventDefault();
  let dob = document.querySelector("#dob").value;
  let note = document.querySelector("#note");
  let date = new Date();
  let oldDateTimestamp = new Date(dob);
  // new
  let newYear = date.getFullYear();
  let newMonth = date.getMonth();
  let newDay = date.getDay();
  // old
  let oldYear = oldDateTimestamp.getFullYear();
  let oldMonth = oldDateTimestamp.getMonth();
  let oldDay = oldDateTimestamp.getDay();
  //calculation age

  let yearDiff = newYear - oldYear;
  let monthDiff = newMonth - oldMonth;
  let dayDiff = newDay - oldDay;

  if (monthDiff < 0) {
    monthDiff = monthDiff + 12;
    yearDiff -= 1;
  }
  if (dayDiff < 0) {
    dayDiff += 30;
    monthDiff -= 1;
  }

  let yourName = document.querySelector("#name").value;
  document.querySelector("#name-output").innerHTML = "Hello, " + yourName;
  document.querySelector("#age").innerHTML = "Your Age is " + yearDiff + " years " + monthDiff + " Months " + dayDiff + " Days ";
  let mynote = "";

  if (yearDiff < 10) {
    mynote = " হাই, বাবু । তুমার কাজ শুধু পড়াশুনা করা আর দুষ্টমি না করা ।😁";
  } else if (yearDiff >= 10 && yearDiff < 20) {
    mynote = "Now it's a high time to your study";
  } else if (yearDiff >= 20 && yearDiff < 25) {
    mynote = "কামাই খুজতে হবে, কামাই খুজা ছাড়া বিয়া নাই কপালে 😁";
  } else if (yearDiff <= 25 && yearDiff < 30) {
    mynote = "বিয়ের বয়স তো হইছে আর কত 😁";
  } else if (yearDiff >= 30 && yearDiff < 35) {
    mynote = "Your are going to bura😁. You should biya kora. // যদি বাকি থাকে";
  } else if (yearDiff >= 35 && yearDiff < 42) {
    mynote = "Your going to bura😁 dur dura.";
  } else if (yearDiff >= 42 && yearDiff <= 50) {
    mynote = "You are almost bura😁";
  } else {
    mynote = "😭🙏❤";
  }
  note.innerHTML = mynote;
}
