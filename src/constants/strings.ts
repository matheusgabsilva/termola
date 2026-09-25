export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Ótimo trabalho!', 'Incrível', 'Muito bem!']
export const GAME_COPIED_MESSAGE = 'Jogo copiado para a área de transferência'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'O Modo Difícil só pode ser ativado no início!'
export const HARD_MODE_DESCRIPTION =
  'Qualquer dica revelada deve ser usada nas próximas tentativas'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para melhor visão de cores'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deve usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `O palpite deve conter ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de Palpites'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const SHARE_FAILURE_TEXT =
  'Não foi possível compartilhar os resultados. Este recurso está disponível apenas em contextos seguros (HTTPS), em alguns ou todos os navegadores suportados.'
export const MIGRATE_BUTTON_TEXT = 'Transferir'
export const MIGRATE_DESCRIPTION_TEXT =
  'Clique aqui para transferir suas estatísticas para um novo dispositivo.'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de sucesso'
export const CURRENT_STREAK_TEXT = 'Sequência atual'
export const BEST_STREAK_TEXT = 'Melhor sequência'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Você está usando um navegador incorporado e pode ter problemas ao compartilhar ou salvar seus resultados. Recomendamos usar o navegador padrão do seu dispositivo."

export const DATEPICKER_TITLE = 'Escolha uma data passada'
export const DATEPICKER_CHOOSE_TEXT = 'Escolher'
export const DATEPICKER_TODAY_TEXT = 'hoje'
export const ARCHIVE_GAMEDATE_TEXT = 'Data do jogo'
