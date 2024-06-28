import React from 'react'
import ResumePDF from '../assests/pdf/TEDx.pdf'


export default function Resume() {
  const onResumeClick = () => {
    window.open(ResumePDF);
  }
  return (
    <div>
      <a href={onResumeClick()} target='_blank' rel='noreferrer' >Resume</a>
    </div>
  )
}
