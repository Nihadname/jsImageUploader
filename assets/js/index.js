var filesWhole = document.querySelector(".files");
var imageMain = document.querySelector("#imageMain");
let prices = document.querySelector(".prices");
let pricesInput = document.querySelector(".pricesInput");
let description = document.querySelector(".description");
let descriptionInput = document.querySelector(".descriptionInput");
let SendingFinal = document.querySelector(".SendingFinal");
let fileDataURL = '';

filesWhole.onchange = function () {
    const files = filesWhole.files;
    if (files.length) {
        Array.from(files).forEach(file => {
            var reader = new FileReader();
            reader.onload = function (e) {
                fileDataURL = e.target.result;
                imageMain.src = e.target.result;
            }
            reader.readAsDataURL(file);
        })

    }
}

pricesInput.addEventListener("keyup", function () {
    if (this.value == "") {
        prices.innerText = "$";
    } else {
        prices.innerText = "$" + this.value;
    }
    descriptionInput.addEventListener("keyup", function () {
        description.innerText = this.value;
    })
    SendingFinal.addEventListener("click", function () {
        let newOne = document.querySelector(".newOne");
        newOne.innerHTML += ` <div class="card" style="width: 18rem;">
   <img src="${fileDataURL}" class="card-img-top" id="imageMain" alt="...">
   <div class="card-body">
     <h5 class="card-title prices">${prices.textContent}</h5>
     <p class="card-text description">${description.textContent}</p>
   </div>
 </div>`
    })
})

