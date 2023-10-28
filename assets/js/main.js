const MenuActive = document.querySelectorAll('.menu');
const Menutab = document.querySelector('.menutab');
const MobileMenuOpen = document.querySelector('.m_menubtn .xi-bars');
const m_menubtn = document.querySelector('.m_menubtn ');
const MobileMenuClose = document.querySelector(' .xi-close');
const mobileMenuBtn = document.querySelectorAll('.mobileMenuBtn');
const MobileMenuList = document.querySelectorAll('.MobileMenuList');
const body = document.querySelector('body');
const ItemBtn = document.querySelectorAll('.ItemInfoBtn button');
const videoBtnOpen = document.querySelector('.videoBtnOpen');
const videoBtnClose = document.querySelector('.videoBtnClose');
const menuItemLink = document.querySelectorAll('.menuItemLink ');
const menuItemChild = document.querySelectorAll('.menuItem ');
const menuItem = document.querySelectorAll('.menu');
const scrollD = document.querySelector('.topheader');
const headerBackground = document.querySelector('.headerArea .headerMenu');
const menuList = document.querySelector('.menuList');
const headerbottom = document.querySelector('.headerbottom');
const menuListBackground = document.querySelectorAll('.menuListBackground');
const MoMenu_btn = document.querySelector('.MoMenu_btn');
const menuLogo = document.querySelector('.menuLogo');
const phoneNumber = document.querySelector('.phoneNumber');
const UserLoginBtn = document.querySelectorAll('.UserLoginBtn a i');
const hashtag_Btn = document.querySelectorAll('.hashtag_Btn li');
const footer_email = document.querySelector('.footer_email ');
const popupClose = document.querySelectorAll('.popupClose ');
const navMenuList = document.querySelector('.navMenuList');
const nav_menuItem = document.querySelector('.nav_menuItem');

if (navMenuList) {
  // navMenuList 클릭 시 hidden 클래스 제거
  navMenuList.addEventListener('click', () => {
    nav_menuItem.classList.remove('hidden');
  });

  // document 클릭 시 hidden 클래스 추가
  document.addEventListener('click', (event) => {
    const target = event.target;
    // 클릭된 요소가 navMenuList 또는 nav_menuItem에 속하지 않는 경우 hidden 클래스 추가
    if (!navMenuList.contains(target) && target !== nav_menuItem) {
      nav_menuItem.classList.add('hidden');
    }
  });
}
var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
// 문화사업 버튼0
for (let i = 0; i < hashtag_Btn.length; i++) {
  hashtag_Btn[i].addEventListener('click', () => {
    hashtag_Btn[i].classList.add("on");

    for (let j = 0; j < hashtag_Btn.length; j++) {
      if (j !== i) {
        hashtag_Btn[j].classList.remove("on");
      }
    }
  });
}
// 메뉴 마우스 호버
if (document.querySelector(".MainPage")) {
  menuLogo.querySelector(".logo1").style.display = "block";
  menuLogo.querySelector(".logo2").style.display = "none";
  for (let i = 0; i < menuItemChild.length; i++) {
    menuItemChild[i].addEventListener('mouseover', () => {
      menuListBackground[i].style.display = "block";
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "black";
      }
      headerBackground.style.background = "white";
      menuItemLink[i].style.border = "1px solid rgb(221, 221, 221);";
      menuList.style.color = "black"
      document.querySelector(".menuBackground").style.display = "block"
      menuLogo.querySelector(".logo1").style.display = "none";
      menuLogo.querySelector(".logo2").style.display = "block";
    })
    menuItemChild[i].addEventListener('mouseout', () => {
      menuListBackground[i].style.display = "none";
      if (scrollHeight > 50) {
        for (let j = 0; j < UserLoginBtn.length; j++) {
          UserLoginBtn[j].style.color = "black";
        }
      } else {
        for (let j = 0; j < UserLoginBtn.length; j++) {
          UserLoginBtn[j].style.color = "white";
        }
      }
      headerBackground.style.background = "transparent";
      menuItemLink[i].style.border = "0";
      document.querySelector(".menuBackground").style.display = "none"
      menuList.style.color = "white";
      if (scrollHeight > 50) {
        menuLogo.querySelector(".logo1").style.display = "none";
        menuLogo.querySelector(".logo2").style.display = "block";
      } else {
        menuLogo.querySelector(".logo1").style.display = "block";
        menuLogo.querySelector(".logo2").style.display = "none";
      }
    })
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        menuItemChild[i].addEventListener('mouseover', () => {
          menuLogo.querySelector(".logo1").style.display = "none";
          menuLogo.querySelector(".logo2").style.display = "block";
          for (let j = 0; j < UserLoginBtn.length; j++) {
            UserLoginBtn[j].style.color = "black";
          }
        })
        menuItemChild[i].addEventListener('mouseout', () => {
          menuListBackground[i].style.display = "none";
          for (let j = 0; j < UserLoginBtn.length; j++) {
            UserLoginBtn[j].style.color = "black";
          }
          menuLogo.querySelector(".logo1").style.display = "none";
          menuLogo.querySelector(".logo2").style.display = "block";
        })
      }
      else {
        menuItemChild[i].addEventListener('mouseover', () => {
          for (let j = 0; j < UserLoginBtn.length; j++) {
            UserLoginBtn[j].style.color = "black";
          }
          menuLogo.querySelector(".logo1").style.display = "none";
          menuLogo.querySelector(".logo2").style.display = "block";
        })
        menuItemChild[i].addEventListener('mouseout', () => {
          menuListBackground[i].style.display = "none";
          for (let j = 0; j < UserLoginBtn.length; j++) {
            UserLoginBtn[j].style.color = "white";
          }
          menuLogo.querySelector(".logo1").style.display = "block";
          menuLogo.querySelector(".logo2").style.display = "none";
        })
      }
    })
  }
}
else {
  headerBackground.style.background = "white";
  menuList.style.color = "black";
  for (let j = 0; j < UserLoginBtn.length; j++) {
    UserLoginBtn[j].style.color = "black";
  }
  for (let i = 0; i < menuItemChild.length; i++) {
    menuItemChild[i].addEventListener('mouseover', () => {
      menuListBackground[i].style.display = "block";
      menuItemLink[i].style.border = "1px solid rgb(221, 221, 221);";

      document.querySelector(".menuBackground").style.display = "block"
    })
    menuItemChild[i].addEventListener('mouseout', () => {
      menuListBackground[i].style.display = "none";
      menuItemLink[i].style.border = "0";
      document.querySelector(".menuBackground").style.display = "none"
    })
  }
}

