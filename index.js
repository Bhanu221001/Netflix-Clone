import React,{useState} from 'react'
import Tabs from './Tabs'
import { tablabels } from './constant'
const Tabcomponent = () => {
    const[activeTab,setActieTab]=useState(tablabels.CANCEL_AT_ANY_TIME)
    const onClickTab=(tab)=>{
        setActieTab(tab);
    }
  return (
    <div>
        <Tabs activeTabName={activeTab} onClickTab={onClickTab}/>
    </div>
  )
}

export default Tabcomponent