<script setup>
import foto1 from "@/assets/img/cards/foto1.jpeg";
import foto2 from "@/assets/img/cards/foto2.jpeg";
import foto3 from "@/assets/img/cards/foto3.jpeg";

const cards = [
  {
    title: "Vrachtvervoer",
    text: "Voor het vervoer van pallets, rolcontainers en meer kunt u rekenen op ons. Wij beschikken over een veelzijdig wagenpark met bakwagens tot 18 ton, geschikt voor uiteenlopende vrachten. Of het nu gaat om dagelijkse distributie of speciaal transport: wij vervoeren uw lading met zorg en precisie. Alles wat in de wagen past, brengen wij veilig en op tijd naar de juiste bestemming.",
    img: foto1,
  },
  {
    title: "Koeriers diensten",
    text: "Snel en betrouwbaar van A naar B of het nu om een enveloppe gaat of een pallet. Onze koeriers rijden door heel Nederland en staan klaar voor spoedritten en geplande leveringen. Snel ter plaatsen en met zorg geleverd.",
    img: foto2,
  },
  {
    title: "Speciaal transport",
    text: "Ook voor uitzonderlijk transport bent u bij ons aan het juiste adres. Of het nu gaat om grote objecten, leveringen met een verhuislift, het takelen van goederen of het omhoog brengen met een traploper – wij zorgen voor een passende oplossing.",
    img: foto3,
  },
];
</script>

<template>
  <section>
    <div class="max-w-[1600px] mx-auto">
      <div
          class="relative z-0 max-w-[1600px] mx-auto lg:flex-row justify-between items-center px-10 py-20"
      >
        <h1
            class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-16"
        >
          Onze specializaties
        </h1>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
              v-for="(card, index) in cards"
              :key="index"
              class="bg-white shadow-md overflow-hidden flex flex-col"
          >
            <img
                :src="card.img"
                :alt="card.title"
                class="h-48 w-full object-cover"
            />
            <div class="p-6 flex flex-col flex-grow bg-middendorp_white">
              <h3
                  class="text-xl font-bold mb-3 text-middendorp_darkgreen"
              >
                {{ card.title }}
              </h3>
              <p class="text-gray-600 flex-grow">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>



