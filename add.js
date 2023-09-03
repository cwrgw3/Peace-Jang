function SideMenuOpen() {
    alert('되나되나되나 호오오우 된다');
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



function toggleDropdown(button) {
    var dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle("active");
}

// 모든 드롭다운 버튼에 클릭 이벤트 핸들러를 등록합니다.
var buttons = document.querySelectorAll(".dropdown-button");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        toggleDropdown(button);
    });
});