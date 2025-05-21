import { K as ensure_array_like, Y as attr_class, I as escape_html, M as attr, D as pop, A as push, N as stringify } from "./utils.js";
const projects = [
  {
    title: "Propimap.com",
    description: "SaaS platform for real estate agents to manage their leads and properties.",
    features: [
      "CRM for real estate agents to manage their leads and properties.",
      "Cloudflare R2 for storage",
      "Cloudflare workers",
      "WAF Rules",
      "Automated compliance checks and audit logging",
      "UX/UI design"
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker", "Cloudflare"],
    url: "https://propimap.com"
  },
  {
    title: "Real time cow monitoring system",
    description: "Real time cow monitoring system for a farm in Argentina with arduino .",
    features: [
      "Real time data processing and analysis",
      "Map with live data",
      "Distributed system"
    ],
    technologies: ["JavaScript", "Arduino"],
    url: "https://github.com/NicoCaz/TP-Sistema-Distribuidos"
  },
  {
    title: "Fake Face creator with IA (GAN)",
    description: "Fake Face creator with IA (GAN) using tensorflow and keras.",
    features: [
      "Real-time data processing and analysis",
      "Dashboards and visualizations",
      "Automated model training and deployment"
    ],
    technologies: ["Python", "Keras"],
    url: "https://github.com/NicoCaz/Face_creator_with_GAN"
  },
  {
    title: "Banking Waiting line management system",
    description: "Real time waiting line management system for a bank in Argentina.",
    features: [
      "Microservices architecture with Java vanilla",
      "Redundancy and fault tolerance"
    ],
    technologies: ["Java"],
    url: "https://github.com/NicoCaz/BankConnect"
  },
  {
    title: "MVP Medical Clinic management system",
    description: "MVP Medical Clinic management system for a clinic in Argentina.",
    features: ["CRUD operations", "Turns management"],
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    url: "https://github.com/TeamProgra3/TP-Progra3"
  }
];
function ProjectCard($$payload, $$props) {
  push();
  const {
    project,
    featured = false,
    class: className = ""
  } = $$props;
  console.log(project);
  const each_array_1 = ensure_array_like(project.technologies);
  $$payload.out += `<div${attr_class(`${stringify(className)} group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground`, void 0, {
    "featured": featured,
    "h-full": !featured,
    "flex": !featured,
    "flex-col": !featured
  })}><h2 class="text-xl font-semibold">${escape_html(project.title)}</h2> <p class="mt-4 text-sm text-muted-foreground">${escape_html(project.description)}</p> `;
  if (project.features && project.features.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.features);
    $$payload.out += `<div class="mt-4"><h3 class="text-base font-semibold mb-2">Features</h3> <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let feature = each_array[$$index];
      $$payload.out += `<li>${escape_html(feature)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let tech = each_array_1[$$index_1];
    $$payload.out += `<span class="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-sm font-medium text-secondary-foreground">${escape_html(tech)}</span>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (project.url) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", project.url)} target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90">View Project <span class="ml-2">→</span></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  ProjectCard as P,
  projects as p
};
