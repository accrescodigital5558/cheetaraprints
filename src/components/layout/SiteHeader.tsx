"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Pill } from "@/components/ui/Pill";
import { easeOut } from "@/lib/animations";
import { track } from "@/lib/analytics";
import { menuIsCurrent, pageIsCurrent, primaryNav, quoteCta, type NavMenu } from "@/config/navigation";

type OpenMenu = { id: NavMenu["id"]; path: string; pinned: boolean };

export function SiteHeader() {
  const pathname = usePathname();
  const home = pathname === "/";
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Partial<Record<NavMenu["id"], boolean>>>({});
  const [openMenu, setOpenMenu] = useState<OpenMenu | null>(null);
  const menuOpen = menuPath === pathname;
  const solid = scrolled || !home || menuOpen;
  const tone = solid ? "dark" : "light";
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const pendingPanelFocus = useRef(false);
  const pendingMenuFocus = useRef<NavMenu["id"] | null>(null);
  const closeTimer = useRef<number | null>(null);

  function cancelMenuClose() {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function scheduleMenuClose(id: NavMenu["id"]) {
    cancelMenuClose();
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu((current) => {
        if (!current || current.pinned || current.id !== id) return current;
        const button = document.getElementById(`nav-${id}-button`);
        const panel = document.getElementById(`nav-${id}-panel`);
        if (button?.contains(document.activeElement) || panel?.contains(document.activeElement)) return current;
        return null;
      });
    }, 180);
  }

  const mobileNavId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !pendingPanelFocus.current) return;
    pendingPanelFocus.current = false;
    panelRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const id = pendingMenuFocus.current;
    if (!id || openMenu?.id !== id || openMenu.path !== pathname) return;
    pendingMenuFocus.current = null;
    document.querySelector<HTMLAnchorElement>(`#nav-${id}-panel a`)?.focus();
  }, [openMenu, pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: MouseEvent) => {
      const nav = document.getElementById("desktop-navigation");
      if (nav && !nav.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [openMenu]);

  useEffect(() => {
    if (!menuOpen && !openMenu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        setMenuPath(null);
        toggleRef.current?.focus();
        return;
      }
      if (openMenu) {
        const id = openMenu.id;
        setOpenMenu(null);
        document.getElementById(`nav-${id}-button`)?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, openMenu]);

  function itemClass(active: boolean) {
    const color = active ? "text-green" : solid ? "text-ink" : "text-white";
    return `inline-flex items-center gap-1 whitespace-nowrap py-2 text-[13px] font-medium tracking-[-0.01em] xl:text-[14px] ${color}`;
  }

  function openMobile() {
    const next: Partial<Record<NavMenu["id"], boolean>> = {};
    for (const entry of primaryNav) {
      if (entry.kind === "menu" && menuIsCurrent(pathname, entry.items)) next[entry.id] = true;
    }
    setExpanded(next);
    pendingPanelFocus.current = true;
    setMenuPath(pathname);
  }

  function closeMobile(restoreFocus = false) {
    setMenuPath(null);
    if (restoreFocus) toggleRef.current?.focus();
  }

  function onMobileKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab" || !panelRef.current || !toggleRef.current) return;
    const nodes = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a, button")];
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function desktopOpen(id: NavMenu["id"]) {
    return openMenu?.id === id && openMenu.path === pathname;
  }

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-navy/40 lg:hidden"
          aria-label="Close menu"
          onClick={() => closeMobile(true)}
        />
      ) : null}
      <header className={`fixed inset-x-0 top-0 z-40 overflow-visible transition-colors duration-300 ${solid ? "border-b border-line bg-paper" : "bg-transparent"}`}>
        <div className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 ${scrolled ? "pointer-events-none grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`} aria-hidden={scrolled} inert={scrolled}>
          <div className="overflow-hidden">
            <div className={`border-b ${solid ? "border-line text-muted" : "border-white/15 text-white/80"}`}>
              <div className="mx-auto flex h-9 max-w-[1180px] items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[0.16em]">
                <p>On-site and remote service · One annual invoice</p>
                <Link href={quoteCta.href} className="hidden sm:inline" tabIndex={scrolled ? -1 : undefined}>
                  Request an assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-[1180px] px-5">
          <div className="flex h-[4.5rem] items-stretch justify-between gap-4">
          <div className="flex items-center"><Wordmark tone={tone} /></div>
          <nav id="desktop-navigation" className="hidden h-full items-stretch gap-3 xl:gap-5 lg:flex" aria-label="Primary">
            {primaryNav.map((entry) => {
              if (entry.kind === "link") {
                const active = pageIsCurrent(pathname, entry.href);
                return (
                  <Link key={entry.href} href={entry.href} className={itemClass(active)} aria-current={active ? "page" : undefined}>
                    <span className={`nav-underline ${active ? "is-current" : ""}`}>{entry.label}</span>
                  </Link>
                );
              }

              const open = desktopOpen(entry.id);
              const active = menuIsCurrent(pathname, entry.items);
              return (
                <div
                  key={entry.id}
                  className="flex items-center"
                  onMouseEnter={() => {
                    cancelMenuClose();
                    setOpenMenu((current) => (current?.pinned && current.id === entry.id && current.path === pathname ? current : { id: entry.id, path: pathname, pinned: false }));
                  }}
                  onMouseLeave={() => scheduleMenuClose(entry.id)}
                >
                  <button
                    id={`nav-${entry.id}-button`}
                    type="button"
                    className={itemClass(active)}
                    aria-expanded={open}
                    aria-controls={`nav-${entry.id}-panel`}
                    aria-haspopup="true"
                    aria-current={active ? "true" : undefined}
                    onClick={() => {
                      setOpenMenu((current) => (current?.id === entry.id && current.path === pathname && current.pinned ? null : { id: entry.id, path: pathname, pinned: true }));
                    }}
                    onKeyDown={(event) => {
                      if (event.key !== "ArrowDown") return;
                      event.preventDefault();
                      pendingMenuFocus.current = entry.id;
                      setOpenMenu({ id: entry.id, path: pathname, pinned: true });
                    }}
                  >
                    <span className={`nav-underline ${active || open ? "is-current" : ""}`}>{entry.label}</span>
                    <ChevronDown className={`size-3.5 motion-safe:transition-transform motion-safe:duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <div id={`nav-${entry.id}-panel`} className={`absolute left-0 right-0 top-full z-50 ${open ? "block" : "hidden"}`} onMouseEnter={cancelMenuClose}>
                    <div className="pt-3" onKeyDown={(event) => onDesktopMenuKeyDown(event, entry.id, () => setOpenMenu(null))}>
                      <div className="flex max-h-[min(70vh,40rem)] gap-2 overflow-y-auto rounded-[28px] border border-line bg-paper p-2 text-ink shadow-[0_24px_60px_rgba(16,36,58,0.12)]">
                        <ul className="grid flex-1 grid-cols-2 content-stretch gap-1 self-stretch">
                          {entry.items.map((item) => {
                            const current = pathname === item.href;
                            return (
                              <li key={item.href} className="min-h-0">
                                <Link
                                  href={item.href}
                                  className={`group flex h-full items-center gap-3 rounded-2xl px-3 py-3 transition-colors duration-300 hover:bg-ground ${current ? "bg-ground" : ""}`}
                                  aria-current={current ? "page" : undefined}
                                  onClick={() => setOpenMenu(null)}
                                >
                                  <span className="relative size-11 shrink-0 overflow-hidden rounded-xl bg-ground">
                                    <Image src={item.image} alt="" fill sizes="44px" className="object-cover" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className={`menu-title font-heading text-[15px] leading-5 tracking-[-0.02em] ${current ? "text-green" : "text-ink"}`}>{item.label}</span>
                                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{item.meta}</span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        <aside className="flex w-[250px] shrink-0 flex-col rounded-[22px] bg-navy p-5 text-white xl:w-[280px]">
                          <div>
                            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-green">
                              <span className="size-1.5 rotate-45 bg-green" aria-hidden="true" />
                              {entry.aside.eyebrow}
                            </p>
                            <p className="mt-3 font-heading text-[22px] leading-[1.15] tracking-[-0.03em]">{entry.aside.title}</p>
                            <p className="mt-3 text-[14px] leading-6 text-white/70">{entry.aside.body}</p>
                          </div>
                          <div className="mt-5">
                            <Link
                              href={quoteCta.href}
                              onClick={() => {
                                track("quote_cta_click", { location: `header-${entry.id}` });
                                setOpenMenu(null);
                              }}
                              className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-4 pr-2 text-[14px] font-medium text-navy transition-colors duration-300 hover:bg-ground"
                            >
                              {quoteCta.label}
                              <span className="grid size-8 place-items-center rounded-full bg-navy text-white">
                                <ArrowRight className="size-3.5" aria-hidden="true" />
                              </span>
                            </Link>
                            <Link href="/how-it-works" onClick={() => setOpenMenu(null)} className="mt-4 inline-flex items-center gap-2 text-[14px] text-white/80">
                              <span className="nav-underline">See how it works</span>
                              <ArrowRight className="size-3.5" aria-hidden="true" />
                            </Link>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Pill href={quoteCta.href} event="quote_cta_click" eventParams={{ location: "header" }}>
                {quoteCta.label}
              </Pill>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className={`grid size-11 place-items-center rounded-full border lg:hidden ${solid ? "border-line text-ink" : "border-white/30 text-white"}`}
              aria-expanded={menuOpen}
              aria-controls={mobileNavId}
              onClick={() => (menuOpen ? closeMobile() : openMobile())}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        </div>
        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              ref={panelRef}
              id={mobileNavId}
              aria-label="Mobile"
              tabIndex={-1}
              onKeyDown={onMobileKeyDown}
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.3, ease: easeOut }}
              className={`${scrolled ? "max-h-[calc(100svh-4.5rem)]" : "max-h-[calc(100svh-7.25rem)]"} overflow-x-hidden overflow-y-auto overscroll-contain border-t border-line bg-paper px-5 py-4 outline-none lg:hidden`}
            >
              <ul className="grid gap-1">
                {primaryNav.map((entry) => {
                  if (entry.kind === "link") {
                    const active = pageIsCurrent(pathname, entry.href);
                    return (
                      <li key={entry.href}>
                        <Link
                          href={entry.href}
                          className={`block rounded-2xl px-3 py-3 text-lg font-medium ${active ? "bg-ground text-green" : "text-ink"}`}
                          aria-current={active ? "page" : undefined}
                          onClick={() => closeMobile()}
                        >
                          {entry.label}
                        </Link>
                      </li>
                    );
                  }

                  const groupOpen = Boolean(expanded[entry.id]);
                  const groupId = `${mobileNavId}-${entry.id}`;
                  const active = menuIsCurrent(pathname, entry.items);
                  return (
                    <li key={entry.id}>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-lg font-medium ${active ? "text-green" : "text-ink"}`}
                        aria-expanded={groupOpen}
                        aria-controls={groupId}
                        onClick={() => setExpanded((current) => ({ ...current, [entry.id]: !current[entry.id] }))}
                      >
                        {entry.label}
                        <ChevronDown className={`size-4 motion-safe:transition-transform motion-safe:duration-200 ${groupOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                      <ul id={groupId} className={groupOpen ? "grid gap-1 pb-2 pl-3" : "hidden"} hidden={!groupOpen}>
                        {entry.items.map((item) => {
                          const current = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`block rounded-2xl px-3 py-3 text-[16px] ${current ? "bg-ground text-green" : "text-ink"}`}
                                aria-current={current ? "page" : undefined}
                                onClick={() => closeMobile()}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 border-t border-line pt-4">
                <Pill href={quoteCta.href} event="quote_cta_click" eventParams={{ location: "mobile-menu" }}>
                  {quoteCta.label}
                </Pill>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

function onDesktopMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>, id: NavMenu["id"], close: () => void) {
  const links = [...event.currentTarget.querySelectorAll<HTMLAnchorElement>("a")];
  const index = links.indexOf(document.activeElement as HTMLAnchorElement);
  if (event.key === "ArrowDown") {
    event.preventDefault();
    links[(index + 1) % links.length]?.focus();
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (index <= 0) document.getElementById(`nav-${id}-button`)?.focus();
    else links[index - 1]?.focus();
  } else if (event.key === "Home") {
    event.preventDefault();
    links[0]?.focus();
  } else if (event.key === "End") {
    event.preventDefault();
    links[links.length - 1]?.focus();
  } else if (event.key === "Tab") {
    close();
  }
}
