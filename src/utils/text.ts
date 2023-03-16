export function textReduce(text: string, length: number){
  const suffix = text.length > length ? "..." : ""
  return text.slice(0, length-3) + suffix;
}