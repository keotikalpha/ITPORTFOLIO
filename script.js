// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var certificationItems = document.getElementsByClassName("certification-item");

for (var i = 0; i < certificationItems.length; i++) {
    certificationItems[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.getElementsByTagName("img")[0].src;
        captionText.innerHTML = this.getElementsByTagName("p")[0].innerHTML;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal image, close it
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