// 비디오 텍스트 숨김처리
if (document.querySelector('.videoBtnOpen')) {
  videoBtnOpen.addEventListener('click', () => {
    document.querySelector('.video-txt').classList.remove('video-overflow');
    videoBtnOpen.classList.add('hidden');
    videoBtnClose.classList.remove('hidden');
  })
  videoBtnClose.addEventListener('click', () => {
    document.querySelector('.video-txt').classList.add('video-overflow');
    videoBtnOpen.classList.remove('hidden');
    videoBtnClose.classList.add('hidden');
  })
}
for (let i = 0; i < ItemBtn.length; i++) {
  ItemBtn[i].addEventListener('click', () => {
    if (i === 0) {
      document.querySelector(".ItemMap").classList.add('hidden')
      document.querySelector(".showDesc").classList.remove('hidden')
    } else {
      document.querySelector(".ItemMap").classList.remove('hidden')
      document.querySelector(".showDesc").classList.add('hidden')
    }
    for (let j = 0; j < ItemBtn.length; j++) {
      ItemBtn[j].classList.remove('on');
    }

    ItemBtn[i].classList.add('on');
  });
}
// 모바일 바 버튼
MobileMenuOpen.addEventListener('click', () => {
  document.querySelector('.mo_menu').style.display = 'block'
  MobileMenuOpen.style.display = 'none';
  MobileMenuClose.style.display = 'flex';
  body.classList.add('prevent');
})
MobileMenuClose.addEventListener('click', () => {
  document.querySelector('.mo_menu').style.display = 'none'
  MobileMenuOpen.style.display = 'flex';
  MobileMenuClose.style.display = 'none';
  body.classList.remove('prevent');
  for (let i = 0; i < MobileMenuList.length; i++) {
    MobileMenuList[i].style.display = 'none';
  }
})
for (let i = 0; i < mobileMenuBtn.length; i++) {
  mobileMenuBtn[i].addEventListener('click', () => {
    for (let j = 0; j < MobileMenuList.length; j++) {
      if (j === i) {
        MobileMenuList[j].style.display = 'block';
        mobileMenuBtn[j].classList.add("clicked")
      } else {
        MobileMenuList[j].style.display = 'none';
        mobileMenuBtn[j].classList.remove("clicked")
      }
    }
  });
  MobileMenuList[i].style.display = 'none';
}

