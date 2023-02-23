
import AppartHead from '../../components/AppartHead/AppartHead'
import AppartBan from '../../components/AppartBan/AppartBan'
import {Log}  from '../../Datas/Log'
import DropD from './../../components/DropD/DropD';
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export  function Appart() {
  const id = useParams();
    const selectAppart = Log.find(appart => appart.id === id.id);


  return (
    <>{selectAppart ? (
        
            <div className='page_appart'>
                <AppartBan pictures = {selectAppart.pictures} />
                <AppartHead selectAppart={selectAppart}/>
                <div className='details'>                
                <DropD title="Description" content={selectAppart.description}/>
                <DropD title="Equipments" content={selectAppart.equipments.map((equipement, i)=><ul className="equip"  key={i}>{equipement}</ul>)}/>
                </div> 
            </div>    
     ) : <Navigate  to ="{<Error/>"/>
    }
    </>
  )
  }
 export default Appart