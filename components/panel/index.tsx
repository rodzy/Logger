import Auth from '../auth'
import panelStyles from './panel.module.css'
 
const Panel: React.FC = () => {
    return ( 
        <div className={panelStyles.container}>
            <Auth/>
        </div>
     );
}
 
export default Panel;