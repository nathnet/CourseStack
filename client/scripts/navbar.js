const nav = document.getElementById("navbar");

if (nav) {
  const brandList = document.createElement("ul");
  const brandItem = document.createElement("li");
  const brandStrong = document.createElement("strong");
  const brandLink = document.createElement("a");
  brandLink.href = "/";
  brandLink.textContent = "CourseStack";
  brandStrong.append(brandLink);
  brandItem.append(brandStrong);
  brandList.append(brandItem);

  const navList = document.createElement("ul");
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.href = "/";
  navLink.textContent = "Courses";
  navItem.append(navLink);
  navList.append(navItem);

  nav.append(brandList, navList);
}
