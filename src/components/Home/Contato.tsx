"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@react-input/mask";
import { useEffect } from "react";
import { toast } from "sonner";

const formSchema = z
  .object({
    tipoDocumento: z.string().min(1, "Selecione tipo de document"),
    document: z.string().min(11, "Documento é obrigatório"),
    name: z.string().min(3, "Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(15, "Telefone inválido"),
    companyName: z.string().min(1, "Nome da empresa é obrigatório"),
    servico: z.string().min(1, "Selecione um serviço"),
    message: z.string().min(1, "Mensagem é obrigatória"),
  })
  .refine(
    (data) => {
      const cleaned = data.document.replace(/\D/g, "");
      return data.tipoDocumento === "cpf"
        ? cleaned.length === 11
        : cleaned.length === 14;
    },
    {
      message: "Documento inválido",
      path: ["document"],
    }
  );

type FormData = z.infer<typeof formSchema>;

export default function Contato() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const tipoDocumento = watch("tipoDocumento");

  const onSubmit = async (data: FormData) => {
    const payload = {
      name: data.name,
      document: data.document.replace(/\D/g, ""),
      email: data.email,
      phone: data.phone.replace(/\D/g, ""),
      companyName: data.companyName,
      message: data.message,
      desiredService: [
        {
          value: data.servico,
          label: data.servico,
        },
      ],
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/dompa/talkToUs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Erro: ${res.statusText}`);
      }

      console.log(payload);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch {
      toast.error("Erro ao enviar:");
    }
  };

  useEffect(() => {
    setValue("document", "");
  }, [tipoDocumento, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-xs py-xxxl max-w-[684px] mx-auto text-neutral-darker"
    >
      <h2 className="mb-lg headline-medium text-center text-primary-pure">
        Fale Conosco
      </h2>

      <div className="flex flex-col gap-[24px]">
        <div>
          <label htmlFor="name" className="block mb-nano label-large">
            Nome Completo
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
          />
          {errors.name && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="tipoDocumento" className="block mb-nano label-large">
            Tipo de documento
          </label>
          <select
            id="tipoDocumento"
            {...register("tipoDocumento")}
            className="rounded-quark border-hairline p-nano w-full appearance-none transition-colors duration-300 hover:bg-neutral-pale"
          >
            <option value="">Selecione CPF ou CNPJ</option>
            <option value="cpf">CPF</option>
            <option value="cnpj">CNPJ</option>
          </select>
          {errors.tipoDocumento && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.tipoDocumento.message}
            </span>
          )}
        </div>

        {tipoDocumento && (
          <div>
            <InputMask
              {...register("document")}
              mask={
                tipoDocumento === "cpf"
                  ? "___.___.___-__"
                  : "__.___.___/____-__"
              }
              replacement={{ _: /\d/ }}
              value={watch("document") || ""}
              onChange={(e) => setValue("document", e.target.value)}
              className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
            />
            {errors.document && (
              <span className="text-red-500 text-xxs text-error-pure">
                {errors.document.message}
              </span>
            )}
          </div>
        )}

        <div className="desktop:flex justify-between">
          <div className="desktop:flex-1 desktop:mr-md">
            <label htmlFor="email" className="block mb-nano label-large">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="on"
              {...register("email")}
              className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
            />
            {errors.email && (
              <span className="text-red-500 text-xxs text-error-pure">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="desktop:flex-1 mt-md desktop:mt-none">
            <label htmlFor="phone" className="block mb-nano label-large">
              Telefone
            </label>
            <InputMask
              id="phone"
              {...register("phone")}
              mask="(__) _____-____"
              replacement={{ _: /\d/ }}
              value={watch("phone") || ""}
              onChange={(e) =>
                setValue("phone", e.target.value, { shouldValidate: true })
              }
              className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
            />
            {errors.phone && (
              <span className="text-red-500 text-xxs text-error-pure">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="companyName" className="block mb-nano label-large">
            Nome da empresa
          </label>
          <input
            id="companyName"
            type="text"
            {...register("companyName")}
            className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
          />
          {errors.companyName && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.companyName.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="servico" className="block mb-nano label-large">
            Serviço desejado
          </label>
          <select
            id="servico"
            {...register("servico")}
            className="rounded-quark border-hairline p-nano w-full appearance-none transition-colors duration-300 hover:bg-neutral-pale"
          >
            <option value=""></option>
            <option value="site">Criação de site</option>
            <option value="seo">Otimização SEO</option>
            <option value="marketing">Marketing Digital</option>
          </select>
          {errors.servico && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.servico.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-nano label-large">
            Mensagem
          </label>
          <textarea
            id="message"
            {...register("message")}
            className="rounded-quark border-hairline p-nano w-full min-h-[188px] transition-colors duration-300 hover:bg-neutral-pale"
          />
          {errors.message && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="rounded-button text-essence-ivory title-large bg-primary-pure px-xs py-nano w-[207px] cursor-pointer hover:shadow-level3 hover:bg-primary-darker transition-all duration-300 active:shadow-none active:bg-essence-charcoal"
        >
          Enviar Mensagem
        </button>
      </div>
    </form>
  );
}
