<script lang="ts">
    import { WORDS } from "../constants/words";
    import Key from "../components/Key.svelte"
    import { board, colors,gameInfo, gameOver, GAME_WORD, guess, message, win } from "../store"


    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const row3 = ['ENTER','Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
 
    let correct : string[] = []
    let close : string[] = []
    let noFound : string[] = []
       
    const handleDelete = () => {
           if($gameInfo.char === 0){
               return;
           }

           gameInfo.update((prev) => {
               return {
                   char: prev.char - 1,
                   attempt : prev.attempt
               }
           })

           board.update((prevBoard) => {
               const newBoard = prevBoard

               newBoard[$gameInfo.attempt][$gameInfo.char] = ""

               return newBoard;
           })
     }


     const handleEnter = () => {         
         let { attempt, char} = $gameInfo;
    
          if(char !== 5) {
              return;
          }
          
   
        
        if(!(WORDS.map(item => item.toUpperCase()).includes(($board[attempt].join(""))))) {
            message.set("Not in word list")
            return;
        } else {
            message.set("")
        }
           

          
          gameInfo.set({
              attempt: attempt + 1,
              char : 0
          })
     

          const prevAttempt = $gameInfo.attempt - 1

          let newColorsBoard = $colors

          const duplicateChars = new Set()

          for(let i = 0; i < 5; i++) {
              let char = $board[prevAttempt][i]

              guess.update((prevChars) => {
                   return prevChars + char
              })

             if($GAME_WORD[i] === char) {
                 newColorsBoard[prevAttempt][i] = "bg-[#6AAA64] text-white border-0";
                
                 correct = [...correct, char]
             }
             else if($GAME_WORD.includes(char)){
                if(!duplicateChars.has(char)) {
                    newColorsBoard[prevAttempt][i] = "bg-[#c9b458] text-white border-0";
                    duplicateChars.add(char)

                    close = [...close, char]
                }
             } else {
                 newColorsBoard[prevAttempt][i] = "bg-[#787C7E] dark:bg-[#3A3A3C] text-white border-0";
               
                 noFound = [...noFound, char]
             } 
          }

          colors.set(newColorsBoard)

          //check game over

          if($guess === $GAME_WORD ) {
              gameOver.set(true)
              win.set(true)
              correct = []
              close = []
              noFound = []

          } else if(prevAttempt === 5) {
              gameOver.set(true)
              correct = []
              close = []
              noFound = []
          }      
          else {
              guess.set("")
          }
     }

     const keyPress = (key = "") => {
         if(key === "DEL") {
            handleDelete()
         }

         else if(key === "ENTER") {
            handleEnter()
         }
      
         else { 
          let {attempt, char} = $gameInfo

         if(char > 4)
           return;

         board.update((prevBoard) => {
             const newBoard = prevBoard;
             newBoard[attempt][char] = key;
             char++
             return newBoard
         })


         gameInfo.set({attempt, char})
         
        }   
     }

</script>

<div class={`flex flex-col space-y-2 mb-2 ${$gameOver && "opacity-60"}`} >
    <div class="flex space-x-2">
        {#each row1 as char}
            <Key {char} {keyPress} {correct} {close} {noFound} />
        {/each}
    </div>
    <div class="flex space-x-2 mx-auto">
        {#each row2 as char}
            <Key {char} {keyPress}  {correct} {close} {noFound}  />
        {/each}
    </div>
    <div class="flex space-x-2">
        {#each row3 as char} 
            <Key {char} {keyPress}  {correct}  {close}  {noFound}/>
        {/each}
    </div>
</div>