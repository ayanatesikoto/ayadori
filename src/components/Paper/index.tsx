import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode,
}

const Article = styled.article`

`

const Paper = ({children}: Props) => {
  return (
    <Article>
      <h1></h1>
      {children}
    </Article>
  )
}

export default Paper
