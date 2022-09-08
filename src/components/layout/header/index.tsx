import { Header} from "antd/lib/layout/layout";
import {Image} from "antd"
import React from "react";
import styles from './index.module.scss';

type HeaderProps = {
    padding?: string | number | undefined;
}
const HeaderPage: React.FC<HeaderProps> = (props: HeaderProps) => {
    const{padding} = props
    return (
           <Header
            style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            padding: `${padding}`,
            backgroundColor: '#232323'
          }}
        >
          <div className={styles.header} >
            <div className={styles.headerLeft}>
              <Image src="/images/menu.svg" preview={false} />
              <Image src="/images/trendiiLogo.png" preview={false} />
            </div>
            <div className={styles.headerRight}>
              <Image src="/images/bell.svg" preview={false} />
              <Image src="/images/user.svg" preview={false} />
            </div>
          </div>
          
        </Header>
    )
}

export default HeaderPage