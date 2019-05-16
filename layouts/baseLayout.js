import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SimpleTable from '../components/SimpleTable';

import TopBar from '../components/fragments/AppBar';
import Sidebar from '../components/fragments/Sidebar';

const BaseLayout =  ({children}, propsChildren) => (
    <div className={classes.root}>
        <CssBaseline />   
        <TopBar {...propsChildren}></TopBar>
        <Sidebar {...propsChildren}></Sidebar>     
        
      </div>
)

export default BaseLayout;