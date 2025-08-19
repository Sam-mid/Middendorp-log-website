<template>
  <footer id="footer" class="bg-middendorp_darkgreen text-white px-8 py-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <!-- Bedrijfsinfo -->
      <div>
        <h2 class="text-xl font-bold mb-2">MIDDENDORP Logistiek</h2>
        <p>Veenpoldersweg 32<br />2266 GA Leidschendam</p>
        <p class="mt-4">
          Telefoon: <a href="tel:0701234567" class=" text-middendorp_white underline">070-1234567</a><br />
          E-mail: <a href="mailto:info@middendorplogistiek.nl" class=" text-middendorp_white underline">info@middendorplogistiek.nl</a>
        </p>
      </div>

      <!-- Google Maps -->
      <div class="w-full rounded-md overflow-hidden shadow-lg">
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

    <div class="mt-8 text-center text-sm opacity-80">
      &copy; 2025 MIDDENDORP Logistiek. Alle rechten voorbehouden.
    </div>
  </footer>
</template>

<style scoped>
footer a {
  transition: color 0.3s ease;
}
</style>
