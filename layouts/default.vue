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
        <div class="version">
          <div class="client">
            <p class="version-label">Client</p>
            <p class="version-number">Version: 1.0.0</p>
            <p class="build-number">Build: 001 (Development)</p>
          </div>
          <div class="server">
            <p class="version-label">Server</p>
            <p class="version-number">Version: X.X.X</p>
            <p class="build-number">Build: XXX</p>
          </div>
        </div>
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
  @apply fixed shadow-md bg-slate-50 p-2 w-40 bottom-0 left-0 top-12 flex flex-col justify-between;
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

aside .version {
  @apply text-slate-300 text-xs;
}

aside .version .version-label {
  @apply text-sm;
}

aside .version > div {
  @apply mb-2;
}

main {
  @apply ml-40 p-3;
}
</style>
