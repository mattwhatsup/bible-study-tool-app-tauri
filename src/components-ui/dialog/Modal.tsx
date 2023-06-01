import { Dialog, Transition } from '@headlessui/react'
import { Fragment, FunctionComponent, ReactNode } from 'react'
import { isReactNode } from '../../utils/checker'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'full'

type ModalContentRender = (props: { onClose: () => void }) => ReactNode
interface ModalProps {
  open?: boolean
  title?: ReactNode
  content: ReactNode | ModalContentRender
  onClose?: Function
  closeable?: boolean
  showCloseBtn?: boolean
  size?: Size
}

const Modal: FunctionComponent<ModalProps> = ({
  open = false,
  title,
  content,
  onClose,
  closeable = true,
  showCloseBtn = true,
  size = 'md',
}) => {
  let dialogContent: ReactNode
  if (!isReactNode(content)) {
    dialogContent = (content as ModalContentRender)({
      onClose: () => onClose?.(),
    })
  } else {
    dialogContent = content
  }

  const width = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-3xl',
    full: 'max-w-full',
  }[size]

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          // 点击panel外或按esc
          closeable && onClose?.()
        }}
        style={{ width: '1500px', height: '300px' }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="false"
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full ${width} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative`}
              >
                {showCloseBtn && (
                  <XMarkIcon
                    onClick={() => {
                      onClose?.()
                    }}
                    className="w-6 h-6 absolute right-2 top-2 text-gray-400 hover:text-black cursor-pointer"
                  />
                  // <FontAwesomeIcon
                  //   icon={faXmark}
                  //   className="w-5 h-5 absolute right-2 top-2 text-gray-400 hover:text-black cursor-pointer"
                  //   onClick={() => {
                  //     onClose?.()
                  //   }}
                  // />
                )}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">{dialogContent}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
