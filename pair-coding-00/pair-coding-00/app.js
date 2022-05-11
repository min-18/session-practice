function like(id) {
  let cnt = parseInt(document.getElementsByClassName("like-num")[id].innerHTML);

  cnt += 1;
  document.getElementsByClassName("like-num")[id].innerHTML = cnt;
  document.querySelector;
}

// querySelector(.클래스명) vs getElementsByClassName(클래스명)
// 전자와 달리 후자는 클래스명이 동일하면 리스트형태로 구분됨. 그래서 구분해서 사용할 때 인덱스값을 넣어서 사용가능.
