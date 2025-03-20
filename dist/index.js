var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Slot } from "@radix-ui/react-slot";
import { differenceInCalendarDays, format } from "date-fns";
import { ChevronLeft, ChevronRight, CheckIcon, Calendar as Calendar$1, XIcon } from "lucide-react";
import * as React from "react";
import { DayPicker, useDayPicker, labelPrevious, labelNext } from "react-day-picker";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import SelectPrimitive from "react-select";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
__name(cn, "cn");
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        info: "bg-info-light border-info-light-foreground/20 text-info-light-foreground",
        success: "bg-success-light border-success-light-foreground/20 text-success-light-foreground",
        warning: "bg-warning-light border-warning-light-foreground/20 text-warning-light-foreground",
        destructive: "bg-destructive-light border-destructive-light-foreground/20 text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
__name(Alert, "Alert");
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight",
        className
      ),
      ...props
    }
  );
}
__name(AlertTitle, "AlertTitle");
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}
__name(AlertDescription, "AlertDescription");
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
__name(Avatar, "Avatar");
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
__name(AvatarImage, "AvatarImage");
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
__name(AvatarFallback, "AvatarFallback");
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        neutral: "bg-neutral-light border-neutral-light-foreground/20 text-neutral-light-foreground",
        primary: "bg-primary-light border-primary-light-foreground/20 text-primary-light-foreground",
        info: "bg-info-light border-info-light-foreground/20 text-info-light-foreground",
        success: "bg-success-light border-success-light-foreground/20 text-success-light-foreground",
        warning: "bg-warning-light border-warning-light-foreground/20 text-warning-light-foreground",
        destructive: "bg-destructive-light border-destructive-light-foreground/20 text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
