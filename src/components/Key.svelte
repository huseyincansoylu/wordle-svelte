<script lang="ts">   
    export let char : string;
    export let keyPress : (key?: string) => void; 
    export let correct: string[];
    export let close : string[];
    export let noFound : string[];

    
    $: bgColor = correct.includes(char) ? "bg-[#6AAA64] " : close.includes(char) ? "bg-[#c9b458]" : noFound.includes(char) ? "bg-[#787C7E] dark:bg-[#3A3A3C]" : "bg-gray-300 dark:bg-[#818384]"
</script>



<div on:click={() => keyPress(char)} class={`text-gray-900 dark:text-white p-4 font-semibold rounded-md cursor-pointer ${bgColor} `}>
    {char} 
</div>