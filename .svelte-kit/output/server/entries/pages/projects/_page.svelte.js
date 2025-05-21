import { K as ensure_array_like, D as pop, A as push } from "../../../chunks/utils.js";
import { M as MetaTags, p as personalInfo } from "../../../chunks/MetaTags.js";
import { p as projects, P as ProjectCard } from "../../../chunks/ProjectCard.js";
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(projects);
  MetaTags($$payload, {
    title: "Projects",
    description: `A showcase of ${personalInfo.name}'s recent development projects and technical work, featuring ${projects.length} projects across various technologies.`
  });
  $$payload.out += `<!----> <div class="container py-16 sm:py-20"><div class="mx-auto max-w-3xl"><h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Featured Projects</h1> <div class="mt-6 text-lg text-gray-600 dark:text-gray-400"><p>A selection of projects that demonstrate my technical capabilities and problem-solving approach.</p></div> <div class="mt-16 space-y-16"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    ProjectCard($$payload, { project });
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
export {
  _page as default
};
