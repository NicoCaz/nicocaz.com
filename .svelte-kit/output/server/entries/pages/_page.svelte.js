import { K as ensure_array_like, I as escape_html, D as pop, A as push, M as attr, N as stringify } from "../../chunks/utils.js";
import { p as personalInfo, M as MetaTags } from "../../chunks/MetaTags.js";
import { P as ProjectCard, p as projects } from "../../chunks/ProjectCard.js";
import { E as ExperienceCard, e as experience } from "../../chunks/ExperienceCard.js";
import { s as skills } from "../../chunks/education.js";
function Skills($$payload, $$props) {
  push();
  const skillsWithIcons = skills.map((skill) => {
    let icon;
    switch (skill.category) {
      case "Programming Languages":
        icon = "💻";
        break;
      case "Databases":
        icon = "🗄️";
        break;
      case "Cloud & DevOps":
        icon = "☁️";
        break;
      case "Other Skills":
        icon = "🛠️";
        break;
      default:
        icon = "✨";
    }
    return { ...skill, icon };
  });
  const each_array = ensure_array_like(skillsWithIcons);
  $$payload.out += `<section class="container"><div class="mx-auto max-w-[980px] py-8 md:py-12"><div class="flex flex-col items-center gap-4 text-center"><h2 class="text-3xl font-bold tracking-tight md:text-4xl">Skills</h2> <p class="max-w-[750px] text-lg text-muted-foreground">A quick overview of my technical skills.</p></div> <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let skill = each_array[i];
    const each_array_1 = ensure_array_like(skill.items);
    $$payload.out += `<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"><div class="flex items-center gap-4 mb-5">`;
    if (skill.icon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="text-3xl text-primary drop-shadow-sm">${escape_html(skill.icon)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <h3 class="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">${escape_html(skill.category)}</h3></div> <ul class="space-y-2.5 text-sm text-muted-foreground"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let item = each_array_1[$$index];
      $$payload.out += `<li class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary transition-colors duration-300"></span> <span class="group-hover:text-foreground transition-colors duration-300">${escape_html(item)}</span></li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
function SocialLinks($$payload, $$props) {
  push();
  $$payload.out += `<div class="flex flex-col items-center gap-4 text-center"><h2 class="text-3xl font-bold tracking-tight md:text-4xl">Let's Connect</h2> <p class="max-w-[750px] text-lg text-muted-foreground">Find me on social media</p> <div class="mt-6 flex gap-4"><a${attr("href", personalInfo.social.github)} target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" class="rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a> <a${attr("href", personalInfo.social.linkedin)} target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" class="rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a> <a${attr("href", personalInfo.social.twitter)} target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter profile" class="rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a> <button aria-label="Copy email to clipboard" class="relative rounded-full bg-accent p-3 text-accent-foreground transition-colors hover:bg-accent/80">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path></svg></button></div></div>`;
  pop();
}
function ProjectSection($$payload, $$props) {
  push();
  const { projects: projects2 } = $$props;
  const featuredProject = projects2[0];
  const otherProjects = projects2.slice(1, 4);
  $$payload.out += `<section class="container"><div class="mx-auto max-w-[980px] py-8 md:py-12"><div class="flex flex-col items-center gap-4 text-center"><h2 class="text-3xl font-bold tracking-tight md:text-4xl">Recent Projects</h2> <p class="max-w-[750px] text-lg text-muted-foreground">Take a look at some of my latest work</p></div> `;
  if (featuredProject) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-8 mb-12"><h3 class="text-2xl font-semibold tracking-tight text-center mb-4">Currently working on</h3> <div>`;
    ProjectCard($$payload, { project: featuredProject, featured: true });
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (otherProjects.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(otherProjects);
    $$payload.out += `<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let project = each_array[i];
      $$payload.out += `<div class="flex">`;
      ProjectCard($$payload, { project });
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(experience);
  MetaTags($$payload, {
    title: `${stringify(personalInfo.name)} - ${stringify(personalInfo.title)}`,
    description: personalInfo.shortBio
  });
  $$payload.out += `<!----> <section class="container relative"><div class="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 lg:py-24"><h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">${escape_html(personalInfo.name)}</h1> <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">${escape_html(personalInfo.title)}</h1> <p class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">${escape_html(personalInfo.shortBio)}</p> <div class="flex gap-4"><a href="/projects" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">View all my work</a></div></div></section> <section class="container"><div class="mx-auto max-w-[980px] py-8 md:py-12"><div class="mt-8">`;
  Skills($$payload);
  $$payload.out += `<!----></div></div></section> <section class="container"><div class="mx-auto max-w-[980px] py-8 md:py-12">`;
  ProjectSection($$payload, { projects });
  $$payload.out += `<!----></div></section> <section class="container"><div class="mx-auto max-w-[980px] py-8 md:py-12"><div class="flex flex-col items-center gap-4 text-center"><h2 class="text-2xl font-bold leading-tight tracking-tighter md:text-4xl">Work Experience</h2> <p class="max-w-[750px] text-lg text-muted-foreground">My professional journey and roles</p></div> <div class="mt-8 space-y-12"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let exp = each_array[i];
    $$payload.out += `<div>`;
    ExperienceCard($$payload, { exp });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section class="container"><div class="mx-auto max-w-[980px] py-8 md:py-12">`;
  SocialLinks($$payload);
  $$payload.out += `<!----></div></section>`;
  pop();
}
export {
  _page as default
};
