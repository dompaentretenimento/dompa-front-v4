import React from "react";

type Product = {
  id: string;
  label: string;
  prefix?: string;
};

type HeaderProdutosProps = {
  products: Product[];
  selected: string;
  setSelected: (id: string) => void;
};

export default function HeaderProdutos({
  products,
  selected,
  setSelected,
}: HeaderProdutosProps) {
  return (
    <nav
      aria-label="Produtos"
      className="my-lg rounded-button p-nano gap-[8px] flex justify-center bg-primary-tinted text-primary-pure font-regular title-small desktop:text-sm desktop:w-max desktop:mx-auto"
    >
      <ul className="flex gap-[8px]">
        {products.map((product) => (
          <li key={product.id}>
            <button
              className={`px-nano py-quark desktop:py-nano desktop:px-xs cursor-pointer rounded-button transition-all duration-300 hover:shadow-level3 ${
                selected === product.id
                  ? "bg-primary-pure hover:bg-primary-dark active:bg-primary-deepest active:shadow-none text-essence-ivory bold"
                  : "hover:bg-primary-pale active:bg-notfoundtoken active:shadow-none"
              }`}
              onClick={() =>
                document.startViewTransition(() => setSelected(product.id))
              }
            >
              {product.prefix && (
                <span className="desktop:inline-block hidden">
                  {product.prefix}&nbsp;
                </span>
              )}
              {product.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
