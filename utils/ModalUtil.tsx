'use client'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Button, Label, Modal, Textarea } from 'flowbite-react';
import DragArea from '../components/Gallery/DragArea';
type Props = {
  setData: Dispatch<SetStateAction<boolean>>;
  data: boolean;
}

const ModalUtil = (props: Props) => {
  const { data, setData } = props
  const ref = React.useRef<HTMLDivElement>(null);
  const findParentRoot = (value: any, saltos: number): any => {
    if (saltos > 0) {
      if (value != null) {
        if (value.parentElement?.getAttribute('aria-hidden') == 'false') {
          console.log(value.parentElement);
          return true;

        } else {
          return findParentRoot(value.parentElement, saltos - 1);
        }
      }
    }
    return false;
  }

  const handleClickOutside = (event: any) => {
    if (!ref?.current?.contains(event.target)) {
      setData(findParentRoot(event.target, 9));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return (
    <div ref={ref}>
      <Modal show={data} onClose={() => setData(!data)}>
        <Modal.Header>
          Terms of Service
        </Modal.Header>
        <Modal.Body>
          <div id="textarea">
            <div className="mb-2 block">
              <Label
                htmlFor="comment"
                value="Your message"
              />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required={true}
              rows={4}
            />
          </div>
          <DragArea data={data}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setData(!data)}>
            I accept
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ModalUtil