import { usefulToo } from "@js-monorepo/useful-too";
import { OMG } from "@js-monorepo/testy-thingy";

export function useful(caller?: string): string {
  console.log(
    `${caller ? `Calling from ${caller}: ` : ""}[package:useful] useful()`
  );

  // Call OMG() from the testy-thingy package
  OMG();

  // Call usefulToo() from the useful-too package
  usefulToo("useful");

  return "useful";
}
