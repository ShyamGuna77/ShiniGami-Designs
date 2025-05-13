

import { protectServer } from '@/features/auth/utils'
import { Editor } from '@/features/editor/components/editor'

import React from 'react'

const  EditorProjectPage = async() => {

  await protectServer()
  return (
 
      <Editor />
    
  );
}

export default EditorProjectPage