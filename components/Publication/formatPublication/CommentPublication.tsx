import React from 'react'
import IndividualComment from '../particles/IndividualComment'
import IndividualCommentExtern from '../particles/IndividualCommentExtern'
import InsertComment from '../particles/InsertComment'

type Props = {}

const CommentPublication = (props: Props) => {
  return (
    <div className='w-full p-3 pr-7 bg-blue-50 rounded-b-lg'>
        <InsertComment/>
        <IndividualComment/>

        <IndividualCommentExtern/>
    </div>
  )
}

export default CommentPublication