 //● firstBox 5초 후 none
setTimeout(function() {
  document.querySelector("#firstBox").style.display = "none";
}, 5000);
 

 
 //● secondBox 이미지 슈터

const imagesBullet = document.querySelectorAll(".photoShooter>ul>li");
    // 목표지점  top 40% , left 20% 근처
const imageConfigs = [  //배열
  { top: "37%", left: "20%", rotation: "-10deg" },
  { top: "39%", left: "18%", rotation: "3deg" },
  { top: "41%", left: "24%", rotation: "05deg" },
  { top: "37%", left: "27%", rotation: "20deg" },
  { top: "38%", left: "21%", rotation: "15deg" },
  { top: "42%", left: "22%", rotation: "7deg" },
  { top: "37%", left: "200%", rotation: "0deg" }, // 잠깐 인터벌 목적 존재 x
  { top: "48%", left: "22%", rotation: "-10deg" },
  { top: "49%", left: "23%", rotation: "-7deg" },
  { top: "50%", left: "21%", rotation: "-8deg" },
  { top: "47%", left: "18%", rotation: "-3deg" },
  { top: "48%", left: "20%", rotation: "0deg" },
  { top: "75%", left: "20%", rotation: "0deg" }, // go to insta 버튼
];

function animateImages() {
  imagesBullet.forEach((image, index) => {
    const config = imageConfigs[index];
    const delay = index * 400;

    setTimeout(() => {
      image.style.top = config.top;
      image.style.left = config.left;
      image.style.transform = `translate(-50%, -50%) rotate(${config.rotation})`;
    }, delay);
  });
}
    // 페이지 로드 후 3.5초 애니메이션 시작
window.addEventListener('load', () => {
    setTimeout(animateImages, 3500);
  });
 