const courseId = window.location.pathname.split("/").pop();

if (!courseId) {
  window.location.replace("/404.html");
} else {
  try {
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
      document.getElementById("course-topics").textContent = (course.topics ?? []).join(", ");
      document.getElementById("course-languages").textContent =
        (course.languages ?? []).length > 0
          ? course.languages.join(", ")
          : "No specific language";

      const urlEl = document.getElementById("course-url");
      try {
        const parsed = new URL(course.url);
        if (parsed.protocol === "https:" || parsed.protocol === "http:") {
          urlEl.href = course.url;
        } else {
          urlEl.hidden = true;
        }
      } catch {
        urlEl.hidden = true;
      }
    }
  } catch {
    const article = document.getElementById("course-detail");
    article.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = "Failed to load course. Please try again later.";
    article.appendChild(p);
  }
}
