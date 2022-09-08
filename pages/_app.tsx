import '../styles/globals.css'
import type {AppProps} from 'next/app'
import 'antd/dist/antd.css'
import { Layout,Image, Switch } from 'antd'
import { Content, Header,  } from 'antd/lib/layout/layout'
import HeaderPage from '@components/layout/header'
import { useEffect, useState } from 'react'
import { getScreenSize } from '@common/index'
import { wrapper } from 'store/store'

function MyApp({Component, pageProps}: AppProps) {
const [screenSize,setScreenSize]=useState<String>();
const [padding,setPadding] =useState('0 200px')

useEffect(() =>{
    setScreenSize(getScreenSize())
},[])
useEffect(() =>{
    switch(screenSize){
        case 'xxl': setPadding('0 200px')
            break;
        case'xl':setPadding('0 100px')
            break;
         case'lg':setPadding('0 100px')
            break;
         case'md':setPadding('0 50px')
            break;
        default: setPadding('0 20px')
            
    }
},[screenSize])
const handleResize = () => {
   setScreenSize(getScreenSize())
}
// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})
console.log("screenSize la: ",screenSize)
    return <>
    <Layout  >
        <HeaderPage padding={padding} />   
        <Content
          style={{
            padding: `${padding}`,
            marginTop: "80px",
          }}
        >
            <Component {...pageProps} />
        </Content>
    </Layout>
    </>
}

export default wrapper.withRedux(MyApp);
