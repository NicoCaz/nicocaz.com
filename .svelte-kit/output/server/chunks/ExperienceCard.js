import { O as sanitize_props, P as rest_props, Q as fallback, F as store_get, R as slot, S as spread_attributes, G as unsubscribe_stores, T as bind_props, D as pop, A as push, U as spread_props, I as escape_html, K as ensure_array_like } from "./utils.js";
import "dequal";
import { d as derived, g as get, w as writable, r as readable } from "./index.js";
import "clsx";
const experience = [
  {
    title: "Fullstack Developer",
    company: "Accenture for external bank client",
    period: "October 2023 - Present",
    description: "Development with .NET/Express/Nest/React/TypeScript, focusing on:",
    responsibilities: [
      "Building and maintaining scalable web applications",
      "Implementing RESTful APIs and microservices",
      "Frontend development using React and TypeScript",
      "Collaborating with cross-functional teams"
    ]
  },
  {
    title: "Presale Engineer & Cybersecurity Analyst",
    company: "WellTech",
    period: "June 2021 - October 2023",
    description: "Key responsibilities included:",
    responsibilities: [
      "Technical support to sales teams",
      "Identifying customer needs and providing solutions",
      "Technical demonstrations and presentations",
      "Vulnerability analysis and security assessments",
      "Implementation of security measures",
      "Threat detection and prevention",
      "Incident management and response"
    ]
  },
  {
    title: "Project Manager and Product Owner",
    company: "Freelance",
    period: "2019 - Present",
    description: "Managing projects for major banks in Argentina and Paraguay:",
    responsibilities: [
      "Defining requirements and priorities with clients",
      "Planning and coordinating projects",
      "Resource control and team supervision",
      "Risk management and mitigation",
      "Developing customized banking solutions",
      "Implementing security protocols for financial institutions"
    ]
  }
];
const references = [
  {
    name: "Franco Chalop",
    title: "Pre-sales Leader at WellTech",
    phone: "+54 9 223 501-6736",
    email: "francochalop@grupowelltech.com"
  },
  {
    name: "Joaquín Carrascosa",
    title: "Cybersecurity Analyst at WellTech",
    phone: "+54 9 2932 50-2926",
    email: "joaquincarrascosa@grupowelltech.com"
  },
  {
    name: "Juan Martín Ludueña",
    title: "Back-end Developer at Accenture",
    phone: "+54 9 223 624-3214",
    email: "juan.martin.luduena@accenture.com"
  },
  {
    name: "Gonzalo Othacehe",
    title: "Blockchain Developer at OpenZeppelin",
    phone: "+54 9 223 669-0448",
    email: "gothacehe@openzeppelin.com"
  }
];
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get2 = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get2());
      }));
    });
    subscriber(get2());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get: get2,
    subscribe
  };
};
const kbd = {
  ESCAPE: "Escape"
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
({
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults$1 = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  ...omit(defaults$1, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
function Separator$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "decorative",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], true);
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const { elements: { root }, updateOption, getAttrs } = setCtx({ orientation, decorative });
  const attrs = getAttrs("root");
  updateOption("orientation", orientation);
  updateOption("decorative", decorative);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { builder });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { orientation, decorative, asChild, el });
  pop();
}
function cn(...args) {
  return args.filter(Boolean).join(" ");
}
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "orientation", "decorative"]);
  push();
  let className = fallback($$props["class"], void 0);
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], void 0);
  Separator$1($$payload, spread_props([
    {
      class: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "min-h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
function ExperienceCard($$payload, $$props) {
  push();
  const { exp } = $$props;
  $$payload.out += `<div class="group relative rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground h-full flex flex-col"><h3 class="text-xl font-semibold">${escape_html(exp.title)}</h3> <p class="text-sm text-muted-foreground">${escape_html(exp.company)} | ${escape_html(exp.period)}</p> <div class="mt-4 flex-grow"><p class="text-sm text-muted-foreground">${escape_html(exp.description)}</p> `;
  if (exp.responsibilities && exp.responsibilities.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(exp.responsibilities);
    Separator($$payload, { class: "my-4" });
    $$payload.out += `<!----> <h4 class="mb-2 text-sm font-medium text-foreground">Key Responsibilities:</h4> <ul class="list-disc space-y-1 pl-5 text-sm text-muted-foreground"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let responsibility = each_array[$$index];
      $$payload.out += `<li>${escape_html(responsibility)}</li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  ExperienceCard as E,
  experience as e,
  references as r
};
