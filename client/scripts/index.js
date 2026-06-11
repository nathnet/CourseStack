const res = await fetch("/api/courses");
const courses = await res.json();

const list = document.getElementById("course-list");

for (const course of courses) {
  const article = document.createElement("article");

  const img = document.createElement("img");
  img.src = course.image;
  img.alt = course.title;

  const hgroup = document.createElement("hgroup");
  const h3 = document.createElement("h3");
  h3.textContent = course.title;
  const provider = document.createElement("p");
  provider.textContent = course.provider;
  hgroup.append(h3, provider);

  const description = document.createElement("p");
  description.textContent = course.description;

  const meta = document.createElement("small");
  const level = document.createElement("strong");
  level.textContent = course.skillLevel;
  meta.append(level, ` · ${course.topics.join(", ")}`);

  const footer = document.createElement("footer");
  const link = document.createElement("a");
  link.href = `/courses/${encodeURIComponent(course.courseId)}`;
  link.setAttribute("role", "button");
  link.textContent = "View Details";
  footer.append(link);

  article.append(img, hgroup, description, meta, footer);
  list.appendChild(article);
}
