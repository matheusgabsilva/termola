import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe a palavra em 6 tentativas. Após cada tentativa, a cor das células mudará para mostrar o quão perto seu palpite estava da palavra.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="E" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra T está na palavra e na posição correta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="H" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra L está na palavra mas na posição errada.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="absent"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra G não está na palavra em nenhuma posição.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Esta é uma versão open source do jogo de adivinhação de palavras que todos conhecemos e amamos -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          confira o código aqui
        </a>{' '}
      </p>
    </BaseModal>
  )
}