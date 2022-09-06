import React from 'react'
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";

type PropsType = {
    children?: unknown
    course?: boolean
    community?: boolean
}

const Main: React.FC<PropsType> = ({children, course = false, community = false}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Main
