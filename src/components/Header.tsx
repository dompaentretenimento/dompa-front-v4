"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/#servicos", label: "Serviços" },
    { href: "/#cases", label: "Cases" },
    { href: "/#produtos", label: "Produtos" },
    { href: "/#midia", label: "Mídia" },
    { href: "/contato", label: "Contato" },
  ];

  function isActive(href: string) {
    const normalizedPath = pathname.replace(/\/$/, "") || "/";

    if (href === "/") {
      return normalizedPath === "/";
    }

    if (href.startsWith("/#")) {
      const section = href.split("#")[1];

      if (normalizedPath === "/" && pathname.includes(section)) {
        return true;
      }

      if (
        (section === "cases" && normalizedPath.startsWith("/cases")) ||
        (section === "produtos" && normalizedPath.startsWith("/produtos")) ||
        (section === "servicos" && normalizedPath.startsWith("/servicos"))
      ) {
        return true;
      }

      return false;
    }

    return normalizedPath === href.replace(/\/$/, "");
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className="relative z-50 bg-neutral-tinted py-xs shadow-level3">
      <nav
        className="flex items-center justify-between px-md"
        role="navigation"
        aria-label="Menu principal"
      >
        <div className="flex">
          <Image
            src="/header/Dompa.svg"
            alt="Dompa Logo"
            width={123}
            height={24}
            style={{ width: "123px", height: "24px" }}
          />
          <ul className="hidden desktop:flex ml-md gap-[16px] body-medium text-neutral-darker">
            {navItems.map(({ href, label }) => (
              <li className="p-nano" key={href}>
                <Link
                  href={href}
                  onClick={() => document.startViewTransition()}
                  className={` duration-300 hover:shadow-level3 transition-all rounded-nano p-nano active:shadow-none active:bg-neutral-pale ${
                    isActive(href) ? "text-primary-pure font-bold" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511916245978&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Dompa!"
          aria-label="Converse conosco pelo WhatsApp"
          className="hidden desktop:flex p-quark rounded-button transition-all duration-300 hover:bg-primary-pale hover:shadow-level3 active:shadow-none active:bg-primary-soft"
        >
          <Image
            src="/header/Whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
            style={{ width: "24px", height: "24px" }}
          />
        </Link>
        <div className="flex items-center desktop:hidden">
          {menuOpen ? (
            <button
              onClick={toggleMenu}
              aria-label="Fechar menu"
              className="focus:outline-none"
            >
              <Image
                src="/header/Close.svg"
                alt="Ícone de fechar"
                width={24}
                height={24}
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          ) : (
            <>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511916245978&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Dompa!"
                aria-label="Converse conosco pelo WhatsApp"
              >
                <Image
                  className="mr-xs"
                  src="/header/Whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>

              <button
                onClick={toggleMenu}
                aria-label="Abrir menu"
                className="focus:outline-none"
              >
                <Image
                  src="/header/Burguer.svg"
                  alt="Ícone de menu"
                  width={24}
                  height={24}
                  style={{ width: "24px", height: "24px" }}
                />
              </button>
            </>
          )}
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full desktop:hidden w-full bg-neutral-tinted px-md pt-md text-essence-charcoal transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="body-medium text-neutral-darker">
          {navItems.map(({ href, label }) => (
            <li className="p-nano mb-xs" role="menuitem" key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-300 ${
                  isActive(href) ? "text-primary-pure font-bold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="p-nano">
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511916245978&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Dompa!"
              aria-label="Converse conosco pelo WhatsApp"
              className="flex"
            >
              <Image
                className="mr-xs"
                src="/header/Whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                style={{ width: "16px", height: "16px" }}
              />
              Fale pelo WhatsApp
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
