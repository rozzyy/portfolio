<template>
  <div>
    <div class="sm:flex">
      <div class="fixed z-30">
        <div
          :class="{
            'bg-gray-100': true,
            'h-screen': true,
            'shadow-lg': true,
            hidden: active,
            'sm:inline-block': true
          }"
        >
          <div class="bg-indigo-700 px-6 py-4">
            <div class="font-sans text-4xl font-bold text-white">
              R
            </div>
          </div>
          <div class="pt-32">
            <ul class="font-bold">
              <li class="p-4 border-b-2 text-indigo-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </li>
              <li class="p-4 border-b-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </li>
              <li class="border-b-2 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </li>
              <li class="p-4 border-b-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </li>
              <li class="p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="sm:pl-32 py-6 hidden sm:inline-block">
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-2">
              <a
                href="#"
                class="font-bold text-indigo-700 hover:text-indigo-900"
                >+62 813 6281 4248</a
              >
            </div>
            <div>
              <a
                href="#"
                class="font-bold text-indigo-700 hover:text-indigo-900"
              >
                rozzyrahmanda0@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div class="mx-2 md:pl-40 py-48 sm:pt-48 sm:pb-80">
          <div>
            <div class="text-xl md:text-2xl font-bold">
              Hello, My name is
            </div>
            <h1 class="text-3xl md:text-7xl font-bold py-3">
              Rozzy Rahmanda
            </h1>
            <div class="text-xl sm:text-2xl text-indigo-700 font-bold">
              Fullstack Developer
            </div>
            <div class="py-3 sm:w-2/5">
              I develop services for customers of all sizes, specializing in
              front-end and also back-end for modern website, web services and
              online stores.
            </div>
            <button class="btn btn-active">Download CV</button>
          </div>
          <div class="sm:hidden fixed z-30">
            <button
              class="btn btn-circle btn-primary btn-lg mt-20 ml-64"
              @click="showBar"
            >
              <svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="active"
              >
                <path
                  d="M4 7H12M20 7H16M4 12H20M4 17H8M20 17H12"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-x-lg"
                v-else
              >
                <path
                  d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="sm:pl-24 py-20 bg-gray-100">
          <div class="sm:px-4">
            <div class="flex flex-col md:flex-row py-10">
              <div class="container">
                <div class="avatar placeholder flex justify-center">
                  <div
                    class="bg-neutral-focus text-neutral-content mask mask-hexagon w-48 h-48"
                  >
                    <span class="text-8xl sm:text-9xl font-mono">R</span>
                  </div>
                </div>
                <div
                  class="grid grid-cols-12 mx-2 sm:mx-48 justify-items-center py-4"
                >
                  <div class="col-span-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="50px"
                      height="50px"
                    >
                      <path
                        fill="#0288d1"
                        d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                      />
                      <path
                        fill="#fff"
                        d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
                      />
                    </svg>
                  </div>
                  <div class="col-span-4">
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                    >
                      <path
                        d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                      />
                    </svg>
                  </div>
                  <div class="col-span-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                    >
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8ma"
                        cx="19.38"
                        cy="42.035"
                        r="44.899"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fd5" />
                        <stop offset=".328" stop-color="#ff543f" />
                        <stop offset=".348" stop-color="#fc5245" />
                        <stop offset=".504" stop-color="#e64771" />
                        <stop offset=".643" stop-color="#d53e91" />
                        <stop offset=".761" stop-color="#cc39a4" />
                        <stop offset=".841" stop-color="#c837ab" />
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      />
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8mb"
                        cx="11.786"
                        cy="5.54"
                        r="29.813"
                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#4168c9" />
                        <stop
                          offset=".999"
                          stop-color="#4168c9"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      />
                      <path
                        fill="#fff"
                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                      />
                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                      <path
                        fill="#fff"
                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="text-center">
                  <div>
                    Fullstack Web Developer
                  </div>
                  <h1 class="text-3xl font-bold">
                    Rozzy Rahmanda
                  </h1>
                </div>
              </div>
              <div class="pt-8 mx-2 sm:pt-0">
                <div class="stack py-6">
                  <div class="text-3xl font-bold">Biography</div>
                  <div
                    class="bg-indigo-400 rounded-full w-12 h-12 opacity-50 -ml-28 -mt-3"
                  ></div>
                </div>
                <div>
                  I'm a Freelancer Fullstack Web Developer with over 1 year of
                  experience. I'm from Medan, Indonesia. I code and create web
                  elements for amazing people around the world.
                </div>
                <div class="py-4 text-sm flex flex-col sm:text-lg sm:flex-row">
                  <div class="flex flex-col">
                    <div class="py-2"><b>Name :</b> Rozzy Rahmanda</div>
                    <div class="py-2"><b>Born :</b> 07th March 1988</div>
                    <div class="py-2"><b>Age :</b> 33 years</div>
                  </div>
                  <div class="flex flex-col sm:mx-10">
                    <div class="py-2"><b>Phone :</b> (+62) 813 6281 4248</div>
                    <div class="py-2">
                      <b>Email :</b> rozzyrahmanda0@gmail.com
                    </div>
                    <div class="py-2"><b>Skype :</b> rozzy.88</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="py-20 mx-2">
              <div class="stack mx-2 pb-6">
                <div class="text-3xl font-bold">What I do?</div>
                <div
                  class="bg-indigo-400 rounded-full w-12 h-12 opacity-50 -ml-28 -mt-3"
                ></div>
              </div>
              <div class="flex flex-col sm:grid sm:grid-cols-3 gap-6">
                <div
                  class="card hover:shadow-2xl lg:card-side bg-gray-200 z-10"
                >
                  <div class="card-body">
                    <h2 class="card-title">Front End</h2>
                    <div class="justify-end card-actions">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus esse enim inventore, vel quod iure asperiores
                      corporis voluptate quaerat eius similique provident
                      tempore! Eos doloremque aut earum! Reprehenderit, veniam
                      cupiditate!
                    </div>
                  </div>
                </div>
                <div class="card hover:shadow-2xl lg:card-side bg-gray-200">
                  <div class="card-body">
                    <h2 class="card-title">Back End</h2>
                    <div class="justify-end card-actions">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus esse enim inventore, vel quod iure asperiores
                      corporis voluptate quaerat eius similique provident
                      tempore! Eos doloremque aut earum! Reprehenderit, veniam
                      cupiditate!
                    </div>
                  </div>
                </div>
                <div class="card hover:shadow-2xl lg:card-side bg-gray-200">
                  <div class="card-body">
                    <h2 class="card-title">Make Sure Both of Them Work</h2>
                    <div class="justify-end card-actions">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus esse enim inventore, vel quod iure asperiores
                      corporis voluptate quaerat eius similique provident
                      tempore! Eos doloremque aut earum! Reprehenderit, veniam
                      cupiditate!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:pl-24 mx-2 py-20">
          <div class="stack pb-6">
            <div class="text-3xl font-bold">Experience</div>
            <div
              class="bg-indigo-400 rounded-full w-12 h-12 opacity-50 -ml-28 -mt-3"
            ></div>
          </div>
          <div class="pb-6 mx-2">
            <div class="card lg:card-side bg-indigo-50 z-10">
              <div class="card-body">
                <h2 class="card-title">Junior Front-end Engineer</h2>
                <small>PT. Masinfo Teknologi Indonesia</small>
                <div class="text-sm pb-2">
                  September 2020 - present
                </div>
                <div
                  class="bg-indigo-500 text-white font-bold w-20 text-sm rounded"
                >
                  <div class="mx-2">
                    Full Time
                  </div>
                </div>
                <div class="justify-end card-actions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  esse enim inventore, vel quod iure asperiores corporis
                  voluptate quaerat eius similique provident tempore! Eos
                  doloremque aut earum! Reprehenderit, veniam cupiditate!
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="stack py-6">
            <div class="text-3xl font-bold">Education & Skills</div>
            <div
              class="bg-indigo-400 rounded-full w-12 h-12 opacity-50 -ml-52 -mt-3"
            ></div>
          </div>
          <div class="pb-6 sm:flex sm:flex-row">
            <div class="card lg:card-side bg-indigo-50 z-10 sm:w-3/12">
              <div class="card-body">
                <small>2019-present</small>
                <h2 class="card-title">Computer Science</h2>
                <div class="text-sm py-2">
                  University Pembangunan Pancabudi
                </div>
                <div class="text-sm">
                  Medan, Indonesia
                </div>
              </div>
            </div>
            <div class="py-4 sm:pl-44">
              <div class="grid grid-cols-12 gap-4 py-2">
                <div class="col-span-2 sm:col-span-1">
                  <div class="text-3xl font-mono py-2 font-bold">90%</div>
                </div>
                <div class="col-span-10 sm:col-span-11">
                  <div class="font-bold">
                    HTML5
                  </div>
                  <div class="border rounded-full overflow-hidden w-100">
                    <div class="bg-indigo-700 h-5" style="width: 90%;"></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 py-2">
                <div class="col-span-2 sm:col-span-1">
                  <div class="text-3xl font-mono py-2 font-bold">83%</div>
                </div>
                <div class="col-span-10 sm:col-span-11">
                  <div class="font-bold">
                    CSS3 + TailwindCSS + Bootstrap 4
                  </div>
                  <div class="border rounded-full overflow-hidden w-100">
                    <div class="bg-indigo-700 w-10/12 h-5"></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 py-2">
                <div class="col-span-2 sm:col-span-1">
                  <div class="text-3xl font-mono py-2 font-bold">95%</div>
                </div>
                <div class="col-span-10 sm:col-span-11">
                  <div class="font-bold">
                    VUE JS 2 + NUXT JS
                  </div>
                  <div class="border rounded-full overflow-hidden w-100">
                    <div class="bg-indigo-700 h-5" style="width: 95%;"></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 py-2">
                <div class="col-span-2 sm:col-span-1">
                  <div class="text-3xl font-mono py-2 font-bold">85%</div>
                </div>
                <div class="col-span-10 sm:col-span-11">
                  <div class="font-bold">
                    NODE JS + EXPRESS + SEQUELIZE
                  </div>
                  <div class="border rounded-full overflow-hidden w-100">
                    <div class="bg-indigo-700 h-5" style="width: 85%;"></div>
                  </div>
                </div>
              </div>
              <!-- <div class="grid grid-cols-12 gap-4 py-2">
                <div class="col-span-2 sm:col-span-1">
                  <div class="text-3xl font-mono py-2 font-bold">75%</div>
                </div>
                <div class="col-span-10 sm:col-span-11">
                  <div class="font-bold">
                    PYTHON + FAST API
                  </div>
                  <div class="border rounded-full overflow-hidden w-100">
                    <div class="bg-indigo-700 h-5" style="width: 75%;"></div>
                  </div>
                </div>
              </div> -->
              <div class="grid grid-cols-12 gap-4 py-2">
                <div class="col-span-2 sm:col-span-1">
                  <div class="text-3xl font-mono py-2 font-bold">90%</div>
                </div>
                <div class="col-span-10 sm:col-span-11">
                  <div class="font-bold">
                    LARAVEL + RESTFULL API
                  </div>
                  <div class="border rounded-full overflow-hidden w-100">
                    <div class="bg-indigo-700 h-5" style="width: 90%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:pl-24 bg-gray-100">
          <div class="mx-2 py-12">
            <div class="stack py-6 mx-2">
              <div class="text-3xl font-bold">My Portfolio</div>
              <div
                class="bg-indigo-400 rounded-full w-12 h-12 opacity-50 -ml-36 -mt-3"
              ></div>
            </div>
            <div class="sm:grid sm:grid-cols-3 gap-4">
              <div class="card shadow-xl image-full my-2">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div class="justify-end card-body">
                  <h2 class="card-title">Bappeda Kota Tebing Tinggi</h2>
                  <p>
                    Rerum reiciendis beatae tenetur excepturi aut pariatur est
                    eos. Sit sit necessitatibus veritatis sed molestiae
                    voluptates incidunt iure sapiente.
                  </p>
                  <div class="card-actions">
                    <button class="btn glass">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card shadow-xl image-full my-2">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div class="justify-end card-body">
                  <h2 class="card-title">Bappeda Kota Tebing Tinggi</h2>
                  <p>
                    Rerum reiciendis beatae tenetur excepturi aut pariatur est
                    eos. Sit sit necessitatibus veritatis sed molestiae
                    voluptates incidunt iure sapiente.
                  </p>
                  <div class="card-actions">
                    <button class="btn glass">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card shadow-xl image-full my-2">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div class="justify-end card-body">
                  <h2 class="card-title">Bappeda Kota Tebing Tinggi</h2>
                  <p>
                    Rerum reiciendis beatae tenetur excepturi aut pariatur est
                    eos. Sit sit necessitatibus veritatis sed molestiae
                    voluptates incidunt iure sapiente.
                  </p>
                  <div class="card-actions">
                    <button class="btn glass">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:pl-24 bg-blue-100">
          <div class="mx-2 py-4 sm:grid sm:grid-cols-2 gap-4">
            <div>
              <h1 class="text-4xl font-bold">
                What's your story?
              </h1>
              <h1 class="text-4xl font-bold">
                Get in touch
              </h1>
              <p class="py-2">
                Always available for freelancing if the right project comes
                along. Fill free to contact me.
              </p>
              <div class="py-4">
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <div class="col-span-10 font-bold py-2">
                    rozzyrahmanda0@gmail.com
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div class="font-bold py-2 col-span-10">
                    (+62) 813 6281 4248
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold">
                Say Something
              </div>
              <div class="py-4">
                <div class="py-2">
                  <div class="form-control">
                    <input type="text" placeholder="Fullname" class="input" />
                  </div>
                </div>
                <div class="py-2">
                  <div class="form-control">
                    <input
                      type="text"
                      placeholder="Email Address"
                      class="input"
                    />
                  </div>
                </div>
                <div class="py-2">
                  <div class="form-control">
                    <input type="text" placeholder="Subject" class="input" />
                  </div>
                </div>
                <div class="py-2">
                  <div class="form-control">
                    <textarea
                      class="textarea h-24 textarea-bordered"
                      placeholder="Type Comment"
                    ></textarea>
                  </div>
                </div>
                <div class="py-2">
                  <button class="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer
          class="sm:pl-24 items-center p-4 footer bg-neutral text-neutral-content"
        >
          <div class="items-center grid-flow-col">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="fill-current"
            >
              <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
              ></path>
            </svg>
            <p>Copyright © 2021 - All right reserved</p>
            <div class="hidden sm:inline-block">
              | Build with Nuxt JS & TailwindCSS
            </div>
          </div>
          <div
            class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                />
              </svg>
            </a>
            <a>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path
                  d="M 33 29 C 31.203125 29 30 30.515625 30 33 C 30 35.484375 30.890625 38.046875 33 38 C 35.21875 37.949219 36.019531 35.777344 36 33 C 35.984375 30.515625 34.792969 29 33 29 Z M 44.261719 17.066406 C 44.535156 15.722656 44.652344 10.964844 42.679688 6 C 42.679688 6 38.148438 6.496094 31.296875 11.199219 C 29.863281 10.800781 27.429688 10.601563 25 10.601563 C 22.570313 10.601563 20.140625 10.800781 18.699219 11.195313 C 11.851563 6.496094 7.324219 6 7.324219 6 C 5.347656 10.964844 5.445313 15.609375 5.738281 17.066406 C 3.417969 19.585938 2 22.609375 2 26.742188 C 2 44.707031 16.90625 44.996094 20.667969 44.996094 C 21.519531 44.996094 23.210938 44.996094 25 45 C 26.789063 44.996094 28.484375 44.996094 29.332031 44.996094 C 33.09375 44.996094 48 44.707031 48 26.742188 C 48 22.609375 46.582031 19.585938 44.261719 17.066406 Z M 25.140625 43 L 25 43 C 15.570313 43 8.15625 41.660156 8.15625 32.496094 C 8.15625 30.300781 8.933594 28.265625 10.773438 26.574219 C 13.84375 23.753906 19.035156 25.246094 24.929688 25.246094 C 24.953125 25.246094 25.050781 25.246094 25.070313 25.246094 C 30.964844 25.246094 36.160156 23.757813 39.230469 26.574219 C 41.070313 28.265625 41.84375 30.300781 41.84375 32.496094 C 41.84375 41.660156 34.570313 43 25.140625 43 Z M 17 29 C 15.207031 29 14 31.015625 14 33.5 C 14 35.984375 15.207031 38 17 38 C 18.796875 38 20 35.984375 20 33.5 C 20 31.015625 18.796875 29 17 29 Z"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#f55376"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <path
                  fill="#fac8d5"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                />
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fac8d5" />
                <path
                  fill="#fac8d5"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18 z"
                />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import backgroundImg from "@/static/white.webp";
export default {
  data() {
    return {
      back: backgroundImg,
      active: true,
      title: 'Rozzy Rahmanda'
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rozzy Rahmanda Porfolio'
        }
      ]
    }
  },
  methods: {
    showBar() {
      if (this.active) {
        this.active = false;
      } else {
        this.active = true;
      }
    }
  }
};
</script>

<style scoped>
.image-back {
  background: url("~assets/white.webp");
}
</style>
