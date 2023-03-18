import Head from 'next/head'
import PreviewApartments from "@/components/preview-apartments/PreviewApartments";
import PreviewDistricts from "@/components/preview-districts/PreviewDistricts";
import Intro from "@/components/intro/Intro";
import LayoutBlock from "@/layouts/layout-block/LayoutBlock";
import PreviewApartmentsFood from "@/components/preview-apartments-food/PreviewApartmentsFood";
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro/>
        <LayoutBlock title="Наши лучшие инвестиционные предложения" subtitle="Мы отобрали, проверили и рассчитали прибыльность каждого объекта">
          <PreviewApartments/>
          <PreviewApartmentsFood/>
        </LayoutBlock>
        <LayoutBlock title="Новости и аналитика рынка недвижимости" subtitle="Последние новости и аналитический отчеты, а также полезные советы наших экспетров">
          <PreviewDistricts/>
        </LayoutBlock>
      </main>
    </>
  )
}
