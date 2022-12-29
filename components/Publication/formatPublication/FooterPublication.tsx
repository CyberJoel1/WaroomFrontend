
import React from 'react'
import SeparatorComponent from '../../../utils/SeparatorComponent';
import CommentPublication from './CommentPublication';
import ButtonsInteractive from '../particles/ButtonsInteractive';

type Props = {}

const FooterPublication = (props: Props) => {
  return (
    <div className=''>
      <SeparatorComponent />
        <ButtonsInteractive/>
      <SeparatorComponent/>
      <CommentPublication/>

    </div>
  )
}

export default FooterPublication;