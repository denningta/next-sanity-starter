import { Card } from '@sanity/ui'
import { FieldProps } from 'sanity'

type SlugFieldProps = FieldProps & {
  value?: {
    _type?: string
    current?: string
  }
}

function SlugExample(props: SlugFieldProps) {

  const value = props.value && props.value.current

  return (
    <Card border padding={3}>
      {props.renderDefault(props)}
      <div className='flex'>
        {value &&
          <>
            <div style={{ color: 'rgb(255 255 255 / .4)' }}> https://www.yourdomain.com</div>
            <div>/{value}</div>
          </>
        }

      </div>
    </Card>
  )
}

export default SlugExample
