
const escapeHTML = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const resumeToHTML = (resumeData) => {
  const personal = resumeData.personal || {};

  const sectionHeading = (title) => `
    <h2>${escapeHTML(title)}</h2>
  `;

  const contact = [
    personal.email,
    personal.phone,
    personal.address,
    personal.linkedin,
    personal.github,
  ]
    .filter(Boolean)
    .map(escapeHTML)
    .join(" | ");

  return `
    <h1>${escapeHTML(personal.full_name)}</h1>

    <p>
      <strong>${escapeHTML(personal.job_title)}</strong>
    </p>

    <p>${contact}</p>

    ${sectionHeading("Professional Summary")}
    <p>${escapeHTML(resumeData.summary || "")}</p>

    ${sectionHeading("Technical Skills")}
    <p>
      ${(resumeData.skills || [])
        .map(escapeHTML)
        .join(" • ")}
    </p>

    ${sectionHeading("Experience")}
    ${(resumeData.experience || []).map((exp) => `
      <h3>${escapeHTML(exp.role)}</h3>
      <p>${escapeHTML(exp.company)} | ${escapeHTML(exp.duration)}</p>
      <p>${escapeHTML(exp.description)}</p>
    `).join("")}

    ${sectionHeading("Education")}
    ${(resumeData.education || []).map((edu) => `
      <h3>${escapeHTML(edu.degree)}</h3>
      <p>${escapeHTML(edu.college)}</p>
      <p>${escapeHTML(edu.year)} | ${escapeHTML(edu.percentage)}</p>
    `).join("")}

    ${sectionHeading("Projects")}
    ${(resumeData.projects || []).map((project) => `
      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.technologies)}</p>
      <p>${escapeHTML(project.description)}</p>
    `).join("")}

    ${sectionHeading("Certifications")}
    <ul>
      ${(resumeData.certifications || []).map((cert) => `
        <li>${escapeHTML(cert)}</li>
      `).join("")}
    </ul>

    ${sectionHeading("Languages")}
    <p>
      ${(resumeData.languages || [])
        .map(escapeHTML)
        .join(" • ")}
    </p>
  `;
};

export default resumeToHTML;
