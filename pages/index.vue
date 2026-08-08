<script setup>
useHead({ title: 'Noticias CR - Inicio' })
</script>

<template>
  <div class="container">
    <header class="hero">
      <div class="hero-content">
        <span class="course">Arquitectura de Información</span>

        <h1>📰 Noticias CR</h1>

        <p class="subtitle">
          Blog de noticias nacionales — sucesos, deportes y espectáculos
        </p>

        <div class="author">
          Isaac Felipe Brenes Calderón
        </div>
      </div>
    </header>

    <main>
      <section class="section-header">
        <span>Actualidad nacional</span>
        <h2>Explora nuestras categorías</h2>
        <p>
          Consulta las principales noticias organizadas por temática.
        </p>
      </section>

      <nav class="categories">
        <NuxtLink to="/categoria/sucesos" class="cat-card sucesos">
          <div class="card-icon">⚠️</div>

          <div class="card-content">
            <span class="card-label">Noticias</span>
            <h2>Sucesos</h2>
            <p>Lo último en sucesos nacionales</p>
          </div>

          <span class="arrow">→</span>
        </NuxtLink>

        <NuxtLink to="/categoria/deportes" class="cat-card deportes">
          <div class="card-icon">⚽</div>

          <div class="card-content">
            <span class="card-label">Actualidad</span>
            <h2>Deportes</h2>
            <p>Toda la acción deportiva</p>
          </div>

          <span class="arrow">→</span>
        </NuxtLink>

        <NuxtLink to="/categoria/espectaculos" class="cat-card espectaculos">
          <div class="card-icon">🎬</div>

          <div class="card-content">
            <span class="card-label">Entretenimiento</span>
            <h2>Espectáculos</h2>
            <p>Farándula y entretenimiento</p>
          </div>

          <span class="arrow">→</span>
        </NuxtLink>
      </nav>

      <div class="search-area">
        <div>
          <span class="search-small">¿Buscas algo específico?</span>
          <h3>Encuentra una noticia</h3>
        </div>

        <div class="search-link">
          <NuxtLink to="/buscar">
            <span>🔍</span>
            Buscar noticias
          </NuxtLink>
        </div>
      </div>
    </main>

    <footer>
      <p>Noticias CR</p>
      <span>Isaac Felipe Brenes Calderón · Arquitectura de Información</span>
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(29, 78, 216, 0.08), transparent 30%),
    #f4f7fb;
  color: #172033;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

/* HEADER */

.hero {
  position: relative;
  overflow: hidden;
  padding: 75px 24px 115px;
  background:
    linear-gradient(135deg, rgba(10, 29, 63, 0.97), rgba(20, 67, 122, 0.95)),
    #0a1d3f;
  color: white;
}

.hero::before {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;
  top: -220px;
  right: -100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.hero::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  bottom: -160px;
  left: 8%;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.13);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(1100px, 100%);
  margin: 0 auto;
}

.course {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #dbeafe;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
}

.subtitle {
  max-width: 650px;
  margin: 22px 0 0;
  color: #cfdbec;
  font-size: 1.15rem;
  line-height: 1.7;
}

.author {
  margin-top: 26px;
  color: #93c5fd;
  font-size: 0.95rem;
  font-weight: 600;
}

/* MAIN */

main {
  position: relative;
  z-index: 2;
  width: min(1100px, calc(100% - 40px));
  margin: -55px auto 0;
}

.section-header {
  margin-bottom: 30px;
  padding: 32px;
  border: 1px solid #e5eaf2;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 14px 50px rgba(15, 23, 42, 0.08);
}

.section-header > span {
  color: #2563eb;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-header h2 {
  margin: 8px 0;
  color: #111827;
  font-size: 1.8rem;
  letter-spacing: -0.03em;
}

.section-header p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

/* CARDS */

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.cat-card {
  position: relative;
  display: flex;
  min-height: 255px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 28px;
  border: 1px solid #e5eaf2;
  border-radius: 22px;
  background: white;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.05);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.cat-card::after {
  content: "";
  position: absolute;
  width: 170px;
  height: 170px;
  top: -90px;
  right: -90px;
  border-radius: 50%;
  opacity: 0.1;
}

.cat-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

.sucesos::after {
  background: #ef4444;
}

.deportes::after {
  background: #16a34a;
}

.espectaculos::after {
  background: #9333ea;
}

.sucesos:hover {
  border-color: rgba(239, 68, 68, 0.3);
}

.deportes:hover {
  border-color: rgba(22, 163, 74, 0.3);
}

.espectaculos:hover {
  border-color: rgba(147, 51, 234, 0.3);
}

.card-icon {
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #f8fafc;
  font-size: 1.55rem;
}

.card-label {
  display: inline-block;
  margin-bottom: 6px;
  color: #94a3b8;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-content h2 {
  margin: 0 0 10px;
  color: #172033;
  font-size: 1.5rem;
  letter-spacing: -0.025em;
}

.card-content p {
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.55;
}

.arrow {
  position: absolute;
  right: 25px;
  bottom: 25px;
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f1f5f9;
  color: #334155;
  font-size: 1.15rem;
  transition: all 0.2s ease;
}

.cat-card:hover .arrow {
  transform: translateX(3px);
  background: #172033;
  color: white;
}

/* SEARCH */

.search-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  margin-top: 28px;
  padding: 30px 34px;
  border-radius: 20px;
  background: #172033;
  color: white;
  box-shadow: 0 12px 35px rgba(15, 23, 42, 0.12);
}

.search-small {
  color: #93c5fd;
  font-size: 0.8rem;
  font-weight: 600;
}

.search-area h3 {
  margin: 5px 0 0;
  font-size: 1.35rem;
}

.search-link a {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 20px;
  border-radius: 12px;
  background: white;
  color: #172033;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.search-link a:hover {
  transform: translateY(-2px);
  background: #eff6ff;
}

/* FOOTER */

footer {
  width: min(1100px, calc(100% - 40px));
  margin: 55px auto 0;
  padding: 25px 0 35px;
  border-top: 1px solid #dbe2eb;
  text-align: center;
}

footer p {
  margin: 0 0 5px;
  color: #172033;
  font-weight: 700;
}

footer span {
  color: #94a3b8;
  font-size: 0.85rem;
}

/* RESPONSIVE */

@media (max-width: 850px) {
  .categories {
    grid-template-columns: 1fr;
  }

  .cat-card {
    min-height: 210px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 55px 20px 90px;
  }

  main {
    width: min(100% - 24px, 1100px);
    margin-top: -45px;
  }

  .section-header {
    padding: 25px;
  }

  .search-area {
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
  }

  .search-link,
  .search-link a {
    width: 100%;
  }

  .search-link a {
    justify-content: center;
  }

  footer {
    width: calc(100% - 24px);
  }
}
</style>