import { Row } from 'antd'
import React, { useState } from 'react'
import CustomButton from 'src/commonComponents/button'
import HeadContent from './components/headContent'
import AddProduct from './step2'
import CreateCampaign from './step3'
import styles from './index.module.scss'
import CampaignGoal from './step3/campaignGoal'
import { useSelector } from "react-redux";
import { selectProductCurrentPageState } from 'store/productsSlice'
import CampaignFrame from './step3/campaignFrame'
const ProductsPage = () => {
  const  currentTab = useSelector(selectProductCurrentPageState);
	function generateTabs() {
		switch(currentTab) {
			case "2": return <AddProduct />
			case "3": return<CreateCampaign />
			case "3.1": return<CampaignFrame/>

		}
	}
  return (
	<>
		<HeadContent currentTab={currentTab}/>
			{generateTabs()}
		
	</>
  )
}

export default ProductsPage