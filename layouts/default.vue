<template>
  <div>
    <header>
      <h1>Leitstellen Simulator</h1>
    </header>
    <div>
      <aside>
        <nav>
          <nuxt-link to="/">Übersicht</nuxt-link>
          <nuxt-link to="/missions">Einsätze</nuxt-link>
          <nuxt-link to="/buildings">Gebäude</nuxt-link>
          <nuxt-link to="/vehicles">Fahrzeuge</nuxt-link>
        </nav>
      </aside>
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "default",
});
</script>

<style scoped>
header {
  @apply bg-red-600 text-slate-50 p-3 shadow-md fixed left-0 top-0 right-0;
}

header + * {
  @apply mt-12;
}

aside {
  @apply fixed shadow-md h-full bg-slate-50 p-2 w-40;
}

aside nav {
  @apply flex flex-col w-full gap-1;
}

aside a {
  @apply rounded p-1
  hover:bg-red-200;
}

aside a.nuxt-link-exact-active {
  @apply bg-red-600 text-slate-50
  hover:bg-red-700;
}

main {
  @apply ml-40 p-3;
}
</style>
