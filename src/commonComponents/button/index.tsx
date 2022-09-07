import { Button, Typography } from 'antd'
import React from 'react'
import styles from './index.module.scss'
export interface CustomButtonProps{
	background: "white"|"black";
	title:string;
	htmlType?:"button" | "submit" | "reset" | undefined
}
export interface btnStyle {
	backgroundColor?:string;
	color?:string;
	border?:string;
}
const CustomButton = (props: CustomButtonProps) =>{
const {background,title,htmlType} =props
let btnStyle:btnStyle;
switch (background) {
  case "black":
    btnStyle = {
		backgroundColor:" #232323", color: "white"
	};
    break;
  case "white":
	 btnStyle = {
		backgroundColor:" #F8F8F8",
		color: "#232323",
		border: "1px solid #232323"
	};
    break;
 
}
  return (
	<Button className={styles.button}
		style={btnStyle}
		htmlType={htmlType}
	>
    	{title}
    </Button>
  )
}

export default CustomButton