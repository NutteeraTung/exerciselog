// === ตั้ง URL ของ Google Apps Script ที่คุณ Deploy แล้ว ===
const scriptURL = 'https://script.google.com/macros/s/AKfycbyhbflT-cj5x9w75RyGuDAm6kkMhUj8rEpzk_ra5yMUyQQPDMkmok5dnq-cqRlNW4CW/exec'; // แก้ตรงนี้

const form = document.forms['exercise-form'];
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault(); // ป้องกัน reload หน้า

  // แสดงข้อความระหว่างส่งข้อมูล
  message.innerHTML = '⏳ กำลังบันทึก...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        message.innerHTML = '✅ บันทึกสำเร็จ!';
        form.reset(); // เคลียร์ข้อมูลในฟอร์ม
      } else {
        message.innerHTML = '❌ เกิดข้อผิดพลาดในการบันทึก';
        console.error('Error submitting form:', response.statusText);
      }
    })
    .catch(error => {
      message.innerHTML = '🚫 ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้';
      console.error('Fetch error:', error);
    });
});
