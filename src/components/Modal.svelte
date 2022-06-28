<script lang="ts">
      import {fly} from "svelte/transition";
      import { isModalOpen } from "../store";

      function closeModal()  {
         isModalOpen.set(false)
      }

</script>

<div class="w-full dark:bg-[#121213] dark:text-white">
  <div class="w-2/5 mx-auto h-screen relative" in:fly={{duration: 200 }} >
    <div on:click={closeModal} class="absolute top-2 right-2 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <slot></slot>
</div>
</div>
