import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. Words can be characters, items, and concepts
        relating to Mahoyaku. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M"/>
        <Cell value="I"/>
        <Cell 
          isRevealing={true}
          isCompleted={true}
          status="correct"
          value="T" 
        />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="I" />
        <Cell value="T" />
        <Cell value="H" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="Z" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/czhou23/paimordle-vi"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Find updates on the latest with{' '}
        <a href="https://twitter.com/paimordle" className="underline font-bold">
          Paimordle
        </a>{' '}
      </p>
       <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
          Play the original {' '}
         <a href="https://paimordle-vi.vercel.app/" className="underline font-bold">
           Paimordle
          </a>{' '}
      </p>
    </BaseModal>
  )
}
