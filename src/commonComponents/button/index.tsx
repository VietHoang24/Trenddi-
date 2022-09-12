import { Button, Typography } from 'antd'
import React from 'react'
import styles from './index.module.scss'
export interface CustomButtonProps{
	background: "white"|"black";
	title:string;
	htmlType?:"button" | "submit" | "reset" | undefined
	onClick?:()=>void;
	form?:string;
	width?:string;
	height?:string;
}
export interface btnStyle {
	backgroundColor?:string;
	color?:string;
	border?:string;
	width?:string;
	height?:string;
}
const CustomButton = (props: CustomButtonProps) =>{
const {background,title,htmlType,onClick,form,width,height} = props
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
	width&&(btnStyle['width']=width)
	height&&(btnStyle['height']=height)
  return (
	<Button className={styles.button}
		style={btnStyle}
		htmlType={htmlType}
		onClick={onClick}
		form={form}
	>
    	{title}
    </Button>
  )
}

export default CustomButton