<template>
  <section
    id="about"
    class="py-24 px-6"
    style="background: linear-gradient(180deg, #0a0e27 0%, #111634 100%)"
  >
    <div class="mx-auto max-w-6xl">

      <!-- =========================
           SECTION HEADING
      ========================== -->
      <div class="mb-12 text-center sm:mb-14">
        <h2
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          About Me
        </h2>
      </div>


      <!-- =========================
           ABOUT CONTENT
      ========================== -->
      <div
        class="grid items-center gap-8 sm:gap-10 lg:grid-cols-[120px_1fr] lg:gap-8"
      >

        <!-- =========================
             PROFILE IMAGE
        ========================== -->
        <div class="flex mt-4">
          <div
            class="h-28 w-28 overflow-hidden rounded-full border-2 border-slate-300/60 bg-slate-800 shadow-lg "
          >
            <img
              src="/abby.jpg"
              alt="Abigael Njeri"
              class="h-full w-full object-cover"
            />
          </div>
        </div>


        <!-- =========================
             ABOUT TEXT
        ========================== -->
        <div class="text-center lg:text-left">

          <!-- Paragraph 1 -->
          <p
            class="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            I’m a passionate
            <span class="font-medium text-white">
              Frontend Web Developer
            </span>
            who enjoys turning ideas and designs into beautiful, responsive,
            and user-friendly websites. I love creating digital experiences
            that are both visually appealing and easy to use.
          </p>


          <!-- Paragraph 2 -->
          <p
            class="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            I specialize in building modern web applications using
            <span class="text-white">Vue.js</span>,
            <span class="text-white">Nuxt.js</span>,
            <span class="text-white">React</span>, and
            <span class="text-white">Tailwind CSS</span>.
            My focus is on creating clean interfaces, responsive layouts,
            and interactive experiences that work seamlessly across
            desktop, tablet, and mobile devices.
          </p>


          <!-- Paragraph 3 -->
          <p
            class="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white sm:text-base"
          >
            I’m constantly learning and improving my skills while exploring
            new technologies in frontend development. For me, great frontend
            development is about combining good design, clean code,
            performance, and an amazing user experience.
          </p>


          <!-- =========================
               BUTTONS
          ========================== -->
          <div
            class=" mx-auto mt-12 flex flex-wrap justify-center gap-8 lg:text-left"
          >

            <!-- Download Resume -->
            <a
              href="/biee.pdf"
              download
              class="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white transition duration-300 hover:bg-blue-500 sm:text-sm"
            >
              Download Resume
            </a>


            <!-- Download coverletter -->
            <a
              href="/coverletter.pdf"
              download
              class="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white transition duration-300 hover:bg-blue-500 sm:text-sm"
            >
              Download cover letter
            </a>

          </div>


     


        </div>

      </div>

    </div>
  </section>
</template>