const res = await fetch("/api/courses");
const courses = await res.json();

const list = document.getElementById("course-list");

for (const course of courses) {
  const article = document.createElement("article");
  article.innerHTML = `
    <img src="${course.image}" alt="${course.title}" />
    <hgroup>
      <h3>${course.title}</h3>
      <p>${course.provider}</p>
    </hgroup>
    <p>${course.description}</p>
    <small><strong>${course.skillLevel}</strong> · ${course.topics.join(", ")}</small>
    <footer>
      <a href="/courses/${course.courseId}" role="button">View Details</a>
    </footer>
  `;
  list.appendChild(article);
}
