<template>
  <div class="min-h-screen bg-slate-50 py-12 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <h1 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Movimientos Artísticos
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          Explora y gestiona el catálogo de las grandes etapas del arte europeo.
        </p>
      </div>

      <div v-if="loading" class="text-center py-10 text-slate-500 italic">
        Consultando la API de movimientos...
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="movement in movements" 
          :key="movement.id"
          class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
              {{ movement.period }}
            </span>
          </div>
          <h3 class="text-xl font-bold text-slate-900">{{ movement.name }}</h3>
          <p class="mt-2 text-slate-600 text-sm leading-relaxed">
            {{ movement.description }}
          </p>
          
          <div class="mt-6 flex gap-3">
            <button class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Editar</button>
            <button class="text-sm font-medium text-red-600 hover:text-red-500">Eliminar</button>
          </div>
        </div>

        <button class="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-500 hover:border-indigo-400 hover:text-indigo-500 transition-colors">
          <span class="text-3xl mb-2">+</span>
          <span class="font-semibold">Añadir Movimiento</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchMovements } from '../MovementService';
import type { Movement } from '../../domain/Movement';

const movements = ref<Movement[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    movements.value = await fetchMovements();
  } catch (error) {
    console.error("No se pudo conectar con el servidor:", error);
  } finally {
    loading.value = false;
  }
});
</script>