import { ReactNode } from 'react';
import titleList from '../../constants/titleList';
import './index.scss';

interface ContentLayoutProps {
  children: ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="content-layout">
      <ul className="content-nav">
        {titleList.map((item) => {
          return (
            <li key={item.nav}><a href={`#${item.nav}`}>{item.name}</a></li>
          )
        })}
      </ul>
      <div className="content-wrap">{children}</div>
    </div>
  )
}
export default ContentLayout;
