<template>
  <div>
    <section class="bg-gradient-to-b from-rose-50 to-white box-border py-24">
      <div
        class="container flex flex-col lg:flex-row items-center gap-16 mx-auto box-border px-4"
      >
        <div class="flex-1 text-center lg:text-left">
          <div
            class="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-8 animate-fade-in"
          >
            <span class="iconify i-heroicons:sparkles"></span>
            <span class="text-sm font-medium">Crie memórias eternas</span>
          </div>

          <h1
            class="text-5xl lg:text-7xl font-bold mb-8 font-['Playfair_Display'] leading-tight bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent"
          >
            Eternize Sua <br />
            História de Amor
          </h1>

          <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Crie uma página única e especial para celebrar sua história de amor.
            Compartilhe momentos, memórias e todo o carinho que existe entre
            vocês.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <NuxtLink class="nv-btn">
              <span
                class="iconify i-heroicons:heart flex-shrink-0 h-6 w-6"
                aria-hidden="true"
              ></span>
              Criar Sua Página de Amor
            </NuxtLink>

            <UButton color="gray">
              <span
                class="iconify i-heroicons:information-circle flex-shrink-0 h-6 w-6"
              ></span>
              Saiba Mais
            </UButton>
          </div>
        </div>

        <div class="flex-1 relative">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&amp;auto=format&amp;fit=crop&amp;q=80"
              alt=""
              class="rounded-2xl shadow-xl w-full max-w-lg mx-auto relative z-10"
            />

            <div
              class="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent rounded-2xl z-20"
            ></div>

            <div
              class="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-100 rounded-full z-0"
            ></div>

            <div
              class="absolute -top-6 -left-6 w-32 h-32 bg-rose-50 rounded-full z-0"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-bold mb-6 font-['Playfair_Display']">
          Como Funciona
        </h2>

        <p class="text-xl text-gray-600">
          Criar sua página de amor é simples e rápido. Em poucos minutos, você
          terá uma página única para compartilhar.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors"
          >
            <span
              class="iconify i-heroicons:heart w-8 h-8"
              aria-hidden="true"
            ></span>
          </div>

          <h3 class="text-2xl font-semibold mb-4">Personalização Total</h3>

          <p class="text-gray-600 leading-relaxed">
            Crie uma página única com suas fotos favoritas, mensagens especiais
            e momentos inesquecíveis do casal. Cada detalhe pode ser
            personalizado do seu jeito.
          </p>
        </div>

        <div
          class="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors"
          >
            <span
              class="iconify i-heroicons:sparkles w-8 h-8"
              aria-hidden="true"
            ></span>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Fácil de Criar</h3>
          <p class="text-gray-600 leading-relaxed">
            Interface intuitiva que permite criar sua página em poucos minutos,
            sem necessidade de conhecimentos técnicos. Apenas preencha,
            visualize e compartilhe.
          </p>
        </div>

        <div
          class="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors"
          >
            <span
              class="iconify i-heroicons:share w-8 h-8"
              aria-hidden="true"
            ></span>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Compartilhe o Amor</h3>
          <p class="text-gray-600 leading-relaxed">
            Compartilhe sua história de amor com amigos e familiares através de
            um link personalizado. Suas memórias estarão sempre disponíveis para
            quem você ama.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div
        class="container mx-auto px-4"
      >
        <div
          class="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            class="text-4xl font-bold mb-6 font-['Playfair_Display']"
          >
            Planos Disponíveis
          </h2>
          <p
            class="text-xl text-gray-600"
          >
            Escolha o plano ideal para eternizar sua história de amor
          </p>
        </div>

        <div
          class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div
            class="bg-white rounded-2xl shadow-lg p-8 relative"
          >
            <div
              class="text-center mb-8"
            >
              <h3
                class="text-2xl font-bold mb-4"
              >
                Básico
              </h3>

              <div
                class="flex items-baseline justify-center gap-2"
              >
                <span
                  class="text-4xl font-bold"
                  >Grátis</span
                >
                <span
                  class="text-gray-500"
                  >/mês</span
                >
              </div>
            </div>
            <ul
              class="space-y-4 mb-8"
            >
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Página personalizada
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Até 8 fotos
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Link compartilhável
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Suporte básico
              </li>
              <!--]-->
            </ul>
            <a
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-current text-gray-500 dark:text-gray-400 hover:bg-gray-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-gray-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 w-full flex justify-center items-center"
              href="/#""
              >
              Começar Agora
              </a>
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-8 relative"
          >
            <div
              class="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium"
            >
              Mais Popular
            </div>
            <div
              class="text-center mb-8"
            >
              <h3
                class="text-2xl font-bold mb-4"
              >
                Premium
              </h3>
              <div
                class="flex items-baseline justify-center gap-2"
              >
                <span
                  class="text-4xl font-bold"
                  >R$ 29,90</span
                ><span
                  class="text-gray-500"
                  >/mês</span
                >
              </div>
            </div>
            <ul
              class="space-y-4 mb-8"
            >
              <!--[-->
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Tudo do plano Básico
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Até 20 fotos
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Domínio personalizado
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Temas exclusivos
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Suporte prioritário
              </li>
            </ul>
            <a
              class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-500 aria-disabled:bg-rose-500 dark:bg-rose-400 dark:hover:bg-rose-500 dark:disabled:bg-rose-400 dark:aria-disabled:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:focus-visible:outline-rose-400 w-full flex justify-center items-center"
              href="/create"
              >
              Começar Agora
              </a
            >
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-8 relative"
          >
            <div
              class="text-center mb-8"
            >
              <h3
                class="text-2xl font-bold mb-4"
              >
                Pro
              </h3>
              <div
                class="flex items-baseline justify-center gap-2"
              >
                <span
                  class="text-4xl font-bold"
                  >R$ 49,90</span
                ><span
                  class="text-gray-500"
                  >/mês</span
                >
              </div>
            </div>
            <ul
              class="space-y-4 mb-8"
            >
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Tudo do plano Premium
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Fotos ilimitadas
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Vídeos
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Análise de visitas
              </li>
              <li
                class="flex items-center gap-2 text-gray-600"
              >
                <span
                  class="iconify i-heroicons:check-circle text-rose-500 w-5 h-5"
                  aria-hidden="true"
                ></span>
                Suporte VIP
              </li>
            </ul>
            <a
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-current text-gray-500 dark:text-gray-400 hover:bg-gray-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-gray-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 w-full flex justify-center items-center"
              href="/#"
              >
              Começar Agora
              </a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50" data-v-inspector="pages/index.vue:173:7">
      <div
        class="container mx-auto px-4"
        data-v-inspector="pages/index.vue:174:9"
      >
        <div
          class="text-center max-w-3xl mx-auto mb-16"
          data-v-inspector="pages/index.vue:175:11"
        >
          <h2
            class="text-4xl font-bold mb-6 font-['Playfair_Display']"
            data-v-inspector="pages/index.vue:176:13"
          >
            Perguntas Frequentes
          </h2>
          <p
            class="text-xl text-gray-600"
            data-v-inspector="pages/index.vue:179:13"
          >
            Tire suas dúvidas sobre nossa plataforma
          </p>
        </div>
        <div
          class="max-w-3xl mx-auto"
          data-v-inspector="pages/index.vue:183:11"
        >
          <div
            class="w-full flex flex-col bg-white rounded-xl"
            data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue:2:3"
          >
            <!--[-->
            <div
              data-headlessui-state=""
              class="w-full flex flex-col"
              data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue:3:5"
            >
              <button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 inline-flex items-center mb-1.5 w-full"
                id="headlessui-disclosure-button-v-0-0"
                aria-expanded="false"
                data-headlessui-state=""
                aria-controls="headlessui-disclosure-panel-v-0-1"
              >
                <!--[--><!--[--><span
                  class="iconify i-heroicons:question-mark-circle flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--[--><span class="text-left break-all line-clamp-1"
                  >Como funciona o processo de criação da página?</span
                ><!--]--><!--[--><span
                  class="iconify i-heroicons:chevron-down-20-solid h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--]-->
              </button>
              <div style="height: 0px; display: none" class="">
                <div
                  id="headlessui-disclosure-panel-v-0-1"
                  data-headlessui-state=""
                  class="text-sm text-gray-500 dark:text-gray-400 pt-1.5 pb-3"
                >
                  <!--[-->O processo é muito simples! Basta clicar em "Criar
                  Página", preencher as informações do casal, adicionar fotos e
                  uma mensagem especial. Em poucos minutos sua página estará
                  pronta para ser compartilhada.<!--]-->
                </div>
              </div>
            </div>
            <div
              data-headlessui-state=""
              class="w-full flex flex-col"
              data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue:3:5"
            >
              <button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 inline-flex items-center mb-1.5 w-full"
                id="headlessui-disclosure-button-v-0-2"
                aria-expanded="false"
                data-headlessui-state=""
                aria-controls="headlessui-disclosure-panel-v-0-3"
              >
                <!--[--><!--[--><span
                  class="iconify i-heroicons:pencil flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--[--><span class="text-left break-all line-clamp-1"
                  >Posso editar a página depois de criada?</span
                ><!--]--><!--[--><span
                  class="iconify i-heroicons:chevron-down-20-solid h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--]-->
              </button>
              <div style="display: none">
                <div
                  id="headlessui-disclosure-panel-v-0-3"
                  data-headlessui-state=""
                  class="text-sm text-gray-500 dark:text-gray-400 pt-1.5 pb-3"
                >
                  <!--[-->Sim! Você pode editar sua página a qualquer momento,
                  alterando fotos, textos e outros elementos para manter sua
                  história sempre atualizada.<!--]-->
                </div>
              </div>
            </div>
            <div
              data-headlessui-state=""
              class="w-full flex flex-col"
              data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue:3:5"
            >
              <button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 inline-flex items-center mb-1.5 w-full"
                id="headlessui-disclosure-button-v-0-4"
                aria-expanded="false"
                data-headlessui-state=""
                aria-controls="headlessui-disclosure-panel-v-0-5"
              >
                <!--[--><!--[--><span
                  class="iconify i-heroicons:clock flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--[--><span class="text-left break-all line-clamp-1"
                  >Por quanto tempo minha página fica disponível?</span
                ><!--]--><!--[--><span
                  class="iconify i-heroicons:chevron-down-20-solid h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--]-->
              </button>
              <div style="display: none">
                <div
                  id="headlessui-disclosure-panel-v-0-5"
                  data-headlessui-state=""
                  class="text-sm text-gray-500 dark:text-gray-400 pt-1.5 pb-3"
                >
                  <!--[-->Sua página fica disponível por tempo indeterminado.
                  Não há prazo de expiração, então você pode compartilhar sua
                  história pelo tempo que desejar.<!--]-->
                </div>
              </div>
            </div>
            <div
              data-headlessui-state=""
              class="w-full flex flex-col"
              data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue:3:5"
            >
              <button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 inline-flex items-center mb-1.5 w-full"
                id="headlessui-disclosure-button-v-0-6"
                aria-expanded="false"
                data-headlessui-state=""
                aria-controls="headlessui-disclosure-panel-v-0-7"
              >
                <!--[--><!--[--><span
                  class="iconify i-heroicons:share flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--[--><span class="text-left break-all line-clamp-1"
                  >Como compartilho minha página com amigos e família?</span
                ><!--]--><!--[--><span
                  class="iconify i-heroicons:chevron-down-20-solid h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--]-->
              </button>
              <div style="display: none">
                <div
                  id="headlessui-disclosure-panel-v-0-7"
                  data-headlessui-state=""
                  class="text-sm text-gray-500 dark:text-gray-400 pt-1.5 pb-3"
                >
                  <!--[-->Após criar sua página, você receberá um link único que
                  pode ser compartilhado através de redes sociais, WhatsApp,
                  email ou qualquer outro meio de comunicação.<!--]-->
                </div>
              </div>
            </div>
            <div
              data-headlessui-state=""
              class="w-full flex flex-col"
              data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue:3:5"
            >
              <button
                type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 inline-flex items-center mb-1.5 w-full"
                id="headlessui-disclosure-button-v-0-8"
                aria-expanded="false"
                data-headlessui-state=""
                aria-controls="headlessui-disclosure-panel-v-0-9"
              >
                <!--[--><!--[--><span
                  class="iconify i-heroicons:computer-desktop flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--[--><span class="text-left break-all line-clamp-1"
                  >Preciso ter conhecimento técnico para criar uma página?</span
                ><!--]--><!--[--><span
                  class="iconify i-heroicons:chevron-down-20-solid h-5 w-5 ms-auto transform transition-transform duration-200 flex-shrink-0"
                  aria-hidden="true"
                  style=""
                  data-v-inspector="node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue:2:3"
                ></span
                ><!--]--><!--]-->
              </button>
              <div style="display: none">
                <div
                  id="headlessui-disclosure-panel-v-0-9"
                  data-headlessui-state=""
                  class="text-sm text-gray-500 dark:text-gray-400 pt-1.5 pb-3"
                >
                  <!--[-->Não! Nossa plataforma foi desenvolvida para ser
                  extremamente intuitiva e fácil de usar. Qualquer pessoa pode
                  criar uma página linda em poucos minutos.<!--]-->
                </div>
              </div>
            </div>
            <!--]-->
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 bg-gradient-to-br from-rose-500 to-rose-600 text-white relative overflow-hidden"
    >
      <div class="absolute inset-0" data-v-inspector="pages/index.vue:191:9">
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1920&amp;auto=format&amp;fit=crop&amp;q=80')] opacity-10 bg-cover bg-center"
        ></div>

        <div
          class="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-600 opacity-90"
        ></div>
      </div>

      <div class="container mx-auto px-4 text-center relative">
        <h2 class="text-5xl font-bold mb-8 font-['Playfair_Display']">
          Comece a Contar Sua História
        </h2>

        <p class="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Crie sua página personalizada gratuitamente e compartilhe seu amor com
          o mundo. É rápido, fácil e inesquecível.
        </p>

        <a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center text-rose-500 font-semibold"
          href="/create"
        >
          Criar Minha Página Agora
        </a>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped></style>
