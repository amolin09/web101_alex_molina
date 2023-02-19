const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, id) => {
  placeForResults.append(`${id} : ${value}`)
  placeForResults.append(document.createElement("br"))
})