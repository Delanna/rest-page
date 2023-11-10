export default function home(){

  const contentDiv = document.getElementById("content");
  contentDiv.classList.add("home");
  contentDiv.innerHTML = `
  <div class="container">
    <img src="./imgs/notes.png" alt="a cute notepad illustration">
    <div class="card">
      <h2>Description</h2>
      <p>We sell ver cute food meant to be looked at and photographed. Note that if you enter this restaurant starving you will be leaving famished, but your instagram will be one picture cuter!
      </p>
    </div>
</div>
<div class="container">
  <img src="imgs/sand-clock.png" alt="a cute hourglass illustration">
  <div class="card">
    <h2>Hours</h2>
    <h4>Monday - Friday</h4>
    <p>9:00 am - 5:00 pm</p>
    <h3>Saturday</h3>
    <p>9:00 am - 10:00 pm</p>
    <h4>Sunday</h4>
    <p>Closed</p>
  </div>
</div>
<div class="container">
  <img src="imgs/beach-bar.png" alt="a cute beach bar illustration">
  <div class="card">
    <h2>Location</h2>
    <h4>Arcadia Glade</h4>
    <p>101 Snack Snapshot Street</p><br>
    <p>Sugar Syntax City</p><br>
    <p>JS 40410</p>
  </div>`
};