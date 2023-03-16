import { FunctionComponent, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {}

const Modal: FunctionComponent<ModalProps> = () => {
  const nodeRef = useRef(document.createElement('div'))
  // nodeRef.current =
  useEffect(() => {
    document.getElementById('modals')?.appendChild(nodeRef.current)
    return () => {
      nodeRef.current.remove()
    }
  }, [nodeRef])

  return ReactDOM.createPortal(
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="tw-modal-toggle"
        checked
      />
      <label
        htmlFor="my-modal-4"
        className="tw-modal tw-cursor-pointer tw-items-center"
      >
        <label className="tw-modal-box tw-relative" htmlFor="">
          <label
            htmlFor="my-modal-4"
            className="tw-absolute tw-right-4 tw-top-2"
          >
            ✕
          </label>
          <h3 className="tw-text-lg tw-font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="tw-py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="tw-modal-action">
            <label htmlFor="my-modal-4" className="tw-btn">
              Yay!
            </label>
          </div>
        </label>
      </label>
    </>,
    nodeRef.current,
  )
}

export default Modal
