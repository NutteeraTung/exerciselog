document.getElementById("exercise-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  fetch("https://script.google.com/macros/s/AKfycbzNlY1OUUmmlGTGk5vinVU4eS8khWhS3DwsPkW2768kdDGmBO4T4yjfJ1mon2_Asbo5/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((msg) => {
      document.getElementById("response-message").innerText = "บันทึกสำเร็จ!";
      form.reset();
    })
    .catch((err) => {
      document.getElementById("response-message").innerText = "เกิดข้อผิดพลาด";
    });
});
