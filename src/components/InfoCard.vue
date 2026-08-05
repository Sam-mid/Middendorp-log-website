<script setup>
import { ref } from 'vue';
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
          class="relative z-0 max-w-[1600px] mx-auto lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-20"
      >
        <h1
            class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-6"
        >
          Onze specialisaties
        </h1>
        <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-16"></div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
              v-for="(card, index) in cards"
              :key="index"
              class="group bg-middendorp_white flex flex-col animate-fade-in"
              :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Schuine onderrand, in dezelfde richting als de inham in de hero -->
            <div class="card-media h-48 w-full overflow-hidden">
              <img
                  :src="card.img"
                  :alt="card.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div class="px-6 pb-8 pt-4 flex flex-col flex-grow">
              <h3
                  class="text-xl font-bold text-middendorp_darkgreen tracking-wide"
              >
                {{ card.title }}
              </h3>
              <!-- Zelfde groene streep als onder de sectiekoppen; groeit bij hover -->
              <div class="h-1 w-12 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mt-3 mb-5 transition-all duration-300 group-hover:w-24"></div>
              <p class="text-gray-700 flex-grow leading-relaxed">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* De onderrand van de foto loopt schuin weg, in dezelfde richting als de
   inham in de hero: naar links aflopend. De hoek van de inham zelf (0,3573
   van de hoogte) zou over de breedte van een kaart ruim 170px zakken, dus
   hier een vlakkere variant die het motief herhaalt zonder de kaart te
   verminken. */
.card-media {
  --card-slant: 24px;

  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--card-slant)), 0 100%);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}
</style>



