console.log("Hello");
const bodyBody = document.getElementById("bodyelement");
console.log(bodyBody);
const form = document.querySelector(".form-container");
console.log(form);
const saveSubscriber = () => {
  const newSubscriber = {
    email: document.getElementById("emailaddress").value,
    checkEmail: function () {
      var emaiL = document.getElementById("emailaddress").value;
      const emailArray = emaiL.split("");
      console.log(emailArray);
      const validEmail = emailArray.find((element) => element == "@");
      if (validEmail) {
        document.getElementById("emailaddress").classList.remove("is-invalid");

        document.getElementById("mainpart").classList.add("main-container");
        bodyBody.insertAdjacentHTML(
          "beforeend",
          `<main class="container body-container" id="goneSoon">
        <div class="image_container mb-5 mt-5">
          <img src="assets/images/icon-success.svg" alt="" />
        </div>
        <div class="success_description">
          <h1 class="hero_title fw-bold">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span class="fw-bold">${newSubscriber.email}</span>. Please
            open it and click the button inside to confirm your subscription
          </p>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br class="breakpoint">
        <br class="breakpoint">
        <br class="breakpoint">
        <br class="breakpoint">
        <br class="breakpoint">
        <footer>
        <button class="btn btn-primary fw-bold" onclick="dismissPage()">Dismiss Message</button>
        </footer>
      </main>`
        );
        console.log("@ found");
      } else {
        document.getElementById("emailaddress").classList.add("is-invalid");
        form.insertAdjacentHTML(
          "beforeend",
          `<p class="invalid" style=" color: red">Valid email required</p>`
        );
        console.log("@ not found");
      }
    },
  };
  newSubscriber.checkEmail(newSubscriber.email);
  console.log(newSubscriber.email);
};

const dismissPage = () => {
  document.getElementById("goneSoon").classList.add("dismiss");
  document.getElementById("mainpart").classList.remove("main-container");
  document.getElementById("goneSoon").remove();
};
