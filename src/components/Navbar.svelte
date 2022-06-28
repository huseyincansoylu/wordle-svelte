<script lang="ts">
import { activeModal, isModalOpen } from "../store";
import About from "./About.svelte";
import Settings from "./Settings.svelte";

          function openAboutModal() {
             isModalOpen.set(true)
              //@ts-ignore
             activeModal.set(About)
         }

         function openSettingsModal() {
             isModalOpen.set(true)
             //@ts-ignore
             activeModal.set(Settings)
         }
</script>


<header class="w-full border-b dark:border-gray-500 flex items-center font-bold h-12 text-lg px-4 ">
     <div  class="text-gray-500 dark:text-white">
          <img src="/favicon.png" alt="logo" class="h-8 w-8"> 
     </div>
     <div class="text-3xl mx-auto pl-14">Wordle</div>
     <div class="flex space-x-2 text-gray-500 cursor-pointer dark:text-white">
          <svg on:click={openAboutModal} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
             </svg>
          <svg on:click={openSettingsModal} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
     </div>
</header>