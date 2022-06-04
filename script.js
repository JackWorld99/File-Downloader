// const fileInput = document.querySelector("input");
// const downloadBtn = document.querySelector("button");

// downloadBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   downloadBtn.innerText = "Downloading...";
//   fetchFile(fileInput.value);
// });

// function fetchFile(url) {
//   fetch(url)
//     .then((res) => res.blob())
//     .then((file) => {
//       let tempUrl = URL.createObjectURL(file);
//       let aTag = document.createElement("a");
//       aTag.href = tempUrl;
//       aTag.download = url.replace(/^.*[\\\/]/, "");
//       document.body.appendChild(aTag);
//       aTag.click();
//       aTag.remove();
//       URL.revokeObjectURL(tempUrl);
//       downloadBtn.innerText = "Download File";
//     })
//     .catch(() => {
//       downloadBtn.innerText = "Download File";
//       alert("Failde to downlaod file!");
//     });
// }

const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innerText = "Downloading...";
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      const aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      aTag.click();
      downloadBtn.innerText = "Download File";
      URL.revokeObjectURL(tempUrl);
      aTag.remove();
    })
    .catch(() => {
      alert("Failed to download file!");
      downloadBtn.innerText = "Download File";
    });
}