// 스크롤 기능
if (document.querySelector(".MainPage")) {
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && window.scrollY >= 66) {
      headerBackground.style.background = "white";
      menuList.style.color = "black";
      headerBackground.classList.add("headerMenuBacground");
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "black";
      }
      menuLogo.querySelector(".logo1").style.display = "none";
      menuLogo.querySelector(".logo2").style.display = "block";
    } else if (window.innerWidth <= 768 && window.innerWidth > 425 && window.scrollY >= 66) {
      headerBackground.style.background = "white";
      menuList.style.color = "black";
      headerBackground.classList.add("headerMenuBacground");
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "black";
      }
      menuLogo.querySelector(".logo1").style.display = "none";
      menuLogo.querySelector(".logo2").style.display = "block";
    } else if (window.innerWidth <= 768 && window.innerWidth > 425 && window.scrollY >= 0) {
      m_menubtn.style.height = "80px";
      // scrollD.style = " ";
      menuList.style = " ";
      headerBackground.style = " ";
      MoMenu_btn.style.right = "0";
      headerBackground.classList.remove("headerMenuBacground");
      menuLogo.style.display = "block"
      MoMenu_btn.style.top = "0";
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "white";
      }
      menuLogo.querySelector(".logo1").style.display = "block";
      menuLogo.querySelector(".logo2").style.display = "none";
    }
    else if (window.innerWidth <= 425 && window.scrollY >= 66) {
      headerBackground.style.background = "white";
      menuList.style.color = "black";
      headerBackground.classList.add("headerMenuBacground");
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "black";
      }
      menuLogo.querySelector(".logo1").style.display = "none";
      menuLogo.querySelector(".logo2").style.display = "block";
    } else if (window.innerWidth <= 425 && window.scrollY >= 0) {
      m_menubtn.style.height = "60px";
      // scrollD.style = " ";
      menuList.style = " ";
      headerBackground.style = " ";
      MoMenu_btn.style.right = "0";
      headerBackground.classList.remove("headerMenuBacground");
      menuLogo.style.display = "block"
      MoMenu_btn.style.top = "0";
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "white";
      }
      menuLogo.querySelector(".logo1").style.display = "block";
      menuLogo.querySelector(".logo2").style.display = "none";

    }
    else {
      headerBackground.classList.remove("headerMenuBacground");
      // scrollD.style = " ";
      menuList.style = " ";
      headerBackground.style = " ";
      MoMenu_btn.style.right = "0";
      for (let j = 0; j < UserLoginBtn.length; j++) {
        UserLoginBtn[j].style.color = "white";
      }
      MoMenu_btn.style.top = "0";
      menuLogo.style.display = "block"
      menuLogo.querySelector(".logo1").style.display = "block";
      menuLogo.querySelector(".logo2").style.display = "none";
    }
  });
}
// 메인페이지 이미지 슬라이드
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.filmstrip')) {
    const filmstrip = document.querySelector('.filmstrip');
    const link = document.querySelectorAll('.filmstrip a');
    const images = document.querySelectorAll('.filmstrip a img');

    let scrollAmount = 0;
    const scrollDelay = 10;
    let isPaused = false;

    function scrollImages() {
      if (!isPaused) {
        scrollAmount++;
        if (scrollAmount >= images[0].width + 20) {
          scrollAmount = 0;
          const firstImage = document.querySelector('.filmstrip a:first-child');
          filmstrip.appendChild(firstImage);
        }
        filmstrip.style.transform = `translateX(-${scrollAmount}px)`;
      }
      setTimeout(scrollImages, scrollDelay);
    }

    scrollImages();

    filmstrip.addEventListener('mouseover', () => {
      isPaused = true;
    });

    filmstrip.addEventListener('mouseout', () => {
      isPaused = false;
    });
  }
});



// Top 버튼
if (document.querySelector("#js-scroll")) {
  window.addEventListener("scroll", () => {
    const jsScroll = document.querySelector("#js-scroll");
    if (window.scrollY >= 200) {
      jsScroll.style.display = "block";
      jsScroll.style.position = "fixed";
    } else {
      jsScroll.style.display = "none";
      jsScroll.style.position = "relative";
    }
  });

  document.querySelector("#js-scroll").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // Added smooth scrolling behavior
    });
  });
}

// 어쩔때 스크립트 에러나는거를 방지하기 위해

if (scrollHeight > 50) {
  headerBackground.style.background = "white";
  menuList.style.color = "black";
  headerBackground.classList.add("headerMenuBacground");
  for (let j = 0; j < UserLoginBtn.length; j++) {
    UserLoginBtn[j].style.color = "black";
  }
  menuLogo.querySelector(".logo1").style.display = "none";
  menuLogo.querySelector(".logo2").style.display = "block";
}

// footer 팝업
footer_email.addEventListener("click", () => {
  document.querySelector('.email_popup').classList.remove('hidden');
})
document.querySelector(".popup_wrap").addEventListener("click", () => {
  document.querySelector('.email_popup').classList.add('hidden');
})
for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener('click', () => {
    document.querySelector('.email_popup').classList.add('hidden');
  })
}
function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}

function getCookie(name) {
  var obj = name + "=";
  var x = 0;

  while (x <= document.cookie.length) {
    var y = (x + obj.length);
    if (document.cookie.substring(x, y) == obj) {
      if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
        endOfCookie = document.cookie.length;
      return unescape(document.cookie.substring(y, endOfCookie));
    }

    x = document.cookie.indexOf(" ", x) + 1;
    if (x == 0)
      break;
  }
  return "";
}
function closeLayerPopup(key) {
  if ($("#noview_" + key).prop("checked")) {
    setCookie('popup_' + key, 'Y', 1);
  }
  $("#popup_" + key + "").hide();
}


