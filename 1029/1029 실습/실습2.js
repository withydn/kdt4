// TODO: 문제 조건을 만족하는 js 코드 작성
// (참고) article-box, img-box, text-center 클래스에 대한 스타일시트는 haed > style 태그에 이미 정의되어 있습니다.

const section = document.querySelector("section");
const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];
for (let i = 0; i < icecreams.length; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", `./image/icecream${i + 1}.png`);
  img.classList.add("img-box");
  const topN = document.createElement("h3");
  topN.textContent = `Top${i + 1}`;
  topN.classList.add("text-center");
  const name = document.createElement("div");
  name.textContent = icecreams[i];
  name.classList.add("text-center");
  const article = document.createElement("article");
  article.classList.add("article-box");
  article.append(img);
  article.append(topN);
  article.append(name);
  section.append(article);
}
