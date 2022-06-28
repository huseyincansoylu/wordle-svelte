<script lang="ts">
import Keyboard from "../components/Keyboard.svelte";
import Board from "../components/Board.svelte";
import {fly, fade} from "svelte/transition";
import { board, colors, gameInfo, gameOver,GAME_WORD,guess,message, win} from "../store";
import { createGrid , getRandomWord} from "../utils";

 
$: if ($message) {
		setTimeout(() => $message = "", 750)
	} 

$: console.log($GAME_WORD)


function playAgain() {
    gameOver.set(false)
    colors.set(createGrid())
    board.set(createGrid())
    win.set(false)
    gameInfo.set({char:0, attempt : 0})
    guess.set("")
    GAME_WORD.set(getRandomWord())
}



</script>


<main class="flex flex-col items-center min-h-[calc(100vh-3rem)]">
    {#if $message}
    <div class="bg-black text-white px-5 py-3 font-semibold rounded-md absolute top-28 dark:bg-white dark:text-black" out:fly={{ y: -20 }} in:fly={{ y: -20 }}>{$message}</div>
    {/if}
     
    {#if $gameOver}
       <div transition:fade class="bg-white z-10 rounded-lg absolute w-[520px] h-[420px] shadow-2xl translate-y-[20%] p-4 flex flex-col items-center justify-evenly">
        <span class="absolute top-4 right-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
       </span>   
        {#if $win}     
      <div class="rounded-sm w-[250px] h-[250px]">
          <img src="/wow.gif" alt="">
          <p class="text-center font-semibold mt-6">YOU NAILED IT!</p> 
      </div>
       {:else}
        <div>THE WORD WAS {$GAME_WORD}</div>
    {/if}
        
       
        <button class="bg-[#79B374] px-6 text-white py-3 rounded-md" on:click={playAgain}>Play Again</button>
       </div>
    {/if}

    <Board />
    <Keyboard  />
</main>



