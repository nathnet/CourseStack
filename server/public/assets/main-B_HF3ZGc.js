import"./navbar-Ctn0yChf.js";var e=await(await fetch(`/api/courses`)).json(),t=document.getElementById(`course-list`);for(let n of e){let e=document.createElement(`article`);e.innerHTML=`
    <img src="${n.image}" alt="${n.title}" />
    <hgroup>
      <h3>${n.title}</h3>
      <p>${n.provider}</p>
    </hgroup>
    <p>${n.description}</p>
    <small><strong>${n.skillLevel}</strong> · ${n.topics.join(`, `)}</small>
    <footer>
      <a href="/courses/${n.courseId}" role="button">View Details</a>
    </footer>
  `,t.appendChild(e)}