import {  formatDate } from '../helper/helper'
import Divider from '@mui/material/Divider'
import { LeftPSContainer } from './styled/LeftPSContainer'
import React from 'react'
import { ResumeContext } from './context/ResumeContext'
import { ResumeStyle } from './styled/Resume.style'

export function Resume({ side }) {
  const { resumeState } = React.useContext(ResumeContext)

  if (side === 'right')
    return (
      <>
        <ResumeStyle>
          <h1>{resumeState.personalDetails.name}</h1>
          <Divider
            style={{ color: ' #323B4C', }}
            sx={{
              '&::after': {
                backgroundColor: '#ffffff69',
              },
              '&::before': {
                backgroundColor: '#ffffff69',
              },
            }}
          >
            Eperience
          </Divider>
          {resumeState.experienceArray.map((obj) => {
            console.log('aqu', obj);
          return  <>
              <h2>{obj.companyName}</h2>
              <h3>{obj.positionTitle}</h3>
              <p>{formatDate(obj.startDate) } - {formatDate(obj.endDate)}</p>
            </>
          })}
        </ResumeStyle>
      </>
    )
  return (
    side === 'left' && (
      <>
        
        <Divider
          style={{ color: 'white', marginTop:'50px' }}
          sx={{
            '&::after': {
              backgroundColor: '#ffffff69',
            },
            '&::before': {
              backgroundColor: '#ffffff69',
            },
          }}
        >
          Contact
        </Divider>
        <LeftPSContainer>
          {Object.keys(resumeState.personalDetails).map((key) => {
            if (key === 'name') return
            return (
              <>
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                <p>{resumeState.personalDetails[key]}</p>
              </>
            )
          })}
        </LeftPSContainer>
        <Divider
          style={{ color: 'white' }}
          sx={{
            '&::after': {
              backgroundColor: '#ffffff69',
            },
            '&::before': {
              backgroundColor: '#ffffff69',
            },
          }}
        >
          Education
        </Divider>
        <LeftPSContainer>
          {resumeState?.educationArray.map((obj) => {
            return (
              <>
                <h3>{obj.school}</h3>
                <p>{obj.degree}</p>
                {obj.startDate && obj.endDate && (
                  <p>
                    {formatDate(obj.startDate)} - {formatDate(obj.endDate)}{' '}
                    {obj.location}
                  </p>
                )}
              </>
            )
          })}
        </LeftPSContainer>
        <Divider
          style={{ color: 'white' }}
          sx={{
            '&::after': {
              backgroundColor: '#ffffff69',
            },
            '&::before': {
              backgroundColor: '#ffffff69',
            },
          }}
        >
          Tech Skills
        </Divider>
        <LeftPSContainer>
          <p>{resumeState.techSkills}</p>
        </LeftPSContainer>
      </>
    )
  )
}