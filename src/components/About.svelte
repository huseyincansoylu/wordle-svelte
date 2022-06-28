<script lang="ts">
    const rowOne = ["W","E","A", "R", "Y"]
    const rowTwo = ["P","I","L", "L", "S"]
    const rowThree = ["V","A","G", "U", "E"]

</script>


<div class="w-full h-screen">
    <h3 class="font-bold text-center pt-2">HOW TO PLAY</h3>
    <div class="text-sm mt-4 space-y-3 pr-4">
        <p>Guess the <span class="font-semibold">WORDLE</span>  in six tries.</p>
        <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    </div>
    <hr class="mt-4">
    <div>
        <h5 class="font-semibold mt-2">Examples</h5>
        <div class="flex mt-4 space-x-1">
           {#each rowOne as item}
           <div class={`${item === "W" ? "bg-[#6AAA64]" : ""} w-11 h-11 flex text-black items-center justify-center border-2 border-gray-300  font-bold text-3xl dark:text-white`}>
              {item}
           </div>
            {/each}
        </div>
        <p class="mt-2">The letter <span class="font-semibold">W</span> is in the word and in the correct spot.</p>

        <div class="flex mt-4 space-x-1">
            {#each rowTwo as item}
            <div class={`${item === "I" ? "bg-[#c9b458]" : ""} w-11 h-11 flex text-black items-center justify-center border-2 border-gray-300  font-bold text-3xl dark:text-white`}>
               {item}
            </div>
             {/each}
         </div>
         <p class="mt-2">The letter <span class="font-semibold">I</span> is in the word but in the wrong spot.</p>


         <div class="flex mt-4 space-x-1">
            {#each rowThree as item}
            <div class={`${item === "U" ? "bg-[#787C7E]" : ""} w-11 h-11 flex text-black items-center justify-center border-2 border-gray-300  font-bold text-3xl dark:text-white`}>
               {item}
            </div>
             {/each}
         </div>
         <p class="mt-2">The letter <span class="font-semibold">U</span> is not in the word in any spot.</p>
         <hr class="mt-4 ">
         <p class="font-bold mt-2 text-sm">A new WORDLE will be available each day!</p>  
    </div>
</div>

