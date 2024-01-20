import App from './App.svelte'
import { foo } from "@monorepo/core";
export function render() {
  console.log(foo);
  // @ts-ignore
  return App.render()
}
