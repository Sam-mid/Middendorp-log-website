<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";

import logoUrl from "@/assets/img/middendorp_logo.svg";
import vacancyHeader from "@/assets/img/vacancy_header.webp";

export default defineComponent({
  components: { Button, Header, Footer },
  setup() {
    return {
      logoUrl,
      vacancyHeader
    };
  }
});
</script>
<template>
  <div class="relative min-h-screen flex flex-col">

    <div class="fixed right-0 top-0 h-full w-[var(--band-width)] bg-middendorp_green -z-10"></div>

    <Header
        title="Vacatures"
        :background="vacancyHeader"
    />

    <!-- Section 1: Intro -->
    <div class="relative overflow-hidden">
      <!-- Achtergrond stopt voor de groene baan rechts, zoals in het design. -->
      <div class="absolute inset-y-0 left-0 right-[var(--band-width)] bg-middendorp_white"></div>
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-middendorp_green rounded-full opacity-5"></div>
      
      <div class="relative z-0 flex flex-col max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-20 gap-12">
        <div class="flex-1 z-10 animate-fade-in-left">
          <h1 class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-6 leading-tight">Kom jij ons team versterken?</h1>
          <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-8"></div>

          <p class="max-w-3xl text-xl leading-snug font-medium text-middendorp_darkgreen">
            Ben jij een enthousiaste chauffeur met rijbewijs C die houdt van afwisseling en uitdaging?
            Zoek je een plek waar collegialiteit en een goede sfeer voorop staan? Dan is Middendorp Logistiek in Leidschendam op zoek naar jou!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="z-10 animate-fade-in">
            <h3 class="text-middendorp_darkgreen font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-3">
              Waar ga je werken?
            </h3>
            <p class="text-lg leading-relaxed text-middendorp_black">
              Middendorp Logistiek is gevestigd in Stompwijk en sinds 1972 een vertrouwde naam in de transportsector.
              Als klein familiebedrijf met een groot hart werken we dagelijks aan uitdagende opdrachten voor klanten zoals Ceva Logistics en KPN.
              Ons team van ervaren chauffeurs zorgt voor een collegiale sfeer waarin iedereen telt.
            </p>
          </div>

          <div class="z-10 animate-fade-in" style="animation-delay: 100ms">
            <h3 class="text-middendorp_darkgreen font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-3">
              Wat ga je doen?
            </h3>
            <p class="text-lg leading-relaxed text-middendorp_black">
              Als chauffeur bij ons vervoer je een breed scala aan ladingen door heel Nederland. Van keukens tot technische installaties: je maakt het mee.
              Je laadt, vervoert en lost vracht en houdt daarbij rekening met de wensen van onze klanten.
              Flexibiliteit is belangrijk, want geen dag is hetzelfde.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden py-20">
      <div class="absolute inset-y-0 left-0 right-[var(--band-width)] bg-white"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-middendorp_green rounded-full opacity-5"></div>
      
      <div class="relative z-0 flex flex-col max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 gap-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="z-10 animate-fade-in-left">
            <h2 class="text-middendorp_darkgreen font-bold text-3xl lg:text-4xl mb-6 flex items-center gap-3">
              Wat vragen wij van jou?
            </h2>
            <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-8"></div>
            <ul class="space-y-4 text-lg text-middendorp_black">
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Rijbewijs C en Code 95.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Enthousiasme voor hard werken en fysiek sjouwen.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Flexibele instelling en fulltime beschikbaarheid.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Oog voor detail en professionaliteit richting klanten.</span>
              </li>
            </ul>
          </div>

          <div class="z-10 animate-fade-in-right">
            <h2 class="text-middendorp_darkgreen font-bold text-3xl lg:text-4xl mb-6 flex items-center gap-3">
              Wat krijg je van ons?
            </h2>
            <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-8"></div>
            <ul class="space-y-4 text-lg text-middendorp_black">
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Salaris conform schaal D, trede 5.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Goede arbeidsvoorwaarden volgens de cao.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Werken in een klein, hecht team.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Gevarieerde werkdagen en leuke uitdagingen.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-middendorp_green font-bold mt-1">•</span>
                <span>Een fijne werkplek waar waardering voorop staat.</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="z-10 flex justify-center mt-8">
          <a
              href="mailto:info@middendorplogistiek.nl"
              class="inline-flex items-center justify-center gap-2 text-white bg-middendorp_green px-10 py-5 text-xl hover:bg-middendorp_darkgreen transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Solliciteer nu!
          </a>
        </div>
      </div>
    </div>

    <section id="footer"><Footer /></section>
  </div>
</template>

<style scoped>
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}
</style>