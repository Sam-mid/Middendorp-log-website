<script>
import {defineComponent} from "vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import logoUrl from "@/assets/img/middendorp_logo.svg";

export default defineComponent({
  computed: {
    logoUrl() {
      return logoUrl
    }
  },
  components: {Button, Header, Footer,}
})
</script>

<template>
  <Header
      title="Vacatures"
      background="/src/assets/img/vacancy_header.jpeg"
  />

  <div class="bg-middendorp_white">
    <div class="relative z-0 flex flex-col max-w-[1600px] mx-auto lg:flex-col justify-between items-start px-10 py-10 gap-8">
      <div class="flex-1 z-10">
        <h1 class="text-middendorp_darkgreen font-bold  text-3xl lg:text-4xl mb-4">Kom jij ons team versterken?</h1>
        <br />
        <p class="text-lg leading-relaxed">
          Ben jij een enthousiaste chauffeur met rijbewijs C die houdt van afwisseling en uitdaging?
          Zoek je een plek waar collegialiteit en een goede sfeer voorop staan? Dan is Middendorp Logistiek in Leidschendam op zoek naar jou!
        </p>
      </div>


      <div class="flex-1 z-10">
        <h3 class="text-middendorp_darkgreen font-bold text-lg lg:text-2xl mb-4">Waar ga je werken?</h3>
        <p class="text-lg leading-relaxed">
          Middendorp Logistiek is gevestigd in Stompwijk en sinds 1972 een vertrouwde naam in de transportsector.
          Als klein familiebedrijf met een groot hart werken we dagelijks aan uitdagende opdrachten voor klanten zoals Ceva Logistics en KPN.
          Ons team van zes ervaren chauffeurs zorgt voor een collegiale sfeer waarin iedereen telt.
        </p>
      </div>

      <div class="flex-1 z-10">
        <h3 class="text-middendorp_darkgreen font-bold  text-lg lg:text-2xl mb-4">Wat ga je doen?</h3>
        <p class="text-lg leading-relaxed">
          Als chauffeur bij ons vervoer je een breed scala aan ladingen door heel Nederland. Van keukens tot technische installaties: je maakt het mee.
          Je laadt, vervoert en lost vracht en houdt daarbij rekening met de wensen van onze klanten.
          Flexibiliteit is belangrijk, want geen dag is hetzelfde.
        </p>
      </div>
    </div>
  </div>

  <div class="">
    <div class="relative z-0 flex flex-col max-w-[1600px] mx-auto lg:flex-col justify-between items-start px-10 py-10 gap-8">
      <div class="flex-1 z-10">
        <h1 class="text-middendorp_darkgreen font-bold  text-3xl lg:text-4xl mb-4">Wat vragen wij van jou?</h1>
        <br />
        <p class="text-lg leading-relaxed">
          <li>Rijbewijs C en Code 95.</li>
          <li>Enthousiasme voor hard werken en fysiek sjouwen.</li>
          <li>Flexibele instelling en fulltime beschikbaarheid.</li>
          <li>Oog voor detail en professionaliteit richting klanten.</li>
        </p>
      </div>


      <div class="flex-1 z-10">
        <h1 class="text-middendorp_darkgreen font-bold  text-3xl lg:text-4xl mb-4">Wat krijg je van ons?</h1>
        <br />
        <p class="text-lg leading-relaxed">
          <li>Salaris conform schaal D, trede 5.</li>
          <li>Goede arbeidsvoorwaarden volgens de cao.</li>
          <li>Werken in een klein, hecht team.</li>
          <li>Gevarieerde werkdagen en leuke uitdagingen.</li>
          <li>Een fijne werkplek waar waardering voorop staat.</li>
        </p>
      </div>
    </div>
  </div>

  <section id="footer"><Footer /></section>

</template>

<style scoped>
</style>