import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contato from "@/components/Home/Contato";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato conosco para mais informações sobre nossos produtos e serviços.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <Contato />
      <Footer />
    </>
  );
}
