import { useSelector } from "react-redux"
import { selectProductCurrentPageState } from 'store/productsSlice'
import HeadContent from './components/headContent'
import LogoUploadBox from "./step1/logo-upload-box"
import AddProduct from './step2'
import CreateCampaign from './step3'
import CampaignFrame from './step3/createCampaignForm'
import CreateCampaignSuccess from './success'

const ProductsPage = () => {
  let title="";
  const  currentTab = useSelector(selectProductCurrentPageState);
	function generateTabs() {
		switch(currentTab) {
			case"1": return  <LogoUploadBox />
			case "2": 
				return <AddProduct />
			
			case "3": return<CreateCampaign />
			case "3.1": return<CampaignFrame/>
			case "success": return <CreateCampaignSuccess/>
		}
	}
  switch(currentTab){
	case"1": title= "Upload Logo";  break;
	case"2": title= "Add product";  break;
	case"3": title= "Create new Campaign"; break;
	case"3.1": title= "Create new Campaign"; break;
  }
  return (
	<>
		<HeadContent currentTab={currentTab} title={title} />
			{generateTabs()}
		
	</>
  )
}

export default ProductsPage