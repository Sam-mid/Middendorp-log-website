<script setup>
import logo from "@/assets/img/middendorp_logo_wit.svg"
</script>

<template>
  <footer id="footer" class="bg-gradient-to-b from-middendorp_darkgreen to-middendorp_black text-white px-8 py-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
      <!-- Bedrijfsinfo -->
      <div class="animate-fade-in-left">
        <!-- Logo -->
        <img
            :src="logo"
            alt="Middendorp Logistiek"
            class="w-32 sm:w-52 md:w-56 mb-8 hover:opacity-80 transition-opacity"
        />
        <p class="text-base leading-relaxed mb-2">
          <span class="font-semibold">Adres:</span><br />
          Veenpoldersweg 32<br />
          2266 GA Leidschendam
        </p>
        <p class="mt-6 text-base leading-relaxed">
          <span class="font-semibold block mb-2">Contact:</span>
          Telefoon:
          <a
              href="tel:0715801918"
              class="text-middendorp_white underline hover:text-middendorp_green transition-colors font-semibold"
          >071-5801918</a
          ><br />
          E-mail:
          <a
              href="mailto:info@middendorplogistiek.nl"
              class="text-middendorp_white underline hover:text-middendorp_green transition-colors font-semibold"
          >info@middendorplogistiek.nl</a
          >
        </p>
      </div>

      <!-- Google Maps -->
      <div class="w-full overflow-hidden shadow-2xl animate-fade-in-right">
        <iframe
            class="w-full h-64"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Veenpoldersweg%2032%E2%80%A82266%20GA%20Leidschendam+(middendorp%20logistiek)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            aria-label="Kaart met locatie Middendorp logistiek"
        ></iframe>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-1 bg-gradient-to-r from-middendorp_green via-middendorp_white to-middendorp_green my-8 rounded-full"></div>

    <!-- Copyright -->
    <div class="text-center text-sm opacity-90 text-middendorp_white">
      &copy; 2025 MIDDENDORP Logistiek. Alle rechten voorbehouden.
    </div>
  </footer>
</template>

<style scoped>
footer a {
  transition: color 0.3s ease;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

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
</style>
