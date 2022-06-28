<script>
  import "../app.css";
  import Modal from "../components/Modal.svelte";
  import Navbar from "../components/Navbar.svelte" 
  import { activeModal, isModalOpen } from "../store";
</script>
  


{#if $isModalOpen}
   <Modal >
     <svelte:component this={$activeModal} />  
   </Modal>
{:else}  
   <div class="dark:bg-[#121213] dark:text-white">
      <Navbar/>
      <slot />
   </div>  
  
{/if}
