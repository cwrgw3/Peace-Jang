function SideMenuOpen() {
    alert('되나되나되나 호오오우 된다');
}

function showSideMenu() {
    var SideMenu = document.getElementById("SideMenu");
    // 도형을 보이게 하려면 left 속성을 0으로 변경합니다.
    SideMenu.style.right = "0vw";
}

function hideSideMenu() {
    var SideMenu = document.getElementById("SideMenu");
    // 도형을 다시 화면 왼쪽 밖으로 이동하도록 설정합니다.
    SideMenu.style.left = "-100vw";
}


function toggleSideMenu() {
    var SideMenu = document.getElementById("SideMenu");
    
    // 현재 상태에 따라 클래스를 추가/제거하여 애니메이션을 트리거합니다.
    if (SideMenu.classList.contains("show")) {
        SideMenu.classList.remove("show");
        SideMenu.classList.add("hide");
        
    } else {
        SideMenu.classList.remove("hide");
        SideMenu.classList.add("show");
    }
}