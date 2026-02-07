import { RefObject } from "react";

export const calculateHeight = (navRef: RefObject<HTMLDivElement | null>) => {
  const navEl = navRef.current;
  if (!navEl) return 105;

  const contentEl = navEl.querySelector(
    ".domain_proxy_list_cont"
  ) as HTMLElement | null;
  if (!contentEl) return 105;

  // если элемент скрыт или позиционирован — временно делаем его измеряемым
  const prev = {
    visibility: contentEl.style.visibility,
    pointerEvents: contentEl.style.pointerEvents,
    position: contentEl.style.position,
    height: contentEl.style.height,
  };

  contentEl.style.visibility = "visible";
  contentEl.style.pointerEvents = "auto";
  contentEl.style.position = "static";
  contentEl.style.height = "auto";

  // форсированный reflow (если нужно)
  void contentEl.offsetHeight;

  const topBar = 45;
  const computed = getComputedStyle(contentEl);
  const paddingBottom = parseFloat(computed.paddingBottom || "0");
  const contentHeight = contentEl.scrollHeight;

  // восстановим прежние стили
  contentEl.style.visibility = prev.visibility;
  contentEl.style.pointerEvents = prev.pointerEvents;
  contentEl.style.position = prev.position;
  contentEl.style.height = prev.height;

  return Math.max(topBar + contentHeight, 105);
};
