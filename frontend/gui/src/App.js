import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout'
import { connect, useSelector, useDispatch } from "react-redux";
import BaseRouter from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import * as actions from './store/actions/auth'


function App() {
    const isAuthenticated = useSelector(state => state.token !== null);
    const state = useSelector(state => state);
    console.log(state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.authCheckState())
    },[]);
    // useEffect(this.props.onTryAutoSignup(),[]);

  return (
    <div>
        <Router>
            <CustomLayout {...state}>
                <BaseRouter/>
            </CustomLayout>
        </Router>
    </div>
  );
}

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.token != null
//     }
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onTryAutoSignup: () => {dispatch(actions.authCheckState())}
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);



export default App;