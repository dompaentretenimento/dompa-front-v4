"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@react-input/mask";
import { useEffect } from "react";

const formSchema = z
  .object({
    tipoDocumento: z.string().min(1, "Selecione tipo de documento"),
    documento: z.string().min(11, "Documento é obrigatório"),
    nome: z.string().min(3, "Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    telefone: z.string().min(15, "Telefone inválido"),
    empresa: z.string().min(1, "Nome da empresa é obrigatório"),
    servico: z.string().min(1, "Selecione um serviço"),
    mensagem: z.string().min(1, "Mensagem é obrigatória"),
  })
  .refine(
    (data) => {
      const cleaned = data.documento.replace(/\D/g, "");
      return data.tipoDocumento === "cpf"
        ? cleaned.length === 11
        : cleaned.length === 14;
    },
    {
      message: "Documento inválido",
      path: ["documento"],
    }
  );

type FormData = z.infer<typeof formSchema>;

export default function Contato() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const tipoDocumento = watch("tipoDocumento");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("documento", "");
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
          <label htmlFor="nome" className="block mb-nano label-large">
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            {...register("nome")}
            className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
          />
          {errors.nome && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.nome.message}
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
              {...register("documento")}
              mask={
                tipoDocumento === "cpf"
                  ? "___.___.___-__"
                  : "__.___.___/____-__"
              }
              replacement={{ _: /\d/ }}
              value={watch("documento") || ""}
              onChange={(e) => setValue("documento", e.target.value)}
              className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
            />
            {errors.documento && (
              <span className="text-red-500 text-xxs text-error-pure">
                {errors.documento.message}
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
            <label htmlFor="telefone" className="block mb-nano label-large">
              Telefone
            </label>
            <InputMask
              id="telefone"
              {...register("telefone")}
              mask="(__) _____-____"
              replacement={{ _: /\d/ }}
              value={watch("telefone") || ""}
              onChange={(e) =>
                setValue("telefone", e.target.value, { shouldValidate: true })
              }
              className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
            />
            {errors.telefone && (
              <span className="text-red-500 text-xxs text-error-pure">
                {errors.telefone.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="empresa" className="block mb-nano label-large">
            Nome da empresa
          </label>
          <input
            id="empresa"
            type="text"
            {...register("empresa")}
            className="rounded-quark border-hairline p-nano w-full transition-colors duration-300 hover:bg-neutral-pale"
          />
          {errors.empresa && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.empresa.message}
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
          <label htmlFor="mensagem" className="block mb-nano label-large">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            {...register("mensagem")}
            className="rounded-quark border-hairline p-nano w-full min-h-[188px] transition-colors duration-300 hover:bg-neutral-pale"
          />
          {errors.mensagem && (
            <span className="text-red-500 text-xxs text-error-pure">
              {errors.mensagem.message}
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
