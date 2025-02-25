import { jsx as e } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as r from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-avatar/dist/index.mjs";
import { cn as l } from "../../lib/utils.js";
function i({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e(
    r.Root,
    {
      "data-slot": "avatar",
      className: l(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        a
      ),
      ...t
    }
  );
}
function n({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e(
    r.Image,
    {
      "data-slot": "avatar-image",
      className: l("aspect-square size-full", a),
      ...t
    }
  );
}
function f({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ e(
    r.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: l(
        "bg-muted flex size-full items-center justify-center rounded-full",
        a
      ),
      ...t
    }
  );
}
export {
  i as Avatar,
  f as AvatarFallback,
  n as AvatarImage
};
