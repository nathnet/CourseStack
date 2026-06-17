const list = document.getElementById("course-list");

const showError = (message) => {
  list.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  list.appendChild(p);
};

const populateSelect = (id, options) => {
  const select = document.getElementById(id);
  for (const value of options) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
};

const renderCourses = (courses) => {
  list.innerHTML = "";
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
    meta.append(level, ` · ${(course.topics ?? []).join(", ")}`);

    const footer = document.createElement("footer");
    const link = document.createElement("a");
    link.href = `/courses/${encodeURIComponent(course.courseId)}`;
    link.setAttribute("role", "button");
    link.textContent = "View Details";
    footer.append(link);

    article.append(img, hgroup, description, meta, footer);
    list.appendChild(article);
  }
};

let activeController = null;

const fetchCourses = async () => {
  if (activeController) activeController.abort();
  activeController = new AbortController();
  try {
    const params = new URLSearchParams();
    const provider = document.getElementById("filter-provider").value;
    const skillLevel = document.getElementById("filter-skill-level").value;
    const topic = document.getElementById("filter-topic").value;
    const language = document.getElementById("filter-language").value;

    if (provider) params.set("provider", provider);
    if (skillLevel) params.set("skillLevel", skillLevel);
    if (topic) params.set("topic", topic);
    if (language) params.set("language", language);

    const res = await fetch(`/api/courses?${params}`, { signal: activeController.signal });
    if (!res.ok) throw new Error(`${res.status}`);
    const courses = await res.json();
    renderCourses(courses);
  } catch (err) {
    if (err.name === "AbortError") return;
    showError("Failed to apply filters. Please try again.");
  }
};

try {
  const [filtersRes, coursesRes] = await Promise.all([
    fetch("/api/courses/filters"),
    fetch("/api/courses"),
  ]);
  if (!filtersRes.ok || !coursesRes.ok) throw new Error("Server error");
  const filters = await filtersRes.json();
  const courses = await coursesRes.json();

  populateSelect("filter-provider", filters.providers);
  populateSelect("filter-skill-level", filters.skillLevels);
  populateSelect("filter-topic", filters.topics);
  populateSelect("filter-language", filters.languages);

  renderCourses(courses);
} catch {
  showError("Failed to load courses. Please try again later.");
}

document.getElementById("filters").addEventListener("change", fetchCourses);
