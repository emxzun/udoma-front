import { Html, Head, Main, NextScript } from 'next/document'
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header/>
        <Main/>
        <Footer/>
        <NextScript/>
      </body>
    </Html>
  )
}
