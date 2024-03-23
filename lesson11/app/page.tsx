'use client'
import myndImage from './mynd.png'
import { useState, Fragment, useCallback } from 'react'

const DATA = [
  {
    id: 0,
    title: 'Horse Identifier',
    subTitle: 'November 1100 - 2000',
    description:
      'This role requires expertise in equine anatomy and breed characteristics, attention to detail, and the ability to maintain accurate records'
  },
  {
    id: 1,
    title: 'Scaley McScaleFace Mascot Performer',
    subTitle: 'November 2000 - 2010',
    description:
      'This role involves developing the mascot’s character, performing at various events, and maintaining the costume.'
  },
  {
    id: 2,
    title: 'Flavor Guru',
    subTitle: 'November 2010 - present',
    description:
      'This role involves tasting and developing new ice cream flavors, ensuring they meet quality standards, and sometimes even traveling to source ingredients. It’s a job that combines creativity, sensory analysis, and a love for ice cream'
  }
]

type JobProps = {
  title: string
  subTitle: string
  description: string
}

const Job = (props: JobProps) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.subTitle}</p>
      <p>{props.description}</p>
    </div>
  )
}



type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '2px solid #246' }}>
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: '36px' }}>Bara Ég</h1>
      <p style={{ fontSize: '20px' }}>Ég geri hluti</p>
    </div>
    <div>
      <img src='mynd.png' alt="Mynd" style={{ width: '300px', height: 'auto', borderRadius: '50%' }} />
    </div>
  </div>
}

type ContentProps = {
  data: typeof DATA
}

const Content = (props: ContentProps) => {
  return (
    <div style={{ margin: '20px', padding: '10px' }}>
      {props.data.map(item => {
        let imageSrc;
        switch (item.title) {
          case 'Horse Identifier':
            imageSrc = '/horse.jpg';
            break;
          case 'Scaley McScaleFace Mascot Performer':
            imageSrc = '/mascot.jpg';
            break;
          case 'Flavor Guru':
            imageSrc = '/guru.jpg';
            break;
          default:
            imageSrc = '';
        }

        return (

          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', border: '1px solid #189e11', borderRadius: '4px' }}>
            <div style={{ flex: 1 }}>
              <h2>{item.title}</h2>
              <h3>{item.subTitle}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <img src={imageSrc} alt={item.title} style={{ width: '250px', height: 'auto', borderRadius: '4px', marginLeft: '10px' }} />
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header />
      <Content data={DATA} />
    </div>
  )
}

// type Props = {

//   state: number
//   handleClick: () => void
// }

// const ChildComponent = ({ state, handleClick }: Props) => {
//   const click = () => {
//     handleClick()
//   }

//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={click} className='bg-neutral-700	'>
//         Button
//       </button>
//     </>
//   )
// }

// const ParentComponent = () => {
//   const [state, setState] = useState(0)
//   const handleClick = () => {
//     setState(s => s + 1)
//   }

//   return (
//     <>
//       <ChildComponent state={state} handleClick={handleClick} />
//     </>
//   )
// }