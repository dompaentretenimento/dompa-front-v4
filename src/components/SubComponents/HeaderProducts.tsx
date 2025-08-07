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
              className={`px-nano py-quark desktop:px-xs cursor-pointer  ${
                selected === product.id
                  ? "bg-primary-pure text-essence-ivory bold rounded-button"
                  : ""
              }`}
              onClick={() => setSelected(product.id)}
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
