import { I as escape_html, M as attr, N as stringify, D as pop, A as push, K as ensure_array_like } from "../../../chunks/utils.js";
import { M as MetaTags, p as personalInfo } from "../../../chunks/MetaTags.js";
import { e as experience, E as ExperienceCard, r as references } from "../../../chunks/ExperienceCard.js";
function ReferenceCard($$payload, $$props) {
  push();
  const { ref } = $$props;
  function getInitials(name) {
    return name.split(" ").map((word) => word[0]).join("").toUpperCase();
  }
  $$payload.out += `<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground h-full flex flex-col"><div class="flex items-center gap-4"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold">${escape_html(getInitials(ref.name))}</div> <div><h3 class="text-xl font-semibold">${escape_html(ref.name)}</h3> <p class="text-sm text-muted-foreground">${escape_html(ref.title)}</p></div></div> <div class="mt-4 space-y-2 flex-grow">`;
  if (ref.phone) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `tel:${stringify(ref.phone)}`)} class="block text-sm text-muted-foreground hover:text-primary transition-colors">${escape_html(ref.phone)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (ref.email) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `mailto:${stringify(ref.email)}`)} class="block text-sm text-muted-foreground hover:text-primary transition-colors">${escape_html(ref.email)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(experience);
  const each_array_1 = ensure_array_like(references);
  MetaTags($$payload, {
    title: "Experience",
    description: `Professional experience and work history of ${personalInfo.name}, including roles at ${experience[0].company} and ${experience[1].company}`
  });
  $$payload.out += `<!----> <div class="container py-16 sm:py-20"><div class="mx-auto max-w-3xl"><h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Professional Experience</h1> <div class="mt-6 text-lg text-gray-600 dark:text-gray-400"></div> <div class="mt-16 space-y-12"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let exp = each_array[$$index];
    ExperienceCard($$payload, { exp });
  }
  $$payload.out += `<!--]--></div> <div class="mt-16"><h2 class="text-2xl font-bold tracking-tight">Professional References</h2> <div class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let ref = each_array_1[$$index_1];
    ReferenceCard($$payload, { ref });
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
