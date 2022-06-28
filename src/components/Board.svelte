<script lang="ts">
import {board, gameOver} from "../store"
import Cell from "./Cell.svelte";
</script>


<div class={`my-auto space-y-1 ${$gameOver && "opacity-60"}`}>
    {#each $board as column, y}
        <div class="flex space-x-1 ">
          {#each column as row, x}
             <Cell {y} {x} />
          {/each}
        </div>  
    {/each}
</div>