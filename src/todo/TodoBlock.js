/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React from 'react'
import { EditorBlock, EditorState } from 'draft-js'
import styled from 'styled-components'

const updateDataOfBlock = (editorState, block, newData) => {
  const contentState = editorState.getCurrentContent()
  const newBlock = block.merge({ data: newData })
  const newContentState = contentState.merge({
    blockMap: contentState.getBlockMap().set(block.getKey(), newBlock)
  })
  return EditorState.push(editorState, newContentState, 'change-block-type')
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.updateData = ::this.updateData
  }

  updateData() {
    const { block, blockProps } = this.props

    const { onChange, editorState } = blockProps
    const data = block.getData()
    const checked = (data.has('checked') && data.get('checked') === true)
    const newData = data.set('checked', !checked)
    onChange(updateDataOfBlock(editorState, block, newData))
  }

  render() {
    const data = this.props.block.getData()
    const checked = data.get('checked') === true
    return (
      <TodoWrapper data-plugin-type='todo'>
        <TodoInput type='checkbox' checked={checked} onClick={this.updateData} />
        <TodoBlock checked={checked} >
          <EditorBlock {...this.props} />
        </TodoBlock>
      </TodoWrapper>
    )
  }
}

const TodoWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
`

const TodoBlock = styled.div`
  margin-left: 15px;
  border-bottom: 1px solid black;
  text-decoration: ${props => props.checked ? 'line-through' : 'initial'};
`

const TodoInput = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    border: solid 9px #272727;
    border-radius: 9px;
    height: 0;
    width: 0;
    position: absolute;
    left: 7px;
    top: 40%;
    margin-top: -8px;
  }

  &:after {
    content: '';
    display:block;
    width: 4px;
    height: 6px;
    border: ${props => props.checked ? 'solid #ff4136' : 'solid white'};
    border-width: 0 2px 2px 0;
    position:absolute;
    left: 14px;
    top: 2px;
    margin-top: -4px;
    transform: rotate(45deg);
  }

`
