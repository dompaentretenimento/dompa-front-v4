"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/front/newsletter/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) throw new Error(`Erro: ${res.statusText}`);

      toast.success("Inscrição realizada com sucesso!");
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao se inscrever na newsletter.");
    }
  };

  return (
    <form className="mt-xs desktop:flex items-center" onSubmit={handleSubmit}>
      <input
        className="py-quark px-nano bg-essence-ivory text-neutral-darker w-full rounded-quark border-hairline mb-nano desktop:mb-none desktop:mr-nano desktop:ml-xs transition-colors duration-300 hover:bg-neutral-pale"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="body-large text-essence-charcoal bg-essence-ivory w-full rounded-button px-xs py-quark cursor-pointer transition-all duration-300 hover:text-essence-ivory hover:shadow-level3 hover:bg-neutral-darker active:bg-neutral-deepest"
      >
        Assinar Newsletter
      </button>
    </form>
  );
}
