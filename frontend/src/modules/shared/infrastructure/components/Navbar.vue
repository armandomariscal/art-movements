<template>
  <nav class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Art Movements
          </span>
        </div>
        
        <div class="hidden md:flex space-x-8 text-gray-600 font-medium">
          <router-link to="/movements" class="text-sm font-semibold text-slate-900 hover:text-indigo-600">
            Movimientos
          </router-link>
          <a href="#" class="hover:text-indigo-600 transition">Artistas</a>
          <a href="#" class="hover:text-indigo-600 transition">Exposiciones</a>
        </div>

        <button class="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
          Dashboard
        </button>
      </div>
    </div>
  </nav>
</template>