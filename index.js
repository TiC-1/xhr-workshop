var getGif = function(textForm) {
  var xhr = new XMLHttpRequest();
  var url = "http://api.giphy.com/v1/gifs/search?q=" + textForm + "&api_key=dc6zaTOxFJmzC";
  console.log(url);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var giphyObj = JSON.parse(xhr.responseText);
      console.log(giphyObj);
      var newImage;
      var link = "";
      var gallery;
      var newGallery;
      document.getElementById("gallery").value = "";
      for (var i = 1; i < giphyObj.data.length; i++) {
        //var gifDrop = document.querySelector(".gif");
        link = giphyObj.data[i].images.downsized_medium.url;
        newImage = document.createElement("img");
        newImage.src = link;
        console.log(newImage);
        newGallery = document.getElementById("search-results").appendChild(newImage);
      }
      document.getElementById("gallery").replaceChild(gallery, newGallery);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var textForm = event.target.querySelector("input").value;
  console.log(textForm);
  getGif(textForm);
  event.target.querySelector("input").value = "";
});