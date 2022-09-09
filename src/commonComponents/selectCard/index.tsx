import React from 'react'
import styles from './index.module.scss'
import { Image, Typography } from 'antd'
export interface SelectCardProps{
	isSelected?: boolean;
	title: string;
	cardIcon:string;
	cardIconBg: string;
	onClick?: () => void;
}
const SelectCard = (props: SelectCardProps) =>{
	const{isSelected,title,cardIcon,cardIconBg,onClick} = props
  return (
	<div className={styles.selectedTag} onClick={onClick}
	style={{ border: isSelected ?"1px solid #59d30c" : "1px solid #DEDEDE"}}>
		<div className={styles.selectIcon} >
			 {isSelected ?<Image src='/images/selected.svg'
                      preview={false}
                      /> : <Image src='/images/unSelect.svg'
                      preview={false}
                      /> }
		</div>
		<div className={styles.cardIcon} style={{background: cardIconBg}} >
			<Image src={cardIcon}
                      preview={false}
                      /> 
		</div>
		
		<Typography.Title level={5}>{title}</Typography.Title>
		
	</div>
  )
}

export default SelectCard
//style={{ background: "rgba(243, 44, 151, 0.08)"}}