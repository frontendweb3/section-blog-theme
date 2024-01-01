import type { FC, ReactNode } from "react";

export function renderComponent<T>(
  ComponentOrNode: FC<T> | ReactNode,
  props?: T,
) {
  if (!ComponentOrNode) return null;
  if (typeof ComponentOrNode !== "function") return ComponentOrNode;
  // @ts-expect-error TS2322: Type '{}' is not assignable to type 'T'
  return <ComponentOrNode {...props} />;
}
