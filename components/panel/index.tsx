import Auth from '../auth'
import panelStyles from './panel.module.css'

export interface PanelProps {
    
}
 
const Panel: React.FC<PanelProps> = () => {
    return ( 
        <div className={panelStyles.container}>
            <Auth/>
        </div>
     );
}
 
export default Panel;