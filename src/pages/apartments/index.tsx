import React from 'react';
import Apartment from "@/components/apartment/Apartment";
import apartmentExample from "@/images/examples/apartment.jpeg";

const Index = () => {
  const DATA = {
    apartments: [
      {
        title: " ЖК «Atlantis Deluxe»",
        district: "Аламедин",
        img: apartmentExample,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque culpa, dignissimos, distinctio eaque enim error esse facere hic illum inventore magni nihil officiis quae quaerat quisquam recusandae totam ut.",
        price: 123
      },
    ]
  }
  return (
    <>
      <Apartment item={DATA.apartments[0]}/>
    </>
  );
};

export default Index;