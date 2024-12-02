// 모든 입력 필드를 가져옵니다
const inputs = document.querySelectorAll('.input-field');

// 입력된 값이 모두 채워지면 index3.html로 이동하는 함수
function checkInputs(event) {
  // 모든 입력 필드의 값을 확인
  const allFilled = Array.from(inputs).every(input => input.value.length === 1);

  // 모든 필드가 채워졌고, Enter 키가 눌렸으면 index3.html로 이동
  if (allFilled && event.key === 'Enter') {
    window.location.href = 'index3.html';
  }
}

// 각 입력 필드에 이벤트 리스너를 추가하여 값이 변경될 때마다 체크
inputs.forEach(input => {
  input.addEventListener('input', checkInputs);
});

// Enter 키 눌렀을 때 체크
document.addEventListener('keydown', checkInputs);


// 인덱스3

// door__.gif 클릭 시 closeddoor.jpg로 변경하고 closed_png_2.png 추가
document.getElementById('doorImage').addEventListener('click', function() {
    // door__.gif 이미지 클릭 시, 이를 closeddoor.jpg로 변경
    this.src = 'closeddoor__.jpg';
  
    // 이미지를 클릭할 때 closed_png_2.png 이미지를 추가
    let closedImage = document.createElement('img');
    closedImage.src = 'closed_png_2.png';
    closedImage.alt = 'Closed Door Animation';
    closedImage.classList.add('shake-image');
    closedImage.id = 'closedImage';
  
    // closed_png_2.png 이미지를 container에 추가
    this.parentElement.appendChild(closedImage);
  
    // closed_png_2.png 이미지를 클릭하면 index4.html로 이동
    closedImage.addEventListener('click', function() {
      window.location.href = 'index4.html'; // index4.html로 이동
    });
  });
  

  // 인덱스4



  // protection__.gif 이미지를 클릭하면 index5.html로 이동
document.getElementById('protectionImage')?.addEventListener('click', function() {
    window.location.href = 'index5.html';  // index5.html로 이동
  });
  






  


// missing.jpg 클릭 시 humanrights.png로 바꾸는 함수
function changeImage() {

  // missing 이미지 숨기기
  document.getElementById("missingImage").style.display = "none";

  // humanrights 이미지 보이기
  document.getElementById("humanRightsImage").style.display = "block";
}






  
















