const artist = document.querySelector("#artist");
const song = document.querySelector("#song");
const btn = document.querySelector("button");
const main = document.querySelector("main");

const url = `https://lyric-finder-application.herokuapp.com`;

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const artistVal = artist.value;
  const songVal = song.value;

  if (artistVal === "" || songVal === "") return;

  const data = await fetch(`${url}/${artistVal}/${songVal}`)
    .then((res) => res.json())
    .then((obj) => obj.data);

  main.innerText = data === "" ? "Not Found :(" : data;
});
