import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-neutral-deepest py-xxxl px-xs text-essence-ivory desktop:px-md desktop:py-giant">
      <div className="desktop:px-[118px]">
        <div className="desktop:flex justify-between">
          <div className="flex items-center pb-md">
            <Image
              src="/footer/DompaWhite.svg"
              alt="Dompa Logo"
              width={123}
              height={24}
              style={{ width: "123px", height: "24px" }}
              className="mr-xs"
            />
            <p className="label-medium">
              Revolucionando
              <br />o Mercado com
              <br />
              Soluções inteligentes
            </p>
          </div>

          <div className="p-xs bg-neutral-deep rounded-nano border-1 border-neutral-darker desktop:flex  items-center">
            <p className="title-medium">
              Receba novidades, campanhas{" "}
              <br className="hidden desktop:inline-block" /> exclusivas e
              benefícios direto no seu e-mail.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-md flex items-center">
          <p className="text-xs font-semibold mb-2 mr-xs title-medium desktop:hidden">
            Siga-nos!
          </p>
          <p className="text-xs font-semibold mb-2 mr-xs title-medium hidden desktop:inline-block">
            Siga-nos nas redes!
          </p>
          <div className="flex ">
            <Link
              className="mr-xs rounded-button border-hairline p-quark hover:bg-neutral-pale transition-colors duration-300"
              target="_blank"
              href="https://www.instagram.com/grupodompa/"
              aria-label="Instagram"
            >
              <Image
                src="/footer/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
            {/*<Link*/}
            {/*  className="mr-xs rounded-button border-hairline p-quark hover:bg-neutral-pale transition-colors duration-300"*/}
            {/*  target="_blank"*/}
            {/*  href="https://www.youtube.com/"*/}
            {/*  aria-label="YouTube"*/}
            {/*>*/}
            {/*  <Image*/}
            {/*    src="/footer/Youtube.svg"*/}
            {/*    alt="YouTube"*/}
            {/*    width={24}*/}
            {/*    height={24}*/}
            {/*    style={{ width: "24px", height: "24px" }}*/}
            {/*  />*/}
            {/*</Link>*/}
            <Link
              className=" rounded-button border-hairline p-quark hover:bg-neutral-pale transition-colors duration-300"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511916245978&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Dompa!"
              aria-label="WhatsApp"
            >
              <Image
                src="/footer/Whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
          </div>
        </div>

        <div className="bg-neutral-pure w-full h-[1px] my-md" />

        <address className="body-small not-italic">
          Dompa Entretenimento Ltda e <br className="desktop:hidden" />
          48.935.528/0001-89 -{" "}
          <Link
            target="_blank"
            href="https://dompa-file-folder.s3.sa-east-1.amazonaws.com/static-uploads/site+dompa_politica+_de_privacidade.pdf"
            className="underline"
          >
            Política de Privacidade
          </Link>
        </address>
      </div>
    </footer>
  );
}
