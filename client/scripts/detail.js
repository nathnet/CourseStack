const courseId = window.location.pathname.split("/").pop();

const res = await fetch(`/api/courses/${courseId}`);

if (!res.ok) {
  window.location.replace("/404.html");
} else {
  const course = await res.json();

  document.title = `${course.title} — CourseStack`;
  document.getElementById("course-image").src = course.image;
  document.getElementById("course-image").alt = course.title;
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-provider").textContent = course.provider;
  document.getElementById("course-description").textContent = course.description;
  document.getElementById("course-level").textContent = course.skillLevel;
  document.getElementById("course-topics").textContent = course.topics.join(", ");
  document.getElementById("course-languages").textContent =
    course.languages.length > 0 ? course.languages.join(", ") : "No specific language";
  document.getElementById("course-url").href = course.url;
}
