import { FormulaItem } from '../LatexEditor/components/tool/formula'
import { insertNode, observerNode, setSelectionRange } from '../LatexEditor/utils'
import './input.scss'

interface LatexInputParam {
  container: string
  contentChange: (content: string) => void
}

class LatexInput {
  private container: HTMLDivElement
  private editContent: string = ''
  private cursorInfo: {
    cursorNode: HTMLElement | undefined
    cursorNodeIndex: number
  } = {
    cursorNode: undefined,
    cursorNodeIndex: 0,
  }
  private contentChange: (content: string) => void
  constructor(parameters: LatexInputParam) {
    this.container = document.querySelector(parameters.container) as HTMLDivElement
    if (!this.container) {
      throw new Error(`找不到${parameters.container}`)
    }
    this.contentChange = parameters.contentChange
    this.init()
  }

  init() {
    this.container.contentEditable = 'true'
    this.editContent = ''
    this.container.classList.add('latex-editor-content')
    this.cursorInfo.cursorNode = this.container
    observerNode(this.container, this.observerContentChange.bind(this))
  }

  observerContentChange(selection: Selection | null) {
    if (selection && selection?.anchorNode) {
      if (selection?.anchorNode.nodeType === 1) {
        if (selection?.anchorNode.childNodes[0]?.nodeName === 'BR') {
          selection?.anchorNode.removeChild(selection?.anchorNode.childNodes[0])
        }
        this.cursorInfo.cursorNode = selection.anchorNode as HTMLElement
        this.cursorInfo.cursorNodeIndex = selection.anchorOffset
      } else {
        this.cursorInfo.cursorNode = this.container
        this.cursorInfo.cursorNodeIndex = 0
      }
      this.setEditContent()
    }
  }

  setCursorPosition(dataItem: FormulaItem) {
    const { formula } = dataItem
    const __cursorInfo = insertNode(formula, this.cursorInfo!.cursorNode)
    if (__cursorInfo) {
      this.cursorInfo.cursorNode = __cursorInfo.cursorNode
      this.cursorInfo.cursorNodeIndex = __cursorInfo.cursorIndex
      setSelectionRange(this.cursorInfo.cursorNode, this.cursorInfo.cursorNodeIndex, this.cursorInfo.cursorNodeIndex)
    }
    this.setEditContent()
  }

  setEditContent() {
    this.editContent = this.container?.innerText || ''
    this.contentChange(this.editContent)
  }
}

export default LatexInput
