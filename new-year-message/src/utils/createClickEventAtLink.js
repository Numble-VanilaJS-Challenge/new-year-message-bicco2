import { navigate } from "./navigate";
import Router from "../router";

/**
 * @param  { HTMLAnchorElement } targetNode
 */

export const createClickEventAtLink = (targetNode) => {
  targetNode.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.closest("a");
    const targetURL = target.href.replace(import.meta.BASE_URL, "");

    navigate(targetURL);
  });
};