__name(Badge, "Badge");
const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibol transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      contentType: {
        default: "",
        icon: ""
      },
      size: {
        sm: "",
        md: "",
        lg: ""
        // icon: "size-9",
      }
    },
    compoundVariants: [
      {
        size: "sm",
        contentType: "default",
        className: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
      },
      {
        size: "md",
        contentType: "default",
        className: "h-9 px-4 py-2 has-[>svg]:px-3"
      },
      {
        size: "lg",
        contentType: "default",
        className: "h-10 rounded-md px-6 has-[>svg]:px-4"
      },
      {
        size: "sm",
        contentType: "icon",
        className: "size-8"
      },
      {
        size: "md",
        contentType: "icon",
        className: "size-9"
      },
      {
        size: "lg",
        contentType: "icon",
        className: "size-10"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      contentType: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  contentType,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, contentType, className })),
      ...props
    }
  );
}
__name(Button, "Button");
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
__name(buildFormatLongFn, "buildFormatLongFn");
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
__name(buildLocalizeFn, "buildLocalizeFn");
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
__name(buildMatchFn, "buildMatchFn");
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
__name(findKey, "findKey");
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
__name(findIndex, "findIndex");
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
__name(buildMatchPatternFn, "buildMatchPatternFn");
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "moins d’une seconde",
    other: "moins de {{count}} secondes"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} secondes"
  },
  halfAMinute: "30 secondes",
  lessThanXMinutes: {
    one: "moins d’une minute",
    other: "moins de {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "environ 1 heure",
    other: "environ {{count}} heures"
  },
  xHours: {
    one: "1 heure",
    other: "{{count}} heures"
  },
  xDays: {
    one: "1 jour",
    other: "{{count}} jours"
  },
  aboutXWeeks: {
    one: "environ 1 semaine",
    other: "environ {{count}} semaines"
  },
  xWeeks: {
    one: "1 semaine",
    other: "{{count}} semaines"
  },
  aboutXMonths: {
    one: "environ 1 mois",
    other: "environ {{count}} mois"
  },
  xMonths: {
    one: "1 mois",
    other: "{{count}} mois"
  },
  aboutXYears: {
    one: "environ 1 an",
    other: "environ {{count}} ans"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ans"
  },
  overXYears: {
    one: "plus d’un an",
    other: "plus de {{count}} ans"
  },
  almostXYears: {
    one: "presqu’un an",
    other: "presque {{count}} ans"
  }
};
const formatDistance = /* @__PURE__ */ __name((token, count, options) => {
  let result;
  const form = formatDistanceLocale[token];
  if (typeof form === "string") {
    result = form;
  } else if (count === 1) {
    result = form.one;
  } else {
    result = form.other.replace("{{count}}", String(count));
  }
  if (options == null ? void 0 : options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "dans " + result;
    } else {
      return "il y a " + result;
    }
  }
  return result;
}, "formatDistance");
const dateFormats = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
};
const timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
const dateTimeFormats = {
  full: "{{date}} 'à' {{time}}",
  long: "{{date}} 'à' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: "P"
};
const formatRelative = /* @__PURE__ */ __name((token, _date, _baseDate, _options) => formatRelativeLocale[token], "formatRelative");
const eraValues = {
  narrow: ["av. J.-C", "ap. J.-C"],
  abbreviated: ["av. J.-C", "ap. J.-C"],
  wide: ["avant Jésus-Christ", "après Jésus-Christ"]
};
const quarterValues = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
  wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
  ],
  wide: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ]
};
const dayValues = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  wide: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "après-midi",
    evening: "soir",
    night: "matin"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l’après-midi",
    evening: "du soir",
    night: "du matin"
  }
};
const ordinalNumber = /* @__PURE__ */ __name((dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options == null ? void 0 : options.unit;
  if (number === 0) return "0";
  const feminineUnits = ["year", "week", "hour", "minute", "second"];
  let suffix;
  if (number === 1) {
    suffix = unit && feminineUnits.includes(unit) ? "ère" : "er";
  } else {
    suffix = "ème";
  }
  return number + suffix;
}, "ordinalNumber");
const LONG_MONTHS_TOKENS = ["MMM", "MMMM"];
const localize = {
  preprocessor: /* @__PURE__ */ __name((date, parts) => {
    if (date.getDate() === 1) return parts;
    const hasLongMonthToken = parts.some(
      (part) => part.isToken && LONG_MONTHS_TOKENS.includes(part.value)
    );
    if (!hasLongMonthToken) return parts;
    return parts.map(
      (part) => part.isToken && part.value === "do" ? { isToken: true, value: "d" } : part
    );
  }, "preprocessor"),
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: /* @__PURE__ */ __name((quarter) => quarter - 1, "argumentCallback")
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide"
  })
};
const matchOrdinalNumberPattern = /^(\d+)(ième|ère|ème|er|e)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
};
const parseEraPatterns = {
  any: [/^av/i, /^ap/i]
};
const matchQuarterPatterns = {
  narrow: /^T?[1234]/i,
  abbreviated: /^[1234](er|ème|e)? trim\.?/i,
  wide: /^[1234](er|ème|e)? trimestre/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^av/i,
    /^ma/i,
    /^juin/i,
    /^juil/i,
    /^ao/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
};
const parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: /* @__PURE__ */ __name((value) => parseInt(value), "valueCallback")
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: /* @__PURE__ */ __name((index) => index + 1, "valueCallback")
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const fr = {
  code: "fr",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function Calendar({
  className,
  showOutsideDays = true,
  showYearSwitcher = true,
  yearRange = 12,
  numberOfMonths,
  locale = fr,
  ...props
}) {
  const [navView, setNavView] = React.useState("days");
  const [displayYears, setDisplayYears] = React.useState(
    React.useMemo(() => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      return {
        from: currentYear - Math.floor(yearRange / 2 - 1),
        to: currentYear + Math.ceil(yearRange / 2)
      };
    }, [yearRange])
  );
  const { onNextClick, onPrevClick, startMonth, endMonth } = props;
  const columnsDisplayed = navView === "years" ? 1 : numberOfMonths;
  const _monthsClassName = cn("relative flex", props.monthsClassName);
  const _monthCaptionClassName = cn(
    "relative mx-10 flex h-7 items-center justify-center",
    props.monthCaptionClassName
  );
  const _weekdaysClassName = cn("flex flex-row", props.weekdaysClassName);
  const _weekdayClassName = cn(
    "w-8 text-sm font-normal text-muted-foreground",
    props.weekdayClassName
  );
  const _monthClassName = cn("w-full", props.monthClassName);
  const _captionClassName = cn(
    "relative flex items-center justify-center pt-1",
    props.captionClassName
  );
  const _captionLabelClassName = cn(
    "truncate text-sm font-medium",
    props.captionLabelClassName
  );
  const buttonNavClassName = buttonVariants({
    variant: "outline",
    className: "absolute h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  });
  const _buttonNextClassName = cn(
    buttonNavClassName,
    "right-0",
    props.buttonNextClassName
  );
  const _buttonPreviousClassName = cn(
    buttonNavClassName,
    "left-0",
    props.buttonPreviousClassName
  );
  const _navClassName = cn("flex items-start", props.navClassName);
  const _monthGridClassName = cn("mx-auto mt-4", props.monthGridClassName);
  const _weekClassName = cn("mt-2 flex w-max items-start", props.weekClassName);
  const _dayClassName = cn(
    "flex size-8 flex-1 items-center justify-center p-0 text-sm",
    props.dayClassName
  );
  const _dayButtonClassName = cn(
    buttonVariants({ variant: "ghost" }),
    "size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100",
    props.dayButtonClassName
  );
  const buttonRangeClassName = "bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground";
  const _rangeStartClassName = cn(
    buttonRangeClassName,
    "day-range-start rounded-s-md",
    props.rangeStartClassName
  );
  const _rangeEndClassName = cn(
    buttonRangeClassName,
    "day-range-end rounded-e-md",
    props.rangeEndClassName
  );
  const _rangeMiddleClassName = cn(
    "bg-accent !text-foreground [&>button]:bg-transparent [&>button]:!text-foreground [&>button]:hover:bg-transparent [&>button]:hover:!text-foreground",
    props.rangeMiddleClassName
  );
  const _selectedClassName = cn(
    "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
    props.selectedClassName
  );
  const _todayClassName = cn(
    "[&>button]:bg-accent [&>button]:text-accent-foreground",
    props.todayClassName
  );
  const _outsideClassName = cn(
    "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
    props.outsideClassName
  );
  const _disabledClassName = cn(
    "text-muted-foreground opacity-50",
    props.disabledClassName
  );
  const _hiddenClassName = cn("invisible flex-1", props.hiddenClassName);
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      locale,
      showOutsideDays,
      className: cn("p-3", className),
      style: {
        width: 248.8 * (columnsDisplayed ?? 1) + "px"
      },
      classNames: {
        months: _monthsClassName,
        month_caption: _monthCaptionClassName,
        weekdays: _weekdaysClassName,
        weekday: _weekdayClassName,
        month: _monthClassName,
        caption: _captionClassName,
        caption_label: _captionLabelClassName,
        button_next: _buttonNextClassName,
        button_previous: _buttonPreviousClassName,
        nav: _navClassName,
        month_grid: _monthGridClassName,
        week: _weekClassName,
        day: _dayClassName,
        day_button: _dayButtonClassName,
        range_start: _rangeStartClassName,
        range_middle: _rangeMiddleClassName,
        range_end: _rangeEndClassName,
        selected: _selectedClassName,
        today: _todayClassName,
        outside: _outsideClassName,
        disabled: _disabledClassName,
        hidden: _hiddenClassName
      },
      components: {
        Chevron: /* @__PURE__ */ __name(({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" });
        }, "Chevron"),
        Nav: /* @__PURE__ */ __name(({ className: className2 }) => /* @__PURE__ */ jsx(
          Nav,
          {
            className: className2,
            displayYears,
            navView,
            setDisplayYears,
            startMonth,
            endMonth,
            onPrevClick
          }
        ), "Nav"),
        CaptionLabel: /* @__PURE__ */ __name((props2) => /* @__PURE__ */ jsx(
          CaptionLabel,
          {
            showYearSwitcher,
            navView,
            setNavView,
            displayYears,
            ...props2
          }
        ), "CaptionLabel"),
        MonthGrid: /* @__PURE__ */ __name(({ className: className2, children, ...props2 }) => /* @__PURE__ */ jsx(
          MonthGrid,
          {
            children,
            className: className2,
            displayYears,
            startMonth,
            endMonth,
            navView,
            setNavView,
            ...props2
          }
        ), "MonthGrid")
      },
      numberOfMonths: columnsDisplayed,
      ...props
    }
  );
}
__name(Calendar, "Calendar");
Calendar.displayName = "Calendar";
function Nav({
  className,
  navView,
  startMonth,
  endMonth,
  displayYears,
  setDisplayYears,
  onPrevClick,
  onNextClick
}) {
  const { nextMonth, previousMonth, goToMonth } = useDayPicker();
  const isPreviousDisabled = (() => {
    if (navView === "years") {
      return startMonth && differenceInCalendarDays(
        new Date(displayYears.from - 1, 0, 1),
        startMonth
      ) < 0 || endMonth && differenceInCalendarDays(
        new Date(displayYears.from - 1, 0, 1),
        endMonth
      ) > 0;
    }
    return !previousMonth;
  })();
  const isNextDisabled = (() => {
    if (navView === "years") {
      return startMonth && differenceInCalendarDays(
        new Date(displayYears.to + 1, 0, 1),
        startMonth
      ) < 0 || endMonth && differenceInCalendarDays(
        new Date(displayYears.to + 1, 0, 1),
        endMonth
      ) > 0;
    }
    return !nextMonth;
  })();
  const handlePreviousClick = React.useCallback(() => {
    if (!previousMonth) return;
    if (navView === "years") {
      setDisplayYears((prev) => ({
        from: prev.from - (prev.to - prev.from + 1),
        to: prev.to - (prev.to - prev.from + 1)
      }));
      onPrevClick == null ? void 0 : onPrevClick(
        new Date(
          displayYears.from - (displayYears.to - displayYears.from),
          0,
          1
        )
      );
      return;
    }
    goToMonth(previousMonth);
    onPrevClick == null ? void 0 : onPrevClick(previousMonth);
  }, [
    previousMonth,
    navView,
    goToMonth,
    onPrevClick,
    setDisplayYears,
    displayYears.from,
    displayYears.to
  ]);
  const handleNextClick = React.useCallback(() => {
    if (!nextMonth) return;
    if (navView === "years") {
      setDisplayYears((prev) => ({
        from: prev.from + (prev.to - prev.from + 1),
        to: prev.to + (prev.to - prev.from + 1)
      }));
      onNextClick == null ? void 0 : onNextClick(
        new Date(
          displayYears.from + (displayYears.to - displayYears.from),
          0,
          1
        )
      );
      return;
    }
    goToMonth(nextMonth);
    onNextClick == null ? void 0 : onNextClick(nextMonth);
  }, [
    displayYears.from,
    displayYears.to,
    goToMonth,
    navView,
    nextMonth,
    onNextClick,
    setDisplayYears
  ]);
  return /* @__PURE__ */ jsxs("nav", { className: cn("flex items-center", className), children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "absolute left-0 h-7 w-7 bg-transparent p-0 opacity-80 hover:opacity-100",
        type: "button",
        tabIndex: isPreviousDisabled ? void 0 : -1,
        disabled: isPreviousDisabled,
        "aria-label": navView === "years" ? `Go to the previous ${displayYears.to - displayYears.from + 1} years` : labelPrevious(previousMonth),
        onClick: handlePreviousClick,
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "absolute right-0 h-7 w-7 bg-transparent p-0 opacity-80 hover:opacity-100",
        type: "button",
        tabIndex: isNextDisabled ? void 0 : -1,
        disabled: isNextDisabled,
        "aria-label": navView === "years" ? `Go to the next ${displayYears.to - displayYears.from + 1} years` : labelNext(nextMonth),
        onClick: handleNextClick,
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      }
    )
  ] });
}
__name(Nav, "Nav");
function CaptionLabel({
  children,
  showYearSwitcher,
  navView,
  setNavView,
  displayYears,
  ...props
}) {
  if (!showYearSwitcher) return /* @__PURE__ */ jsx("span", { ...props, children });
  return /* @__PURE__ */ jsx(
    Button,
    {
      className: "h-7 w-full truncate text-sm font-medium",
      variant: "ghost",
      size: "sm",
      onClick: /* @__PURE__ */ __name(() => setNavView((prev) => prev === "days" ? "years" : "days"), "onClick"),
      children: navView === "days" ? children : displayYears.from + " - " + displayYears.to
    }
  );
}
__name(CaptionLabel, "CaptionLabel");
function MonthGrid({
  className,
  children,
  displayYears,
  startMonth,
  endMonth,
  navView,
  setNavView,
  ...props
}) {
  if (navView === "years") {
    return /* @__PURE__ */ jsx(
      YearGrid,
      {
        displayYears,
        startMonth,
        endMonth,
        setNavView,
        navView,
        className,
        ...props
      }
    );
  }
  return /* @__PURE__ */ jsx("table", { className, ...props, children });
}
__name(MonthGrid, "MonthGrid");
function YearGrid({
  className,
  displayYears,
  startMonth,
  endMonth,
  setNavView,
  navView,
  ...props
}) {
  const { goToMonth, selected } = useDayPicker();
  return /* @__PURE__ */ jsx("div", { className: cn("grid grid-cols-4 gap-y-2", className), ...props, children: Array.from(
    { length: displayYears.to - displayYears.from + 1 },
    (_, i) => {
      const isBefore = differenceInCalendarDays(
        new Date(displayYears.from + i, 11, 31),
        startMonth
      ) < 0;
      const isAfter = differenceInCalendarDays(
        new Date(displayYears.from + i, 0, 0),
        endMonth
      ) > 0;
      const isDisabled = isBefore || isAfter;
      return /* @__PURE__ */ jsx(
        Button,
        {
          className: cn(
            "h-7 w-full text-sm font-normal text-foreground",
            displayYears.from + i === (/* @__PURE__ */ new Date()).getFullYear() && "bg-accent font-medium text-accent-foreground"
          ),
          variant: "ghost",
          onClick: /* @__PURE__ */ __name(() => {
            setNavView("days");
            goToMonth(
              new Date(
                displayYears.from + i,
                (selected == null ? void 0 : selected.getMonth()) ?? 0
              )
            );
          }, "onClick"),
          disabled: navView === "years" ? isDisabled : void 0,
          children: displayYears.from + i
        },
        i
      );
    }
  ) });
}
__name(YearGrid, "YearGrid");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}
__name(Checkbox, "Checkbox");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
__name(Popover, "Popover");
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
__name(PopoverTrigger, "PopoverTrigger");
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
__name(PopoverContent, "PopoverContent");
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}
__name(PopoverAnchor, "PopoverAnchor");
const DatePicker = /* @__PURE__ */ __name(({
  placeholder = "Choisir",
  dateFormat = "dd/MM/yyyy",
  locale = void 0,
  selected = void 0,
  onSelect = void 0,
  min = void 0,
  max = void 0
}) => {
  const [date, setDate] = React.useState();
  React.useEffect(() => {
    if (selected === void 0) return;
    if (date !== selected) {
      setDate(selected);
    }
  }, [selected, date]);
  const handleSelect = /* @__PURE__ */ __name((val) => {
    if (onSelect) {
      if (val) {
        onSelect(val);
      }
    }
    setDate(val);
  }, "handleSelect");
  const hidden = React.useMemo(() => {
    if (!min && !max) {
      return void 0;
    }
    const hddn = [];
    if (min) {
      hddn.push({ before: min });
    }
    if (max) {
      hddn.push({ after: max });
    }
    return hddn;
  }, [min, max]);
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(DatePickerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        className: cn(
          "w-fit justify-start text-left font-normal",
          !date && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx(Calendar$1, { className: "mr-2 h-4 w-4" }),
          date ? format(date, dateFormat) : /* @__PURE__ */ jsx("span", { children: placeholder })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        mode: "single",
        locale,
        selected: date,
        onSelect: handleSelect,
        autoFocus: true,
        fixedWeeks: true,
        hidden
      }
    ) })
  ] });
}, "DatePicker");
const DatePickerTrigger = PopoverTrigger;
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
__name(Dialog, "Dialog");
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
__name(DialogTrigger, "DialogTrigger");
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
__name(DialogPortal, "DialogPortal");
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
__name(DialogClose, "DialogClose");
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
__name(DialogOverlay, "DialogOverlay");
const dialogVariants = cva(
  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200",
  {
    variants: {
      size: {
        sm: "w-full sm:w-dialog-sm",
        md: "w-full sm:w-dialog-md",
        lg: "w-full md:w-dialog-lg",
        xl: "w-full lg:w-dialog-xl"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function DialogContent({
  className,
  children,
  size = "md",
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(dialogVariants({ size }), className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsx(XIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
__name(DialogContent, "DialogContent");
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
__name(DialogHeader, "DialogHeader");
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
__name(DialogFooter, "DialogFooter");
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  );
}
__name(DialogTitle, "DialogTitle");
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
__name(DialogDescription, "DialogDescription");
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          ScrollAreaPrimitive.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx(ScrollBar, {}),
        /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
      ]
    }
  );
}
__name(ScrollArea, "ScrollArea");
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
__name(ScrollBar, "ScrollBar");
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "sheet", ...props });
}
__name(Sheet, "Sheet");
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
__name(SheetTrigger, "SheetTrigger");
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
__name(SheetClose, "SheetClose");
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
__name(SheetPortal, "SheetPortal");
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
__name(SheetOverlay, "SheetOverlay");
const sheetVariants = cva(
  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        bottom: "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full border-r",
        right: "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full border-l"
      },
      size: {
        sm: "w-full sm:w-dialog-sm",
        md: "w-full sm:w-dialog-md",
        lg: "w-full md:w-dialog-lg",
        xl: "w-full lg:w-dialog-xl"
      }
    },
    defaultVariants: {
      side: "right",
      size: "md"
    }
  }
);
function SheetContent({
  className,
  children,
  side = "right",
  size = "md",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(sheetVariants({ side, size }), className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
__name(SheetContent, "SheetContent");
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left mx-6 mt-6",
        className
      ),
      ...props
    }
  );
}
__name(SheetHeader, "SheetHeader");
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mx-6 mb-6",
        className
      ),
      ...props
    }
  );
}
__name(SheetFooter, "SheetFooter");
function SheetBody(props) {
  return /* @__PURE__ */ jsx(ScrollArea, { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex-1 mx-6", ...props }) });
}
__name(SheetBody, "SheetBody");
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-lg font-semibold text-foreground", className),
      ...props
    }
  );
}
__name(SheetTitle, "SheetTitle");
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
__name(SheetDescription, "SheetDescription");
const DialogWrapperContext = React.createContext({
  mode: "sheet"
});
const DialogWrapper = /* @__PURE__ */ __name(({ mode = "sheet", ref, ...props }) => {
  const [opened, setOpened] = React.useState(props.defaultOpen ?? false);
  const handleOpenChange = /* @__PURE__ */ __name((open) => {
    var _a;
    setOpened(open);
    (_a = props.onOpenChange) == null ? void 0 : _a.call(props, open);
  }, "handleOpenChange");
  React.useImperativeHandle(ref, () => ({
    open: /* @__PURE__ */ __name(() => setOpened(true), "open"),
    close: /* @__PURE__ */ __name(() => setOpened(false), "close")
  }));
  return /* @__PURE__ */ jsx(DialogWrapperContext.Provider, { value: { mode }, children: /* @__PURE__ */ jsx(
    DialogPrimitive.Root,
    {
      ...props,
      open: opened,
      onOpenChange: handleOpenChange
    }
  ) });
}, "DialogWrapper");
const DialogWrapperTrigger = DialogPrimitive.Trigger;
const DialogWrapperContent = /* @__PURE__ */ __name(({ className, children, ...props }) => {
  const { mode } = React.useContext(DialogWrapperContext);
  switch (mode) {
    case "sheet":
      return /* @__PURE__ */ jsx(
        SheetContent,
        {
          ...props,
          className: cn(className, "flex flex-col"),
          side: "right",
          children
        }
      );
    case "dialog":
      return /* @__PURE__ */ jsx(DialogContent, { ...props, className, children });
    default:
      return null;
  }
}, "DialogWrapperContent");
const DialogWrapperHeader = /* @__PURE__ */ __name((props) => {
  const { mode } = React.useContext(DialogWrapperContext);
  const Component = mode === "sheet" ? SheetHeader : DialogHeader;
  return /* @__PURE__ */ jsx(Component, { ...props });
}, "DialogWrapperHeader");
const DialogWrapperBody = /* @__PURE__ */ __name((props) => {
  const { mode } = React.useContext(DialogWrapperContext);
  switch (mode) {
    case "dialog":
      return /* @__PURE__ */ jsx(React.Fragment, { ...props });
    case "sheet":
      return /* @__PURE__ */ jsx(SheetBody, { ...props });
    default:
      return null;
  }
}, "DialogWrapperBody");
const DialogWrapperFooter = /* @__PURE__ */ __name((props) => {
  const { mode } = React.useContext(DialogWrapperContext);
  const Component = mode === "sheet" ? SheetFooter : DialogFooter;
  return /* @__PURE__ */ jsx(Component, { ...props });
}, "DialogWrapperFooter");
const DialogWrapperTitle = /* @__PURE__ */ __name((props) => {
  const { mode } = React.useContext(DialogWrapperContext);
  let Component = null;
  ({ ...props });
  switch (mode) {
    case "sheet":
      Component = SheetTitle;
      break;
    case "dialog":
      Component = DialogTitle;
      break;
    default:
      return null;
  }
  return /* @__PURE__ */ jsx(Component, { ...props });
}, "DialogWrapperTitle");
const DialogWrapperDescription = /* @__PURE__ */ __name(({ ...props }) => {
  const { mode } = React.useContext(DialogWrapperContext);
  let Component = null;
  ({ ...props });
  switch (mode) {
    case "sheet":
      Component = SheetDescription;
      break;
    case "dialog":
      Component = DialogDescription;
      break;
    default:
      return null;
  }
  return Component && /* @__PURE__ */ jsx(Component, { ...props });
}, "DialogWrapperDescription");
const DialogWrapperClose = DialogPrimitive.Close;
const Select = /* @__PURE__ */ __name(({
  options,
  placeholder = "Sélectionner",
  onChange,
  ...props
}) => {
  const handleChange = /* @__PURE__ */ __name((options2) => {
    if (Array.isArray(options2)) {
      onChange(options2.map((option) => option.value));
    } else {
      onChange((options2 == null ? void 0 : options2.value) || null);
    }
  }, "handleChange");
  const getSelectedOptions = /* @__PURE__ */ __name(() => {
    if (props.isMulti) {
      return options.filter(
        (option) => {
          var _a;
          return (_a = props.value) == null ? void 0 : _a.includes(option.value);
        }
      );
    }
    return options.find((option) => option.value === props.value);
  }, "getSelectedOptions");
  const onBlurWorkaround = /* @__PURE__ */ __name((event) => {
    const element = event.relatedTarget;
    if (element && (element.tagName === "A" || element.tagName === "BUTTON" || element.tagName === "TEXTAREA" || element.tagName === "INPUT")) {
      element.focus();
    }
  }, "onBlurWorkaround");
  return /* @__PURE__ */ jsx(
    SelectPrimitive,
    {
      ...props,
      options,
      onChange: handleChange,
      value: getSelectedOptions(),
      classNames: {
        control: /* @__PURE__ */ __name((state) => cn(
          "bg-transparent! border border-input! rounded-md text-base! md:text-sm! min-h-9! shadow-none!",
          {
            "ring-1 ring-ring": state.isFocused,
            "cursor-not-allowed! opacity-50!": state.isDisabled
          }
        ), "control"),
        menu: /* @__PURE__ */ __name(() => "bg-popover! border! rounded-md! py-0! overflow-hidden! shadow-md!", "menu"),
        menuList: /* @__PURE__ */ __name(() => "py-0!", "menuList"),
        option: /* @__PURE__ */ __name((state) => cn("text-foreground! text-base! md:text-sm!", {
          "bg-muted!": state.isFocused,
          "text-foreground!": state.isFocused,
          "bg-primary-light! text-primary-light-foreground!": state.isSelected
        }), "option"),
        singleValue: /* @__PURE__ */ __name(() => "text-foreground!", "singleValue"),
        input: /* @__PURE__ */ __name(() => cn("text-foreground!"), "input"),
        placeholder: /* @__PURE__ */ __name(() => "text-muted-foreground!", "placeholder"),
        multiValue: /* @__PURE__ */ __name(() => "bg-muted! text-muted-foreground!", "multiValue"),
        multiValueRemove: /* @__PURE__ */ __name(() => "text-muted-foreground! hover:bg-destructive-light! hover:text-destructive-light-foreground!", "multiValueRemove"),
        multiValueLabel: /* @__PURE__ */ __name(() => "text-muted-foreground!", "multiValueLabel"),
        dropdownIndicator: /* @__PURE__ */ __name(() => "py-0!", "dropdownIndicator"),
        clearIndicator: /* @__PURE__ */ __name(() => "py-0!", "clearIndicator")
      },
      onBlur: onBlurWorkaround,
      placeholder
    }
  );
}, "Select");
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
__name(Tabs, "Tabs");
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",
        className
      ),
      ...props
    }
  );
}
__name(TabsList, "TabsList");
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
__name(TabsTrigger, "TabsTrigger");
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
__name(TabsContent, "TabsContent");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
__name(TooltipProvider, "TooltipProvider");
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
__name(Tooltip, "Tooltip");
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
__name(TooltipTrigger, "TooltipTrigger");
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-neutral text-neutral-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-neutral fill-neutral z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
__name(TooltipContent, "TooltipContent");
export {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Calendar,
  Checkbox,
  DatePicker,
  DatePickerTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogWrapper,
  DialogWrapperBody,
  DialogWrapperClose,
  DialogWrapperContent,
  DialogWrapperDescription,
  DialogWrapperFooter,
  DialogWrapperHeader,
  DialogWrapperTitle,
  DialogWrapperTrigger,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  ScrollBar,
  Select,
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  cn
};
