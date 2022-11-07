import {ComponentProps, ReactElement, VFC} from "react";
import classNames from "classnames";
import Link from "next/link";

type NavigationProps = ComponentProps<'header'> & {
  logoSlot?: ReactElement
};

export const Navigation: VFC<NavigationProps> = props => {
  const {
    className = '',
    children,
    logoSlot = null,
    ...attrs
  } = props;

  return <header className={classNames(className, `pt-4`)} {...attrs}>
    <div className="container">
      <div className="md:flex flex-row gap-col justify-between items-center">
        <div className="organization">
          <img src="/images/logo.svg" height={80} width={80} alt=""/>
          {logoSlot}
        </div>
        <nav className="nav">
          <ul className={'flex justify-end gap-4'} role={'menu'}>
            <li role={'menuitem'}><Link href={'/blog'} title={`go to content page`}>Blog</Link></li>
            <li role={'menuitem'}><Link href={'/blog'} title={`go to code experiment's page`}>Experiments</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
}