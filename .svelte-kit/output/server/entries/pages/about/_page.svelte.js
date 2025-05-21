import { I as escape_html, D as pop, A as push, K as ensure_array_like } from "../../../chunks/utils.js";
import { M as MetaTags, p as personalInfo } from "../../../chunks/MetaTags.js";
import { s as skills, e as education, l as languages } from "../../../chunks/education.js";
import "clsx";
function EducationCard($$payload, $$props) {
  push();
  const { education: education2 } = $$props;
  $$payload.out += `<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground h-full flex flex-col"><h3 class="text-xl font-semibold">${escape_html(education2.degree)}</h3> <p class="mt-1 text-sm text-muted-foreground">${escape_html(education2.institution)} | ${escape_html(education2.period)}</p> `;
  if (education2.description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="mt-4 text-sm text-muted-foreground flex-grow">${escape_html(education2.description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(education);
  const each_array_1 = ensure_array_like(languages);
  MetaTags($$payload, {
    title: "About Me",
    description: `Learn more about ${personalInfo.name}, a ${personalInfo.title} with expertise in ${skills[0].items.slice(0, 4).join(", ")}`
  });
  $$payload.out += `<!----> <div class="container py-16 sm:py-20"><div class="mx-auto max-w-3xl"><h1 class="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1> <div class="mt-6 text-lg text-gray-600 dark:text-gray-400"><p>${escape_html(personalInfo.longBio)}</p></div> <div class="mt-16"><h2 class="text-2xl font-bold tracking-tight">Education</h2> <div class="mt-6 space-y-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let edu = each_array[$$index];
    EducationCard($$payload, { education: edu });
  }
  $$payload.out += `<!--]--></div></div> <div class="mt-16"><h2 class="text-2xl font-bold tracking-tight">Languages</h2> <div class="mt-6 space-y-4"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let language = each_array_1[$$index_1];
    $$payload.out += `<div><h3 class="font-semibold">${escape_html(language.name)}</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">${escape_html(language.level)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
