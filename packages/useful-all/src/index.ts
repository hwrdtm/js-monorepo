import { useful } from "@js-monorepo/useful";
import { usefulToo } from "@js-monorepo/useful-too";

export function usefulAll(caller?: string): string {
  console.log(
    `${
      caller ? `Calling from ${caller}: ` : ""
    }[package:useful-all] usefulAll()`
  );

  // First call useful() from the useful package
  useful();

  // Then call usefulToo() from the useful-too package
  usefulToo();

  return "fin.";
}
