---
layout: page
title: projects
permalink: /projects/
description:
nav: true
---
<div class="projects">
  {% if site.projects %}
    {% assign sorted_projects = site.projects | sort: "date" | reverse %}
    <ul class="post-list">
      {% for project in sorted_projects %}
        <li>
          <h3><a class="project-title" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
          <p class="project-meta">{{ project.date | date: '%B %-d, %Y' }}</p>
          {{ project.description | safe }}
          {% if project.button_url %}
            <div class="links">
              <a href="{{ project.button_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer" style="border: 1px solid black;">GitHub</a>
            </div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No projects found.</p>
  {% endif %}
</div>

