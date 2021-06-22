import { ReactNode } from 'react';
import './index.scss';

interface TitleProps {
  titleType: string,
  children: ReactNode,
  id?: string
}

function Title(props: TitleProps) {
  const { titleType, children, id } = props;
  return (
    <h2 className={`title-${titleType}`} id={id}>{children}</h2>
  )
}
export default Title;
