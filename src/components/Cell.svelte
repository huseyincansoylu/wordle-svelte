<script lang="ts">
    import {board, colors} from "../store"
    export let x : number; 
    export let y: number;

    $: letter = $board[y][x] 
    $: color = $colors[y][x] 

    
</script>



<div class={`w-14 h-14 flex  text-black dark:text-white items-center justify-center border-2 border-gray-300 dark:border-[#3A3A3C] ${color} font-bold text-3xl `}>
    {letter}
</div>