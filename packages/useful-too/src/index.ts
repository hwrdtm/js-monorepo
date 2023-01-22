export function usefulToo(caller?: string): string {
  console.log(
    `${
      caller ? `Calling from ${caller}: ` : ""
    }[package:useful-too] usefulToo()`
  );
  return "usefulToo";
}
